import './Equipo.css';

const equipoMarkup = `<section class="section-secondary" id="equipo">
<div class="container">
<div class="section-header">
<span class="section-tag" data-lang="tag_professionals">Nuestros Profesionales</span>
<h2 class="section-title" data-lang="team_title">Socios y Abogados Senior</h2>
<p class="section-desc" data-lang="team_desc">Un equipo multidisciplinario reconocido por su rigor académico y experiencia procesal.</p>
</div>
<div class="team-grid">
<!-- Abogado 1 -->
<div class="team-card">
<div class="team-img-container">
<img alt="José Dante Díaz Cruz" class="team-img" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=600"/>
</div>
<div class="team-info">
<span class="team-role" data-en="Founding Partner / Litigation" data-es="Socio Fundador / Litigios">Socio Fundador</span>
<h3 class="team-name">José Dante Díaz Cruz</h3>
<div class="team-email-badge">
<i class="fa-solid fa-envelope gold-text"></i> jose.dante@tuplusabogados.com.pe
                        </div>
<div class="team-contact">
<a href="#" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
<button class="btn-detalles-abogado" onclick="openModal('modal-jose-dante')" title="Ver Perfil Detallado"><i class="fa-solid fa-file-lines"></i></button>
<a href="mailto:jose.dante@tuplusabogados.com.pe" title="Correo"><i class="fa-solid fa-envelope"></i></a>
</div>
</div>
</div>
<!-- Abogado 2 -->
<div class="team-card">
<div class="team-img-container">
<img alt="Frank Luis quispe rojas" class="team-img" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=600"/>
</div>
<div class="team-info">
<span class="team-role" data-en="Partner" data-es="Socio">Socio</span>
<h3 class="team-name">Frank Luis quispe rojas</h3>
<div class="team-email-badge">
<i class="fa-solid fa-envelope gold-text"></i> frank.luis@tuplusabogados.com.pe
                        </div>
<div class="team-contact">
<a href="#" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
<button class="btn-detalles-abogado" onclick="openModal('modal-frank-luis')" title="Ver Perfil Detallado"><i class="fa-solid fa-file-lines"></i></button>
<a href="mailto:frank.luis@tuplusabogados.com.pe" title="Correo"><i class="fa-solid fa-envelope"></i></a>
</div>
</div>
</div>
<!-- Abogado 3 -->
<div class="team-card">
<div class="team-img-container">
<img alt="Dayana Mercedez Urriaga" class="team-img" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=600"/>
</div>
<div class="team-info">
<span class="team-role" data-en="Senior Associate" data-es="Asociada Principal">Asociada Principal</span>
<h3 class="team-name">Dayana Mercedez Urriaga</h3>
<div class="team-email-badge">
<i class="fa-solid fa-envelope gold-text"></i> dayana.mercedez@tuplusabogados.com.pe
                        </div>
<div class="team-contact">
<a href="#" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
<button class="btn-detalles-abogado" onclick="openModal('modal-dayana-mercedez')" title="Ver Perfil Detallado"><i class="fa-solid fa-file-lines"></i></button>
<a href="mailto:dayana.mercedez@tuplusabogados.com.pe" title="Correo"><i class="fa-solid fa-envelope"></i></a>
</div>
</div>
</div>
</div>
</div>
</section>`;

export default function Equipo() {
  return <div dangerouslySetInnerHTML={{ __html: equipoMarkup }} />;
}
