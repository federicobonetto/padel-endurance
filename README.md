# Padel Endurance — prototipo web premium v3

Sitio responsive para torneos de pádel en Olavarría, con perfiles, grupos, canchas, llaves e inscripción de parejas.

## Cambios de esta versión

- Integración preparada con **Google Maps JavaScript API + Places API (New)**.
- Búsqueda dinámica de canchas de pádel registradas en Google Maps dentro de Olavarría.
- Marcadores, ajuste automático del mapa, valoración, dirección y enlace directo a cada lugar.
- Nuevo logotipo vectorial transparente, más fino y con la palabra **PÁDEL** claramente legible.
- Ocho fotografías reales y diferentes para los perfiles de ejemplo, obtenidas de Pexels.
- Botón para eliminar perfiles creados desde el mismo dispositivo.
- Modal **Gestionar mis perfiles** para revisar y eliminar perfiles locales.

## Activar Google Maps

La web no incluye una clave privada. Para conectarla:

1. Creá o elegí un proyecto en Google Cloud.
2. Activá **Maps JavaScript API** y **Places API (New)**.
3. Configurá facturación en el proyecto.
4. Creá una API Key y restringila por **HTTP referrers** al dominio donde se publicará la página.
5. Pegá la clave en una de estas dos opciones:
   - Dentro de la web, en el panel de la sección **Canchas**. Se guardará en `localStorage` del navegador.
   - En `config.js`, dentro de `googleMapsApiKey: ''`, para que el mapa cargue automáticamente.

Documentación oficial:

- https://developers.google.com/maps/documentation/javascript/overview
- https://developers.google.com/maps/documentation/javascript/place-search
- https://developers.google.com/maps/documentation/javascript/advanced-markers/overview

La búsqueda utiliza Google Places con el texto **“canchas de pádel en Olavarría, Buenos Aires, Argentina”** y una preferencia geográfica de 20 km alrededor de la ciudad. Los resultados dependen de los lugares actualmente registrados y devueltos por Google.

## Perfiles y eliminación

Este prototipo guarda los perfiles creados por el visitante en `localStorage`:

- Los perfiles propios muestran un botón **×** para eliminarlos.
- También se pueden borrar desde **Gestionar mis perfiles**.
- Los perfiles de demostración no pueden eliminarse porque forman parte de los datos iniciales del sitio.

Para una plataforma real, la eliminación debe conectarse a autenticación y base de datos, de modo que cada persona solo pueda borrar su propio perfil.

## Abrir localmente

```bash
python -m http.server 8080
```

Después abrí `http://localhost:8080`.

## Publicar con GitHub + Cloudflare Pages

1. Creá un repositorio nuevo en GitHub.
2. Subí todos los archivos respetando la carpeta `assets`.
3. En Cloudflare Pages elegí **Connect to Git**.
4. Framework preset: **None**.
5. Build command: vacío.
6. Output directory: `/`.
7. Publicá y agregá el dominio permitido a las restricciones de la API Key.

## Archivos principales

- `index.html`: estructura y formularios.
- `styles.css`: diseño premium y responsive.
- `script.js`: torneos, perfiles, eliminación, Google Maps, grupos y llaves.
- `config.js`: configuración pública de Google Maps.
- `assets/padel-endurance-logo-clean.svg`: logo vectorial transparente.
- `PEXELS-CREDITS.md`: fuentes de las fotografías.
- `supabase-schema.sql`: base inicial para convertir el prototipo en plataforma real.


## Cambios de la versión 4
- Se utiliza como definitivo el logo aprobado por el cliente, sin rediseñar su identidad.
- La imagen del jugador en transición se usa una sola vez, exclusivamente en la capa de animación vinculada al scroll.
- Cada perfil se crea con email y contraseña. El acceso permite editar los datos o eliminar el perfil.
- En esta versión estática, los perfiles y hashes de contraseña se guardan localmente en el navegador. Para producción se recomienda migrar autenticación y datos a Supabase Auth y PostgreSQL.


## Google Maps (v5)
La clave de Google Maps suministrada fue incorporada en `config.js` y el mapa carga automáticamente. La búsqueda combina varias consultas de Google Places, elimina duplicados y centra los resultados dentro de un radio de 25 km de Olavarría. Para producción, restringí la clave por dominio y habilitá Maps JavaScript API y Places API (New).


## Versión 14 — transición en video
La imagen animada anterior fue eliminada. La transición usa un video real de pádel alojado en Pexels como fondo traslúcido, sin desplazamiento ni transformación ligada al scroll. Requiere conexión a Internet para cargar el video.
