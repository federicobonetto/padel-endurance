-- Esquema base para convertir el prototipo en una plataforma real con Supabase/PostgreSQL.
create extension if not exists "uuid-ossp";

create table public.players (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  full_name text not null,
  birth_date date,
  city text default 'Olavarría',
  category text not null,
  preferred_side text,
  play_style text,
  club text,
  phone text,
  email text,
  bio text,
  avatar_url text,
  ranking_points integer default 0,
  created_at timestamptz default now()
);

create table public.venues (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  address text,
  city text default 'Olavarría',
  court_count integer default 1,
  latitude numeric,
  longitude numeric
);

create table public.tournaments (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  category text not null,
  gender_mode text,
  status text default 'draft',
  registration_open_at timestamptz,
  registration_close_at timestamptz,
  starts_at timestamptz,
  ends_at timestamptz,
  venue_id uuid references public.venues(id),
  max_pairs integer,
  created_at timestamptz default now()
);

create table public.teams (
  id uuid primary key default uuid_generate_v4(),
  tournament_id uuid references public.tournaments(id) on delete cascade,
  player_one_id uuid references public.players(id),
  player_two_id uuid references public.players(id),
  seed integer,
  status text default 'pending'
);

create table public.groups (
  id uuid primary key default uuid_generate_v4(),
  tournament_id uuid references public.tournaments(id) on delete cascade,
  name text not null
);

create table public.group_teams (
  group_id uuid references public.groups(id) on delete cascade,
  team_id uuid references public.teams(id) on delete cascade,
  played integer default 0,
  won integer default 0,
  lost integer default 0,
  games_for integer default 0,
  games_against integer default 0,
  points integer default 0,
  primary key(group_id, team_id)
);

create table public.matches (
  id uuid primary key default uuid_generate_v4(),
  tournament_id uuid references public.tournaments(id) on delete cascade,
  group_id uuid references public.groups(id),
  phase text not null,
  round_number integer,
  bracket_position integer,
  team_one_id uuid references public.teams(id),
  team_two_id uuid references public.teams(id),
  winner_id uuid references public.teams(id),
  court_name text,
  scheduled_at timestamptz,
  score jsonb default '[]'::jsonb,
  status text default 'scheduled',
  updated_at timestamptz default now()
);

alter table public.players enable row level security;
create policy "players are publicly readable" on public.players for select using (true);
create policy "users create their profile" on public.players for insert with check (auth.uid() = user_id);
create policy "users update their profile" on public.players for update using (auth.uid() = user_id);
