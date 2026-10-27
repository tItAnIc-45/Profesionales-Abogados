# TuPlus Abogados — React + Vite

Migración a React con Vite conservando el HTML, CSS, contenido y comportamiento de la página original.

## Requisitos
- Node.js 18 o superior
- npm

## Ejecutar en local
```bash
npm install
npm run dev
```

## Compilar para producción
```bash
npm run build
npm run preview
```

## Estructura
```text
tuplus-abogados/
├── public/
│   └── assets/
│       └── colibri.png
├── src/
│   ├── components/
│   │   └── LegacyPage.jsx
│   ├── legacy/
│   │   ├── pageMarkup.js
│   │   ├── main.js
│   │   └── calculator.js
│   ├── styles.css
│   ├── la-firma.css
│   ├── nosotros.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Notas
- Los estilos originales se mantienen separados por responsabilidad.
- Las funciones originales de tema, idioma, modales, scroll y cotizador se conservan.
- El marcado de la página se mantiene en `src/legacy/pageMarkup.js` para evitar cambios visuales durante la migración y conservar sus IDs y atributos. `LegacyPage.jsx` lo monta dentro de React; se puede extraer por secciones a componentes JSX en una siguiente etapa sin alterar el diseño.
- La URL de Formspree y los enlaces externos originales se mantienen como estaban. Revisa esos valores antes de publicar.
