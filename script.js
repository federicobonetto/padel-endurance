const $ = (s, c=document) => c.querySelector(s);
const $$ = (s, c=document) => [...c.querySelectorAll(s)];

const tournaments = [
  {id:'endurance7',status:'INSCRIPCIÓN ABIERTA',number:'01',title:'Copa Endurance',subtitle:'7MA Caballeros · Fecha 1',date:'15–17 AGO',venue:'Cargando desde Google Maps…',pairs:'24 parejas',spots:'6 lugares disponibles',accent:'#dfff00',soft:'rgba(223,255,0,.18)',image:'assets/tournament-01.webp'},
  {id:'mixto6',status:'EN JUEGO',number:'02',title:'Circuito Nocturno',subtitle:'6TA Mixto · Etapa 3',date:'VIE 20:00',venue:'Cargando desde Google Maps…',pairs:'16 parejas',spots:'Fase de grupos',accent:'#f15bb5',soft:'rgba(214,26,147,.22)',image:'assets/tournament-02.webp'},
  {id:'challenger8',status:'PRÓXIMAMENTE',number:'03',title:'Challenger Primavera',subtitle:'8VA Libre · Ranking local',date:'05–07 SEP',venue:'Cargando desde Google Maps…',pairs:'32 parejas',spots:'Lista de espera activa',accent:'#ffffff',soft:'rgba(255,255,255,.13)',image:'assets/tournament-03.webp'}
];

const seedPlayers = [
  {name:'Martina López',category:'6TA',side:'Drive',style:'Lectura y consistencia',club:'Central Padel',played:21,wins:14,points:980,photo:'assets/player-01.webp'},
  {name:'Tomás Ferreyra',category:'7MA',side:'Revés',style:'Potencia y definición',club:'Endurance Club',played:18,wins:12,points:840,photo:'assets/player-02.webp'},
  {name:'Camila Ruiz',category:'5TA',side:'Drive',style:'Control de ritmo',club:'La Catedral',played:29,wins:21,points:1380,photo:'assets/player-03.webp'},
  {name:'Valentina Paz',category:'7MA',side:'Revés',style:'Volea agresiva',club:'Central Padel',played:15,wins:9,points:650,photo:'assets/player-04.webp'},
  {name:'Nicolás Duarte',category:'7MA',side:'Revés',style:'Ataque aéreo',club:'Punto de Oro',played:16,wins:10,points:735,photo:'assets/player-05.webp'},
  {name:'Julia Acosta',category:'6TA',side:'Drive',style:'Defensa y transición',club:'La Catedral',played:24,wins:17,points:1120,photo:'assets/player-06.webp'},
  {name:'Luciano Pérez',category:'6TA',side:'Drive',style:'Contraataque',club:'Punto de Oro',played:20,wins:13,points:905,photo:'assets/player-07.webp'},
  {name:'Paula Ríos',category:'8VA',side:'Indistinto',style:'En crecimiento',club:'Endurance Club',played:9,wins:5,points:390,photo:'assets/player-08.webp'}
];

const groupData = {
  endurance7: {
    A: {
      table:[['Ferreyra / Sosa',3,3,0,18,9],['Duarte / Molina',3,2,1,15,12],['Pérez / Acosta',3,1,2,12,15],['Gómez / Ríos',3,0,3,8,18]],
      matches:[['Ferreyra / Sosa','6 6','Gómez / Ríos','2 3','Finalizado'],['Duarte / Molina','6 4 6','Pérez / Acosta','3 6 2','Finalizado'],['Ferreyra / Sosa','—','Duarte / Molina','—','Vie 21:30 · Central']]
    },
    B: {
      table:[['Rivas / Torres',3,3,0,18,7],['López / Vidal',3,2,1,14,11],['Castro / Luna',3,1,2,11,15],['Silva / Arias',3,0,3,8,18]],
      matches:[['Rivas / Torres','6 6','Silva / Arias','1 2','Finalizado'],['López / Vidal','7 6','Castro / Luna','5 4','Finalizado'],['Rivas / Torres','—','López / Vidal','—','Sáb 18:00 · C2']]
    },
    C: {
      table:[['Bustos / Díaz',3,2,1,16,12],['Méndez / Gil',3,2,1,15,13],['Rossi / Vera',3,1,2,13,15],['Paz / Cano',3,1,2,11,15]],
      matches:[['Bustos / Díaz','6 6','Paz / Cano','4 3','Finalizado'],['Méndez / Gil','6 3 6','Rossi / Vera','4 6 3','Finalizado'],['Bustos / Díaz','—','Méndez / Gil','—','Sáb 19:30 · C1']]
    },
    D: {
      table:[['Navarro / León',3,3,0,18,10],['Quiroga / Suárez',3,2,1,16,12],['Ibarra / Costa',3,1,2,12,16],['Funes / Alba',3,0,3,10,18]],
      matches:[['Navarro / León','6 7','Funes / Alba','3 5','Finalizado'],['Quiroga / Suárez','6 6','Ibarra / Costa','4 2','Finalizado'],['Navarro / León','—','Quiroga / Suárez','—','Dom 11:00 · C3']]
    }
  },
  mixto6: {
    A:{table:[['López / Pérez',3,3,0,18,8],['Ruiz / Duarte',3,2,1,15,11],['Paz / Molina',3,1,2,12,15],['Vega / Sosa',3,0,3,7,18]],matches:[['López / Pérez','6 6','Vega / Sosa','2 1','Finalizado'],['Ruiz / Duarte','6 7','Paz / Molina','4 5','Finalizado'],['López / Pérez','—','Ruiz / Duarte','—','Hoy 22:00 · C1']]},
    B:{table:[['Campos / Ríos',3,3,0,18,9],['Mora / Acosta',3,2,1,14,12],['Ferrer / Vidal',3,1,2,11,15],['Luna / Díaz',3,0,3,9,18]],matches:[['Campos / Ríos','6 6','Luna / Díaz','3 2','Finalizado'],['Mora / Acosta','6 6','Ferrer / Vidal','4 4','Finalizado'],['Campos / Ríos','—','Mora / Acosta','—','Mañana 20:30 · C2']]}
  }
};

const venues = [
  {name:'Endurance Club',courts:'4 canchas',address:'Av. Colón 3250 · Olavarría',next:'Vie 21:30',match:'Ferreyra/Sosa vs Duarte/Molina',image:'assets/venue-01.webp'},
  {name:'La Catedral',courts:'3 canchas',address:'Rivadavia 4470 · Olavarría',next:'Hoy 22:00',match:'López/Pérez vs Ruiz/Duarte',image:'assets/venue-02.webp'},
  {name:'Punto de Oro',courts:'5 canchas',address:'Ruta 226 Km 293 · Olavarría',next:'Sáb 18:00',match:'Rivas/Torres vs López/Vidal',image:'assets/venue-03.webp'},
  {name:'Central Padel',courts:'2 canchas',address:'Alsina 1855 · Olavarría',next:'Dom 11:00',match:'Navarro/León vs Quiroga/Suárez',image:'assets/venue-04.webp'}
];

const bracketData = {
  endurance7: {
    rounds:['OCTAVOS','CUARTOS','SEMIFINAL','FINAL'],
    matches:[
      [
        {teams:[{name:'Ferreyra / Sosa',sets:[6,6]},{name:'Pérez / Acosta',sets:[2,3]}],status:'Finalizado'},
        {teams:[{name:'Duarte / Molina',sets:[6,4,6]},{name:'Gómez / Ríos',sets:[3,6,2]}],status:'Finalizado'},
        {teams:[{name:'Rivas / Torres',sets:[6,6]},{name:'Castro / Luna',sets:[3,2]}],status:'Finalizado'},
        {teams:[{name:'López / Vidal',sets:[7,6]},{name:'Silva / Arias',sets:[5,1]}],status:'Finalizado'},
        {teams:[{name:'Bustos / Díaz',sets:[6,6]},{name:'Rossi / Vera',sets:[4,3]}],status:'Finalizado'},
        {teams:[{name:'Méndez / Gil',sets:[7,6]},{name:'Paz / Cano',sets:[5,4]}],status:'Finalizado'},
        {teams:[{name:'Navarro / León',sets:[6,6]},{name:'Ibarra / Costa',sets:[2,4]}],status:'Finalizado'},
        {teams:[{name:'Quiroga / Suárez',sets:[6,6]},{name:'Funes / Alba',sets:[4,3]}],status:'Finalizado'}
      ],
      [
        {teams:[{name:'Ferreyra / Sosa',sets:[6,6]},{name:'Duarte / Molina',sets:[4,3]}],status:'Finalizado'},
        {teams:[{name:'Rivas / Torres',sets:[6,3,6]},{name:'López / Vidal',sets:[3,6,2]}],status:'Finalizado'},
        {teams:[{name:'Bustos / Díaz',sets:[4,6,3]},{name:'Méndez / Gil',sets:[6,3,6]}],status:'Finalizado'},
        {teams:[{name:'Navarro / León',sets:[6,6]},{name:'Quiroga / Suárez',sets:[2,4]}],status:'Finalizado'}
      ],
      [
        {teams:[{name:'Ferreyra / Sosa',sets:[6,6]},{name:'Rivas / Torres',sets:[3,4]}],status:'Finalizado'},
        {teams:[{name:'Méndez / Gil',sets:[4,6,3]},{name:'Navarro / León',sets:[6,3,6]}],status:'Finalizado'}
      ],
      [{teams:[{name:'Ferreyra / Sosa',sets:[]},{name:'Navarro / León',sets:[]}],status:'Próximo partido · Cancha central'}]
    ]
  },
  mixto6: {
    rounds:['CUARTOS','SEMIFINAL','FINAL','CAMPEONES'],
    matches:[
      [
        {teams:[{name:'López / Pérez',sets:[6,6]},{name:'Vega / Sosa',sets:[2,1]}],status:'Finalizado'},
        {teams:[{name:'Ruiz / Duarte',sets:[7,6]},{name:'Paz / Molina',sets:[5,4]}],status:'Finalizado'},
        {teams:[{name:'Campos / Ríos',sets:[6,6]},{name:'Ferrer / Vidal',sets:[3,2]}],status:'Finalizado'},
        {teams:[{name:'Mora / Acosta',sets:[6,4,6]},{name:'Luna / Díaz',sets:[4,6,3]}],status:'Finalizado'}
      ],
      [
        {teams:[{name:'López / Pérez',sets:[6,6]},{name:'Ruiz / Duarte',sets:[4,2]}],status:'Finalizado'},
        {teams:[{name:'Campos / Ríos',sets:[3,6,4]},{name:'Mora / Acosta',sets:[6,3,6]}],status:'Finalizado'}
      ],
      [{teams:[{name:'López / Pérez',sets:[6,6]},{name:'Mora / Acosta',sets:[4,3]}],status:'Finalizado'}],
      [{teams:[{name:'López / Pérez',sets:['🏆']},{name:'Campeones 2026',sets:[]}],status:'Campeones'}]
    ]
  }
};

function renderTournaments(){
  $('#tournament-grid').innerHTML=tournaments.map(t=>`<article class="tournament-card reveal" style="--accent:${t.accent};--accent-soft:${t.soft}">
    <div class="tournament-image"><img src="${t.image}" alt="${t.title}" loading="lazy"/><div class="tournament-top"><span class="status">${t.status}</span><span class="tournament-number">${t.number}</span></div></div>
    <div class="tournament-body"><h3>${t.title}</h3><p>${t.subtitle}</p>
      <div class="tournament-meta"><div><span>Fecha</span><strong>${t.date}</strong></div><div><span>Sede</span><strong>${t.venue}</strong></div><div><span>Cupo</span><strong>${t.pairs}</strong></div><div><span>Modalidad</span><strong>Grupos + llave</strong></div></div>
      <div class="tournament-footer"><a href="#llaves" data-bracket="${t.id}">VER TORNEO →</a><span class="spots">${t.spots}</span></div>
    </div>
  </article>`).join('');
  observeReveals();
  $$('[data-bracket]').forEach(a=>a.addEventListener('click',()=>{if(bracketData[a.dataset.bracket]){$('#bracket-tournament').value=a.dataset.bracket;renderBracket(a.dataset.bracket)}}));
}

function playerInitials(name){return String(name||'').split(' ').filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase()}
function escapeHtml(value=''){return String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]))}
function storedPlayers(){
  try{
    const players=JSON.parse(localStorage.getItem('pe_players')||'[]');
    if(!Array.isArray(players))return [];
    let changed=false;
    const normalized=players.map((p,i)=>{
      if(p.id)return {...p,owned:true};
      changed=true;
      return {...p,id:`legacy-${i}-${String(p.email||p.name||'perfil').replace(/\W+/g,'-').toLowerCase()}`,owned:true};
    });
    if(changed)localStorage.setItem('pe_players',JSON.stringify(normalized));
    return normalized;
  }catch{return []}
}
function savePlayers(players){localStorage.setItem('pe_players',JSON.stringify(players))}
function removeRequestedFedericoProfiles(){
  const migrationKey='pe_cleanup_federico_bonetto_20260729';
  if(localStorage.getItem(migrationKey))return;
  try{
    const players=JSON.parse(localStorage.getItem('pe_players')||'[]');
    if(Array.isArray(players)){
      const cleaned=players.filter(p=>String(p.name||'').trim().toLowerCase()!=='federico bonetto');
      localStorage.setItem('pe_players',JSON.stringify(cleaned));
    }
  }catch{}
  localStorage.setItem(migrationKey,'1');
}
async function hashPassword(password,salt){
  const bytes=new TextEncoder().encode(`${salt}:${password}`);
  const digest=await crypto.subtle.digest('SHA-256',bytes);
  return [...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,'0')).join('');
}
function newSalt(){return crypto.getRandomValues(new Uint32Array(4)).join('-')}
let authenticatedProfileId=null;

function allPlayers(){return [...storedPlayers().reverse(),...seedPlayers.map((p,i)=>({...p,id:`seed-${i}`,owned:false}))]}
function renderPlayers(filter=''){
  const q=filter.toLowerCase().trim();
  const players=allPlayers().filter(p=>[p.name,p.category,p.club,p.side,p.style].join(' ').toLowerCase().includes(q));
  $('#player-grid').innerHTML=players.length?players.map(p=>`<article class="player-card reveal" data-player-card="${escapeHtml(p.id)}">
    <div class="player-photo">${p.photo?`<img src="${p.photo}" alt="Foto ilustrativa del perfil de ${escapeHtml(p.name)}"/>`:`<span class="initials">${playerInitials(p.name)}</span>`}<span class="category-badge">${escapeHtml(p.category)}</span></div>
    <div class="player-info"><div class="player-name-row"><h3>${escapeHtml(p.name)}</h3>${p.owned?`<button class="player-manage" type="button" data-open-profile-login="${escapeHtml(p.email||'')}" title="Editar o eliminar mi perfil">Administrar</button>`:''}</div><span>${escapeHtml(p.side)} · ${escapeHtml(p.style||'Jugador/a competitivo/a')}</span>
      <div class="player-stats"><div><b>${Number(p.played)||0}</b><small>Partidos</small></div><div><b>${Number(p.wins)||0}</b><small>Ganados</small></div><div><b>${Number(p.points)||0}</b><small>Puntos</small></div></div>
      ${p.owned?'<small class="owned-profile-label">Perfil creado en este dispositivo</small>':''}
    </div></article>`).join(''):'<div class="empty-state">No encontramos jugadores con ese criterio.</div>';
  observeReveals();
}
function openAuthenticatedProfile(player){
  authenticatedProfileId=player.id;
  const container=$('#managed-profile-list');
  container.innerHTML=`<div class="managed-profile authenticated">
    <div class="managed-profile-avatar">${player.photo?`<img src="${player.photo}" alt=""/>`:`<span>${playerInitials(player.name)}</span>`}</div>
    <div><strong>${escapeHtml(player.name)}</strong><small>${escapeHtml(player.category)} · ${escapeHtml(player.side)}</small></div>
    <div class="profile-actions"><button class="btn btn-ghost btn-small" type="button" data-edit-player="${escapeHtml(player.id)}">Editar datos</button><button class="btn btn-danger btn-small" type="button" data-delete-player="${escapeHtml(player.id)}">Eliminar perfil</button></div>
  </div>`;
}
async function authenticateProfile(email,password){
  const player=storedPlayers().find(p=>String(p.email||'').toLowerCase()===String(email||'').toLowerCase());
  if(!player||!player.passwordHash||!player.passwordSalt)return null;
  const hash=await hashPassword(password,player.passwordSalt);
  return hash===player.passwordHash?player:null;
}
function deleteStoredPlayer(id){
  const player=storedPlayers().find(p=>p.id===id);
  if(!player||authenticatedProfileId!==id){toast('Ingresá con tu contraseña para eliminar el perfil.');return}
  if(!confirm(`¿Eliminar definitivamente el perfil de ${player.name}? Esta acción no se puede deshacer.`))return;
  savePlayers(storedPlayers().filter(p=>p.id!==id));authenticatedProfileId=null;
  renderPlayers($('#player-search')?.value||'');renderManagedProfiles();toast('Perfil eliminado definitivamente.');
}
function renderManagedProfiles(){
  authenticatedProfileId=null;
  const container=$('#managed-profile-list');if(!container)return;
  container.innerHTML='<div class="empty-state compact-empty"><strong>Acceso protegido</strong><span>Ingresá arriba con tu email y contraseña para editar o eliminar tu perfil.</span></div>';
}
function editStoredPlayer(id){
  if(authenticatedProfileId!==id)return;
  const player=storedPlayers().find(p=>p.id===id);if(!player)return;
  const form=$('#player-form');
  ['profileId','name','birthdate','city','category','side','style','club','phone','email','bio'].forEach(k=>{if(form.elements[k])form.elements[k].value=player[k]||''});
  form.elements.password.required=false;form.elements.passwordConfirm.required=false;
  form.elements.password.placeholder='Dejar vacío para conservarla';
  $('#player-title').textContent='Editá tu perfil de jugador.';$('#player-submit').textContent='Guardar cambios';
  closeModal($('#manage-profiles-modal'));openModal('player-modal');
}

let currentTournament='endurance7', currentGroup='A';
function renderGroupTabs(){
  const groups=Object.keys(groupData[currentTournament]);
  if(!groups.includes(currentGroup)) currentGroup=groups[0];
  $('#group-tabs').innerHTML=groups.map(g=>`<button class="${g===currentGroup?'active':''}" data-group="${g}">${g}</button>`).join('');
  $$('[data-group]').forEach(b=>b.addEventListener('click',()=>{currentGroup=b.dataset.group;renderGroupTabs();renderGroup()}));
}
function renderGroup(){
  const d=groupData[currentTournament][currentGroup];
  $('#standings-table').innerHTML=`<div class="standing-row header"><span>#</span><span>Pareja</span><span>PJ</span><span>PG</span><span>PP</span><span>GF</span><span>GC</span></div>`+d.table.map((r,i)=>`<div class="standing-row"><span class="rank">${i+1}</span><span class="standing-team">${r[0]}<small><span class="form-dot"><i class="w"></i><i class="${i<2?'w':'l'}"></i><i class="${i===0?'w':'l'}"></i></span></small></span>${r.slice(1).map(x=>`<span>${x}</span>`).join('')}</div>`).join('');
  $('#group-matches').innerHTML=d.matches.map(m=>{const played=m[4]==='Finalizado',s1=m[1].split(' '),s2=m[3].split(' ');return `<div class="group-match"><span class="team">${m[0]}<small>${played?'Local':'Próximo'}</small></span>${played?`<span class="score">${s1.map((x,i)=>`<b class="${Number(x)>Number(s2[i])?'winner':''}">${x}</b>`).join('')}</span>`:`<span class="scheduled">${m[4]}</span>`}<span class="team">${m[2]}<small>${played?'Visitante':'Por confirmar'}</small></span></div>`}).join('');
}

const OLAVARRIA_CENTER={lat:-36.8927,lng:-60.3225};
let googleMapInstance=null, googleMapMarkers=[], googleMapInfoWindow=null, googleMapsLoading=false;

function getMapsKey(){
  const configKey=window.PADEL_ENDURANCE_CONFIG?.googleMapsApiKey||'';
  if(String(configKey).trim()) localStorage.removeItem('pe_google_maps_key');
  return String(configKey).trim()||localStorage.getItem('pe_google_maps_key')||'';
}
function setMapStatus(message,count='—'){
  if($('#maps-status'))$('#maps-status').textContent=message;
  if($('#maps-count'))$('#maps-count').textContent=count;
}
function showMapSetup(show=true){
  const setup=$('#maps-api-setup');
  if(setup)setup.classList.toggle('hidden',!show);
}
function loadGoogleMaps(key){
  if(window.google?.maps?.importLibrary)return Promise.resolve();
  if(googleMapsLoading)return window._peGoogleMapsPromise;
  googleMapsLoading=true;
  window._peGoogleMapsPromise=new Promise((resolve,reject)=>{
    window.__peGoogleMapsReady=()=>{resolve();delete window.__peGoogleMapsReady};
    const script=document.createElement('script');
    script.id='google-maps-script';
    script.async=true;script.defer=true;
    script.src=`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&v=weekly&libraries=places,marker&callback=__peGoogleMapsReady`;
    script.onerror=()=>reject(new Error('No se pudo cargar Google Maps.'));
    document.head.appendChild(script);
  }).finally(()=>{googleMapsLoading=false});
  return window._peGoogleMapsPromise;
}
function clearGoogleMarkers(){
  googleMapMarkers.forEach(marker=>{marker.map=null});
  googleMapMarkers=[];
}
function venueCard(place,index){
  const name=escapeHtml(place.displayName||'Cancha de pádel');
  const address=escapeHtml(place.formattedAddress||'Olavarría');
  const rating=place.rating?`★ ${Number(place.rating).toFixed(1)}`:'Sin valoración';
  const mapsUrl=place.googleMapsURI||`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.displayName||'padel Olavarría')}`;
  return `<div class="google-venue-card" role="button" tabindex="0" data-google-place="${index}">
    <span class="google-venue-index">${String(index+1).padStart(2,'0')}</span>
    <span class="google-venue-copy"><strong>${name}</strong><small>${address}</small><em>${rating}</em></span>
    <a href="${mapsUrl}" target="_blank" rel="noopener" aria-label="Abrir ${name} en Google Maps" onclick="event.stopPropagation()">↗</a>
  </div>`;
}
function syncTournamentVenuesFromGoogle(places){
  const names=[...new Set((places||[]).map(p=>String(p.displayName||'').trim()).filter(Boolean))];
  if(!names.length)return;
  try{localStorage.setItem('pe_google_venue_names',JSON.stringify(names.slice(0,12)))}catch{}
  tournaments.forEach((t,index)=>{t.venue=names[index%names.length]});
  renderTournaments();
}
function hydrateCachedTournamentVenues(){
  try{
    const names=JSON.parse(localStorage.getItem('pe_google_venue_names')||'[]');
    if(Array.isArray(names)&&names.length){tournaments.forEach((t,index)=>{t.venue=names[index%names.length]})}
  }catch{}
}

async function searchPadelVenues(){
  if(!googleMapInstance||!window.google?.maps)return;
  const query=$('#maps-query')?.value.trim()||'canchas de pádel en Olavarría';
  setMapStatus('Buscando canchas registradas en Google Maps…','…');
  $('#venue-list').innerHTML='<div class="venue-loading"><span></span>Consultando Google Places…</div>';
  try{
    const {Place}=await google.maps.importLibrary('places');
    const {AdvancedMarkerElement,PinElement}=await google.maps.importLibrary('marker');
    const searchQueries=[
      query,
      'club de pádel en Olavarría',
      'complejo de pádel en Olavarría',
      'cancha de paddle en Olavarría',
      'padel Olavarría'
    ];
    const responses=await Promise.all(searchQueries.map(textQuery=>Place.searchByText({
      textQuery:`${textQuery}, Buenos Aires, Argentina`,
      fields:['id','displayName','formattedAddress','location','rating','googleMapsURI','nationalPhoneNumber','websiteURI'],
      locationBias:{center:OLAVARRIA_CENTER,radius:25000},
      language:'es',
      region:'AR',
      maxResultCount:20
    }).catch(()=>({places:[]}))));
    const unique=new Map();
    responses.flatMap(r=>r.places||[]).forEach(place=>{
      if(!place.location)return;
      const key=place.id||`${place.displayName||''}|${place.formattedAddress||''}`;
      if(!unique.has(key))unique.set(key,place);
    });
    const valid=[...unique.values()].sort((a,b)=>(Number(b.rating)||0)-(Number(a.rating)||0));
    syncTournamentVenuesFromGoogle(valid);
    clearGoogleMarkers();
    if(!valid.length){
      setMapStatus('No se encontraron resultados. Probá otra búsqueda.',0);
      $('#venue-list').innerHTML='<div class="empty-state compact-empty">No se encontraron canchas con ese criterio.</div>';
      return;
    }
    const bounds=new google.maps.LatLngBounds();
    googleMapInfoWindow=googleMapInfoWindow||new google.maps.InfoWindow();
    valid.forEach((place,index)=>{
      const pin=new PinElement({background:index===0?'#dfff00':'#d61a93',borderColor:'#080b0d',glyphColor:'#080b0d',scale:1.05});
      const marker=new AdvancedMarkerElement({map:googleMapInstance,position:place.location,title:place.displayName,content:pin.element||pin});
      marker.addListener('click',()=>{
        const mapsUrl=place.googleMapsURI||'#';
        googleMapInfoWindow.setContent(`<div class="map-info"><strong>${escapeHtml(place.displayName||'Cancha')}</strong><span>${escapeHtml(place.formattedAddress||'Olavarría')}</span><a href="${mapsUrl}" target="_blank" rel="noopener">Abrir en Google Maps</a></div>`);
        googleMapInfoWindow.open({map:googleMapInstance,anchor:marker});
        document.querySelector(`[data-google-place="${index}"]`)?.scrollIntoView({behavior:'smooth',block:'nearest'});
      });
      googleMapMarkers.push(marker);bounds.extend(place.location);
    });
    googleMapInstance.fitBounds(bounds,70);
    $('#venue-list').innerHTML=valid.map(venueCard).join('');
    $$('[data-google-place]').forEach((card,index)=>card.addEventListener('click',()=>{
      const marker=googleMapMarkers[index];
      if(marker){googleMapInstance.panTo(marker.position);googleMapInstance.setZoom(16);google.maps.event.trigger(marker,'click')}
    }));
    setMapStatus('Canchas encontradas y unificadas desde Google Places.',valid.length);
  }catch(error){
    console.error(error);
    setMapStatus('Google Maps respondió con un error. Revisá APIs, facturación y restricciones.',0);
    $('#venue-list').innerHTML=`<div class="map-error"><strong>No pudimos consultar las canchas.</strong><span>${escapeHtml(error.message||'Error de Google Maps')}</span></div>`;
  }
}
async function initGoogleMapsIntegration(force=false){
  const key=getMapsKey();
  if(!key){
    showMapSetup(true);
    setMapStatus('Agregá una API Key para cargar ubicaciones reales.','—');
    return;
  }
  try{
    setMapStatus('Cargando Google Maps…','…');
    await loadGoogleMaps(key);
    const {Map}=await google.maps.importLibrary('maps');
    googleMapInstance=new Map($('#google-map'),{
      center:OLAVARRIA_CENTER,
      zoom:13,
      mapId:'DEMO_MAP_ID',
      disableDefaultUI:true,
      zoomControl:true,
      mapTypeControl:true,
      streetViewControl:false,
      fullscreenControl:true
    });
    $('#map-placeholder')?.classList.add('hidden');
    showMapSetup(false);
    await searchPadelVenues();
  }catch(error){
    console.error(error);
    showMapSetup(true);
    setMapStatus('No se pudo iniciar Google Maps. Revisá la clave y sus permisos.',0);
  }
}

let zoom=1;
function setWins(sets=[]){
  return sets.reduce((total,value)=>total+(Number.isFinite(Number(value))?1:0),0);
}
function winningTeamIndex(match){
  if(!match?.teams?.length||match.teams.some(t=>!t.sets?.length))return -1;
  if(match.teams[0].sets.includes('🏆'))return 0;
  const maxSets=Math.max(...match.teams.map(t=>t.sets.length));
  const wins=match.teams.map((team,ti)=>{
    let won=0;
    for(let i=0;i<maxSets;i++){
      const own=Number(team.sets[i]),other=Number(match.teams[1-ti]?.sets[i]);
      if(Number.isFinite(own)&&Number.isFinite(other)&&own>other)won++;
    }
    return won;
  });
  return wins[0]===wins[1]?-1:(wins[0]>wins[1]?0:1);
}
function renderBracket(id='endurance7'){
  const d=bracketData[id];
  $('#bracket').innerHTML=d.rounds.map((round,ri)=>`<div class="bracket-round"><h3>${round}</h3>${d.matches[ri].map((match,mi)=>{
    const winner=winningTeamIndex(match);
    const setCount=Math.max(2,...match.teams.map(t=>t.sets?.length||0));
    return `<div class="match-card ${ri===d.rounds.length-1&&id==='mixto6'?'champion-card':''}">
      <div class="sets-head"><span>Pareja</span>${Array.from({length:setCount},(_,i)=>`<b>S${i+1}</b>`).join('')}</div>
      ${match.teams.map((team,ti)=>`<div class="match-line set-score-row ${ti===winner?'winner':''}"><span>${team.name}</span>${Array.from({length:setCount},(_,i)=>`<span class="set-score">${team.sets?.[i]??'—'}</span>`).join('')}</div>`).join('')}
      <div class="match-status">${match.status||`PARTIDO ${mi+1}`}</div>
    </div>`
  }).join('')}</div>`).join('');
  zoom=1;applyZoom();
}

function applyZoom(){
  const bracket=$('#bracket');
  if(bracket) bracket.style.transform='none';
}

function openModal(id){if(id==='manage-profiles-modal')renderManagedProfiles();if(id==='player-modal'&&!$('#player-form').elements.profileId.value){$('#player-title').textContent='Que la ciudad sepa cómo jugás.';$('#player-submit').textContent='Guardar mi perfil';$('#player-form').elements.password.required=true;$('#player-form').elements.passwordConfirm.required=true;}const m=$('#'+id);m.hidden=false;document.body.style.overflow='hidden';setTimeout(()=>m.querySelector('input,select,textarea')?.focus(),50)}
function closeModal(m){m.hidden=true;document.body.style.overflow=''}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('show'),3500)}

function fileToDataUrl(file){return new Promise((res,rej)=>{if(!file)return res('');const r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(file)})}

function observeReveals(){
  const io=window._revealObserver||(window._revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12}));
  $$('.reveal:not(.visible)').forEach(el=>io.observe(el));
}

function initVolleyVideo(){
  const video=document.querySelector('.site-video-background .volley-background-video');
  if(!video)return;
  video.play().catch(()=>{});
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden) video.pause();
    else video.play().catch(()=>{});
  });
}

function initCounters(){
  const metrics=$('.hero-metrics');let done=false;
  const io=new IntersectionObserver(entries=>{if(entries[0].isIntersecting&&!done){done=true;$$('[data-count]').forEach(el=>{const end=Number(el.dataset.count),start=performance.now(),dur=1200;const step=t=>{const p=Math.min(1,(t-start)/dur);el.textContent=Math.floor(end*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)})}},{threshold:.4});io.observe(metrics)
}

function init(){
  $('#year').textContent=new Date().getFullYear();
  removeRequestedFedericoProfiles();
  hydrateCachedTournamentVenues();
  renderTournaments();renderPlayers();renderGroupTabs();renderGroup();renderBracket();observeReveals();initVolleyVideo();initCounters();initGoogleMapsIntegration();
  addEventListener('scroll',()=>$('.site-header').classList.toggle('scrolled',scrollY>30),{passive:true});
  addEventListener('mousemove',e=>{document.documentElement.style.setProperty('--mouse-x',`${e.clientX}px`);document.documentElement.style.setProperty('--mouse-y',`${e.clientY}px`);$('.cursor-glow').style.transform=`translate(${e.clientX-210}px,${e.clientY-210}px)`},{passive:true});
  $('.menu-toggle').addEventListener('click',()=>{const open=$('.main-nav').classList.toggle('open');$('.menu-toggle').classList.toggle('active',open);$('.menu-toggle').setAttribute('aria-expanded',open)});
  $$('.main-nav a').forEach(a=>a.addEventListener('click',()=>{$('.main-nav').classList.remove('open');$('.menu-toggle').classList.remove('active')}));
  $$('[data-open]').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.open)));
  $$('.modal').forEach(m=>$$('[data-close]',m).forEach(b=>b.addEventListener('click',()=>closeModal(m))));
  addEventListener('keydown',e=>{if(e.key==='Escape')$$('.modal:not([hidden])').forEach(closeModal)});
  $('#player-search').addEventListener('input',e=>renderPlayers(e.target.value));
  document.addEventListener('click',e=>{
    const deleteButton=e.target.closest('[data-delete-player]');if(deleteButton)deleteStoredPlayer(deleteButton.dataset.deletePlayer);
    const editButton=e.target.closest('[data-edit-player]');if(editButton)editStoredPlayer(editButton.dataset.editPlayer);
    const loginButton=e.target.closest('[data-open-profile-login]');if(loginButton){openModal('manage-profiles-modal');const input=$('#profile-login-form').elements.email;input.value=loginButton.dataset.openProfileLogin||'';setTimeout(()=>$('#profile-login-form').elements.password.focus(),80)}
  });
  $('#profile-login-form').addEventListener('submit',async e=>{
    e.preventDefault();const fd=new FormData(e.currentTarget);const player=await authenticateProfile(fd.get('email'),fd.get('password'));
    if(!player){toast('Email o contraseña incorrectos.');return}
    openAuthenticatedProfile(player);e.currentTarget.reset();toast('Acceso correcto. Ya podés editar o eliminar tu perfil.');
  });
  $('#forgot-password-link').addEventListener('click',()=>{
    const email=$('#profile-login-form').elements.email.value;
    $('#profile-login-form').hidden=true;
    $('#password-reset-form').hidden=false;
    $('#password-reset-form').elements.email.value=email;
    setTimeout(()=>$('#password-reset-form').elements.email.focus(),50);
  });
  $('#reset-back').addEventListener('click',()=>{
    $('#password-reset-form').hidden=true;
    $('#profile-login-form').hidden=false;
    $('#password-reset-form').reset();
  });
  $('#password-reset-form').addEventListener('submit',async e=>{
    e.preventDefault();
    const fd=new FormData(e.currentTarget),email=String(fd.get('email')||'').trim().toLowerCase();
    const password=String(fd.get('password')||''),confirmPassword=String(fd.get('passwordConfirm')||'');
    if(password.length<6){toast('La contraseña debe tener al menos 6 caracteres.');return}
    if(password!==confirmPassword){toast('Las contraseñas no coinciden.');return}
    const players=storedPlayers(),idx=players.findIndex(p=>String(p.email||'').trim().toLowerCase()===email);
    if(idx<0){toast('No encontramos un perfil con ese email en este dispositivo.');return}
    const passwordSalt=newSalt(),passwordHash=await hashPassword(password,passwordSalt);
    players[idx]={...players[idx],passwordSalt,passwordHash};
    savePlayers(players);
    e.currentTarget.reset();$('#password-reset-form').hidden=true;$('#profile-login-form').hidden=false;
    $('#profile-login-form').elements.email.value=email;
    toast('Contraseña restablecida. Ya podés ingresar con la nueva clave.');
  });
  $('#save-maps-key')?.addEventListener('click',()=>{
    const key=$('#google-maps-key').value.trim();
    if(!key){toast('Ingresá una clave válida de Google Maps.');return}
    localStorage.setItem('pe_google_maps_key',key);
    initGoogleMapsIntegration(true);
  });
  $('#maps-refresh')?.addEventListener('click',()=>googleMapInstance?searchPadelVenues():initGoogleMapsIntegration(true));
  $('#maps-query')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();googleMapInstance?searchPadelVenues():initGoogleMapsIntegration(true)}});
  $('#group-tournament').addEventListener('change',e=>{currentTournament=e.target.value;currentGroup='A';renderGroupTabs();renderGroup()});
  $('#bracket-tournament').addEventListener('change',e=>renderBracket(e.target.value));
  $('#player-form').addEventListener('submit',async e=>{
    e.preventDefault();const form=e.currentTarget,fd=new FormData(form);
    if(fd.get('password')!==fd.get('passwordConfirm')){toast('Las contraseñas no coinciden.');return}
    const photo=await fileToDataUrl(fd.get('photo'));const saved=storedPlayers();const editId=fd.get('profileId');
    if(editId){
      const idx=saved.findIndex(p=>p.id===editId);if(idx<0||authenticatedProfileId!==editId){toast('Volvé a ingresar con tu contraseña.');return}
      const current=saved[idx];let passwordSalt=current.passwordSalt,passwordHash=current.passwordHash;
      if(fd.get('password')){passwordSalt=newSalt();passwordHash=await hashPassword(fd.get('password'),passwordSalt)}
      saved[idx]={...current,name:fd.get('name'),birthdate:fd.get('birthdate'),city:fd.get('city'),category:fd.get('category'),side:fd.get('side'),style:fd.get('style'),club:fd.get('club'),phone:fd.get('phone'),email:fd.get('email'),bio:fd.get('bio'),photo:photo||current.photo,passwordSalt,passwordHash};
      savePlayers(saved);toast('Perfil actualizado correctamente.');
    }else{
      if(String(fd.get('password')).length<6){toast('La contraseña debe tener al menos 6 caracteres.');return}
      if(saved.some(p=>String(p.email).toLowerCase()===String(fd.get('email')).toLowerCase())){toast('Ya existe un perfil con ese email.');return}
      const passwordSalt=newSalt(),passwordHash=await hashPassword(fd.get('password'),passwordSalt);
      saved.push({id:crypto.randomUUID?.()||`player-${Date.now()}`,owned:true,name:fd.get('name'),birthdate:fd.get('birthdate'),city:fd.get('city'),category:fd.get('category'),side:fd.get('side'),style:fd.get('style'),club:fd.get('club'),phone:fd.get('phone'),email:fd.get('email'),bio:fd.get('bio'),photo,played:0,wins:0,points:0,passwordSalt,passwordHash});
      savePlayers(saved);toast('Perfil creado. Ya formás parte de Padel Endurance.');
    }
    renderPlayers();authenticatedProfileId=null;form.reset();form.elements.profileId.value='';form.elements.password.required=true;form.elements.passwordConfirm.required=true;closeModal($('#player-modal'));document.querySelector('#jugadores').scrollIntoView({behavior:'smooth'});
  });
  $('#register-form').addEventListener('submit',e=>{e.preventDefault();const registrations=JSON.parse(localStorage.getItem('pe_registrations')||'[]');registrations.push(Object.fromEntries(new FormData(e.currentTarget)));localStorage.setItem('pe_registrations',JSON.stringify(registrations));e.currentTarget.reset();closeModal($('#register-modal'));toast('Preinscripción recibida. Te contactaremos por WhatsApp.');});
}
document.addEventListener('DOMContentLoaded',init);
