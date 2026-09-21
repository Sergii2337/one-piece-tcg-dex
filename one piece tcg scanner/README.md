# 🏴‍☠️ One Piece TCG Pocket Dex & Mobile Scanner

Una aplicación web moderna y ligera diseñada para gestionar tu colección de cartas de **One Piece TCG** desde el teléfono móvil, sincronizada con fotos oficiales de **Limitless TCG** y exportación/importación compatible con **Google Sheets** y **Excel**.

---

## ✨ Características Principales

1. **📸 Escáner Multi-Capa con IA Óptica**:
   * Utiliza la API nativa de aceleración por hardware (`TextDetector`) y Tesseract OCR.
   * Detección por **Nombre Titular** (`ROCKS.D.XEBEC`, `GOL.D.ROGER`, `SHANKS`, etc.) y por **Código OP** (`OP17-039`, `OP09-082`).
   * Bandeja de cartas sugeridas directas (1 toque para añadir con foto y datos oficiales).

2. **📖 Álbum Digital Completo**:
   * Filtros por color (*Azul, Rojo, Verde, Negro, etc.*) y rasgos (*Rocks Pirates, Straw Hat, Navy, Four Emperors*).
   * Contador de copias acumulativas con botones rápidos `+` y `−`.

3. **📊 Integración con Google Sheets & Excel**:
   * **Exportar**: Copia con 1 toque en formato tabla o descarga `.csv`.
   * **Importar**: Sube archivos `.csv`, `.tsv` o pega directamente texto de filas copiadas desde Google Sheets.

4. **🌐 Imágenes Oficiales en HD**:
   * Conexión directa a la CDN de [Limitless TCG](https://onepiece.limitlesstcg.com/cards/) y Bandai.

---

## 🚀 Cómo Probar la Aplicación en el Móvil

1. Abre la carpeta del proyecto y ejecuta un servidor local (por ejemplo con Python o VSCode Live Server):
   ```bash
   python -m http.server 8080
   ```
2. Accede desde el navegador de tu móvil conectándote a la IP de tu ordenador (o súbelo a GitHub Pages / Vercel / Netlify de forma gratuita).
3. ¡Saca fotos a tus cartas o importa tu lista de Excel!
