# One Piece TCG Pocket Dex

Aplicación web progresiva (PWA) para la gestión, catalogación e inventario de cartas de One Piece Card Game. Diseñada para ofrecer una experiencia rápida, ligera y optimizada tanto en dispositivos móviles como en navegadores de escritorio.

---

## Características

### Catálogo y Base de Datos
* Base de datos completa con más de 2.400 registros de cartas oficiales.
* Cobertura de colecciones principales (OP-01 hasta OP-17).
* Catálogo de barajas de inicio completas (ST-01 hasta ST-36) con metadatos de arquetipos y colores oficiales.
* Expansiones adicionales (EB-01, PRB-01) y cartas promocionales (P).
* Enlaces a ilustraciones oficiales en alta resolución y generación de tarjetas vectoriales de contingencia en caso de ausencia de conexión.

### Motor de Búsqueda y Exploración
* Búsqueda multi-criterio en tiempo real por:
  * Identificador oficial de carta (ejemplo: OP17-039, ST01-001).
  * Nombre de personaje o titular (ejemplo: Monkey D. Luffy, Rocks D. Xebec).
  * Rasgos y arquetipos (ejemplo: Straw Hat Crew, Rocks Pirates, Navy, Four Emperors).
  * Color de la carta (Mono-color y combinaciones bicolor).
* Selector desplegable directo de barajas de inicio con función para añadir todas las cartas de una baraja al álbum con un solo clic.
* Paginación dinámica con distribución configurable de cartas por página para garantizar fluidez en cualquier dispositivo.

### Interfaz y Visualización
* Modos de visualización intercambiables:
  * Modo Cuadrícula (visualización tipo carta coleccionable).
  * Modo Lista (formato fila con miniatura, atributos detallados y controladores).
* Control de zoom y ajuste de tamaño de elementos (pequeño, normal y grande).
* Visor de alta resolución (Lightbox) para inspección detallada de ilustraciones y atributos de la carta seleccionada.

### Gestión de Inventario y Persistencia
* Contador de copias por carta con incrementadores y decrementadores rápidos.
* Persistencia automática en el almacenamiento local del navegador (LocalStorage), sin requerir servidores externos ni registro de usuarios.
* Filtros de clasificación rápida por color y principales arquetipos.

### Importación y Exportación de Datos
* Exportación directa de la colección completa al portapapeles con formato tabular compatible con Google Sheets.
* Descarga de inventario en archivo de valores separados por comas (CSV) para Microsoft Excel.
* Importación masiva de datos mediante archivo CSV o pegado directo de filas copiadas de hojas de cálculo.
* Copias de seguridad completas en formato estructurado JSON (exportación e importación).

---

## Estructura del Repositorio

```text
one-piece-tcg-dex/
├── index.html          # Estructura principal de la aplicación
├── style.css           # Estilos visuales y diseño responsive
├── app.js              # Controlador principal, gestión de estado y eventos
├── cards-data.js       # Catálogo y funciones de búsqueda de cartas
├── manifest.json       # Configuración para instalación como PWA
├── README.md           # Documentación técnica del proyecto
├── LICENSE             # Términos de licencia MIT y aviso legal
├── .gitignore          # Reglas de exclusión para control de versiones
└── tools/              # Scripts auxiliares para extracción y compilación de datos
```

---

## Instalación y Ejecución Local

La aplicación está construida sobre tecnologías web estándar (HTML5, CSS3, JavaScript Vanilla) y no requiere pasos de compilación ni dependencias externas para ejecutarse.

### Ejecución con un servidor HTTP local

Utilizando Python 3:
```bash
python -m http.server 8080
```

Utilizando Node.js (`http-server` o `npx serve`):
```bash
npx serve .
```

Una vez iniciado el servidor, abra su navegador en `http://localhost:8080`.

---

## Despliegue en Producción

El proyecto es totalmente estático y puede desplegarse en cualquier servicio de alojamiento estático:
* **GitHub Pages**: En la configuración del repositorio (*Settings > Pages*), seleccionar la rama `main` y la carpeta raíz (`/`).
* **Vercel / Netlify / Cloudflare Pages**: Vincular el repositorio sin comando de build adicional.

---

## Licencia y Descargo de Responsabilidad

Este proyecto se distribuye bajo los términos de la Licencia MIT. Para más detalles, consulte el archivo `LICENSE`.

**Aviso de Propiedad Intelectual**: Este es un proyecto no oficial desarrollado por la comunidad con fines informativos y de gestión personal. Todos los nombres, ilustraciones y marcas asociadas a *ONE PIECE* y *ONE PIECE CARD GAME* son propiedad intelectual de Eiichiro Oda, Shueisha, Toei Animation y Bandai Co., Ltd.
