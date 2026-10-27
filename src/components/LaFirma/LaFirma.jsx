import './LaFirma.css';

const laFirmaMarkup = `<section class="section-secondary" id="la-firma">
<div class="container">
<div class="section-header">
<span class="section-tag" data-lang="tag_institutional">Institucional</span>
<h2 class="section-title" data-lang="firm_title">La Firma &amp; Nuestra Identidad</h2>
<p class="section-desc" data-lang="firm_desc">Trayectoria sólida basada en la confianza, integridad e innovación metodológica.</p>
</div>
<div class="firma-grid">
<div class="firma-text">
<h3 class="gold-text headline-3" data-lang="firm_h3">Más de 20 Años Garantizando Seguridad Jurídica</h3>
<p data-lang="firm_p1">En TuPlus Abogados combinamos la tradición del ejercicio del derecho con un enfoque contemporáneo y ágil. Inspirados en estándares internacionales de alta exigencia, representamos a empresas nacionales e internacionales, así como a personas naturales en litigios complejos.</p>
<p data-lang="firm_p2">El colibrí de nuestro emblema simboliza agilidad, precisión y la capacidad de responder con destreza ante escenarios cambiantes y desafiantes del marco normativo.</p>
<div class="firma-values">
<div class="value-card">
<h4 data-lang="val1_title">Rigor Analítico</h4>
<p data-lang="val1_desc">Examen profundo e individualizado de cada expediente.</p>
</div>
<div class="value-card">
<h4 data-lang="val2_title">Confidencialidad</h4>
<p data-lang="val2_desc">Protocolos estrictos de reserva y ética profesional.</p>
</div>
<div class="value-card">
<h4 data-lang="val3_title">Estrategia Directa</h4>
<p data-lang="val3_desc">Optimización de plazos e instancias de resolución.</p>
</div>
<div class="value-card">
<h4 data-lang="val4_title">Compromiso Total</h4>
<p data-lang="val4_desc">Acompañamiento cercano durante todo el proceso.</p>
</div>
</div>
</div>
<div class="firma-visual-side">
<div class="colibri-wrapper">
<img alt="Emblema Colibrí TuPlus Abogados" class="colibri-logo" src="/assets/colibri.png"/>
</div>
<div class="firma-stats">
<div class="stat-item">
<span class="stat-number">+2,500</span>
<span class="stat-label" data-lang="stat1">Casos Ganados</span>
</div>
<div class="stat-item">
<span class="stat-number">98%</span>
<span class="stat-label" data-lang="stat2">Tasa de Éxito</span>
</div>
<div class="stat-item">
<span class="stat-number">45+</span>
<span class="stat-label" data-lang="stat3">Abogados Senior</span>
</div>
<div class="stat-item">
<span class="stat-number">15</span>
<span class="stat-label" data-lang="stat4">Premios Jurídicos</span>
</div>
</div>
</div>
</div>
</div>
</section>`;

export default function LaFirma() {
  return <div dangerouslySetInnerHTML={{ __html: laFirmaMarkup }} />;
}
