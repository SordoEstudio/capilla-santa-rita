# Capilla Santa Rita de Casia — Sitio Web

Sitio institucional de la **Capilla Santa Rita de Casia**, San Vicente, Santa Fe, Argentina.

HTML5 + CSS3 + JavaScript vanilla. Sin build ni dependencias de npm.

## Vista local

```bash
# Python
python -m http.server 8000

# Node (si tenés npx)
npx serve .
```

Abrir [http://localhost:8000](http://localhost:8000)

## Estructura

```
capilla-santa-rita/
├── index.html          # Página única (secciones con anclas)
├── styles.css
├── scripts.js
├── public/             # Imágenes del sitio
│   ├── hero.png
│   ├── sr1.jpg
│   └── capilla1.png
├── images/             # Documentación de assets futuros
├── vercel.json         # Configuración de despliegue en Vercel
└── README.md
```

## Publicar en GitHub

1. Crear un repositorio vacío en GitHub (por ejemplo `capilla-santa-rita`).
2. En esta carpeta:

```bash
git init
git add .
git commit -m "Sitio web Capilla Santa Rita de Casia"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/capilla-santa-rita.git
git push -u origin main
```

## Publicar en Vercel

### Opción A — Desde GitHub (recomendado)

1. Entrá a [vercel.com](https://vercel.com) e iniciá sesión con GitHub.
2. **Add New Project** → importá el repositorio `capilla-santa-rita`.
3. Vercel detecta sitio estático; dejá:
   - **Framework Preset:** Other
   - **Build Command:** vacío
   - **Output Directory:** `.` (raíz del proyecto)
4. **Deploy**. Cada `git push` a `main` vuelve a desplegar automáticamente.

### Opción B — Desde la terminal

```bash
npm i -g vercel
vercel login
vercel
```

Seguí el asistente (enlazar con GitHub o desplegar directo). Para producción:

```bash
vercel --prod
```

No hace falta variables de entorno: el sitio es 100 % estático.

## Actualizar contenido

### Cronograma de la celebración

Editar las `<article class="day-card">` en la sección `#celebracion` de `index.html`.

### Imágenes

| Archivo | Uso |
|---------|-----|
| `public/hero.png` | Banner del inicio |
| `public/sr1.jpg` | Sección Santa Rita |
| `public/capilla1.png` | Sección La Capilla |

### Contacto

WhatsApp: buscar y reemplazar `5493492669762` en `index.html` si cambia el número.

## Paleta (CSS)

- `--bg` `#faf8f4` — crema
- `--accent` `#b83228` — rojo rosa
- `--gold` `#c8a951` — dorado
- `--dark` `#1a1a1a` — navbar

## Tipografía

- **Cormorant Garamond** — títulos
- **Inter** — cuerpo

---

*Capilla Santa Rita de Casia · Parroquia San Vicente de Paúl · Diócesis de Santa Fe*
