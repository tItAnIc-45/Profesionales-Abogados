import './ReadmeModal.css';

const readmeModalMarkup = `<div class="modal" id="readmeModal">
<div class="modal-content">
<button class="modal-close" onclick="closeModal('readmeModal')">×</button>
<h2 class="brand-font gold-text mb-1">Documentación Técnica (README.md)</h2>
<p class="text-muted mb-2">Guía de características para <strong>TuPlus Abogados</strong> (Nivel 1 &amp; 2).</p>
<h3 class="modal-section-title">Características Incluidas:</h3>
<ul class="modal-list">
<li><strong>Botón Flotante de WhatsApp:</strong> Con enlace directo a atención inmediata.</li>
<li><strong>Modo Oscuro y Claro:</strong> Alternancia instantánea con persistencia.</li>
<li><strong>Soporte Multiidioma (Español / Inglés):</strong> Traducción dinámica de textos clave.</li>
<li><strong>Mapa de Ubicación:</strong> Incorporado en la sección de contacto.</li>
<li><strong>Perfiles Dinámicos:</strong> Imágenes con bordes dorados y animación sutil al pasar el cursor, incluyendo correo falso institucional.</li>
<li><strong>Formulario Formspree:</strong> Conectado a \`https://formspree.io/f/mnppjqll\`.</li>
</ul>
<div class="text-right mt-3">
<button class="btn-gold" onclick="closeModal('readmeModal')">Entendido</button>
</div>
</div>
</div>`;

export default function ReadmeModal() {
  return <div dangerouslySetInnerHTML={{ __html: readmeModalMarkup }} />;
}
