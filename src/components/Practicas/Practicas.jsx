import './Practicas.css';

const practicasMarkup = `<section id="practicas">
<div class="container">
<div class="section-header">
<span class="section-tag" data-lang="tag_specialties">Especialidades</span>
<h2 class="section-title" data-lang="prac_title">Áreas de Práctica</h2>
<p class="section-desc" data-lang="prac_desc">Cobertura legal integral con equipos altamente especializados por materia.</p>
</div>
<div class="services-grid">
<div class="service-card">
<i class="fa-solid fa-briefcase service-icon"></i>
<h3 class="service-title" data-lang="srv1_title">Derecho Corporativo</h3>
<p class="service-desc" data-lang="srv1_desc">Fusiones, adquisiciones, reestructuración patrimonial, contratos comerciales y gobierno corporativo.</p>
<a class="service-link" href="#contacto"><span data-lang="learn_more">Saber más</span> <i class="fa-solid fa-chevron-right"></i></a>
</div>
<div class="service-card">
<i class="fa-solid fa-gavel service-icon"></i>
<h3 class="service-title" data-lang="srv2_title">Litigios y Arbitraje</h3>
<p class="service-desc" data-lang="srv2_desc">Defensa estratégica en procesos judiciales civiles, comerciales y arbitrajes institucionales.</p>
<a class="service-link" href="#contacto"><span data-lang="learn_more">Saber más</span> <i class="fa-solid fa-chevron-right"></i></a>
</div>
<div class="service-card">
<i class="fa-solid fa-shield-halved service-icon"></i>
<h3 class="service-title" data-lang="srv3_title">Derecho Penal Económico</h3>
<p class="service-desc" data-lang="srv3_desc">Asesoría preventiva y patrocinio en delitos corporativos, compliance y procesos penales complejos.</p>
<a class="service-link" href="#contacto"><span data-lang="learn_more">Saber más</span> <i class="fa-solid fa-chevron-right"></i></a>
</div>
<div class="service-card">
<i class="fa-solid fa-house-chimney service-icon"></i>
<h3 class="service-title" data-lang="srv4_title">Derecho Inmobiliario</h3>
<p class="service-desc" data-lang="srv4_desc">Auditoría de predios, saneamiento de propiedades, licencias urbanísticas y desarrollo de proyectos.</p>
<a class="service-link" href="#contacto"><span data-lang="learn_more">Saber más</span> <i class="fa-solid fa-chevron-right"></i></a>
</div>
<div class="service-card">
<i class="fa-solid fa-users service-icon"></i>
<h3 class="service-title" data-lang="srv5_title">Derecho Laboral</h3>
<p class="service-desc" data-lang="srv5_desc">Planeamiento contractual laboral, negociación colectiva, auditorías y procesos judiciales laborales.</p>
<a class="service-link" href="#contacto"><span data-lang="learn_more">Saber más</span> <i class="fa-solid fa-chevron-right"></i></a>
</div>
<div class="service-card">
<i class="fa-solid fa-file-invoice-dollar service-icon"></i>
<h3 class="service-title" data-lang="srv6_title">Derecho Tributario</h3>
<p class="service-desc" data-lang="srv6_desc">Planificación fiscal estratégica, atención a fiscalizaciones y defensa ante la administración tributaria.</p>
<a class="service-link" href="#contacto"><span data-lang="learn_more">Saber más</span> <i class="fa-solid fa-chevron-right"></i></a>
</div>
</div>
</div>
</section>`;

export default function Practicas() {
  return <div dangerouslySetInnerHTML={{ __html: practicasMarkup }} />;
}
