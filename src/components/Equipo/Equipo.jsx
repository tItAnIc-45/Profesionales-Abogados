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
<img alt="José Carlos Angulo Portocarrero" class="team-img" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=600"/>
</div>
<div class="team-info">
<span class="team-role" data-en="Founding Partner / Litigation" data-es="Socio Fundador / Litigios">Socio Fundador</span>
<h3 class="team-name">José Carlos Angulo Portocarrero</h3>
<div class="team-email-badge">
<i class="fa-solid fa-envelope gold-text"></i> jose.carlos@angulo.com.pe
                        </div>
<div class="team-contact">
<a href="#" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
<button class="btn-detalles-abogado" onclick="openModal('modal-jose-carlos')" title="Ver Perfil Detallado"><i class="fa-solid fa-file-lines"></i></button>
<a href="mailto:jose.carlos@angulo.com.pe" title="Correo"><i class="fa-solid fa-envelope"></i></a>
</div>
</div>
</div>
<!-- Abogado 2 -->
<div class="team-card">
<div class="team-img-container">
<img alt="Jorge Luis Ascona Baldeón" class="team-img" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=600"/>
</div>
<div class="team-info">
<span class="team-role" data-en="Partner" data-es="Socio">Socio</span>
<h3 class="team-name">Jorge Luis Ascona Baldeón</h3>
<div class="team-email-badge">
<i class="fa-solid fa-envelope gold-text"></i> jorge.ascona@angulo.com.pe
                        </div>
<div class="team-contact">
<a href="#" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
<button class="btn-detalles-abogado" onclick="openModal('modal-jorge-ascona')" title="Ver Perfil Detallado"><i class="fa-solid fa-file-lines"></i></button>
<a href="mailto:jorge.ascona@angulo.com.pe" title="Correo"><i class="fa-solid fa-envelope"></i></a>
</div>
</div>
</div>
<!-- Abogado 3 -->
<div class="team-card">
<div class="team-img-container">
<img alt="Isabel Espejo Castillo" class="team-img" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=600"/>
</div>
<div class="team-info">
<span class="team-role" data-en="Senior Associate" data-es="Asociada Principal">Asociada Principal</span>
<h3 class="team-name">Isabel Espejo Castillo</h3>
<div class="team-email-badge">
<i class="fa-solid fa-envelope gold-text"></i> isabel.espejo@angulo.com.pe
                        </div>
<div class="team-contact">
<a href="#" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
<button class="btn-detalles-abogado" onclick="openModal('modal-isabel-espejo')" title="Ver Perfil Detallado"><i class="fa-solid fa-file-lines"></i></button>
<a href="mailto:isabel.espejo@angulo.com.pe" title="Correo"><i class="fa-solid fa-envelope"></i></a>
</div>
</div>
</div>
</div>
</div>
</section>`;

export default function Equipo() {
  return <div dangerouslySetInnerHTML={{ __html: equipoMarkup }} />;
}
