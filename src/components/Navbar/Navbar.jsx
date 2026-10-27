import './Navbar.css';

const navbarMarkup = `<header>
<div class="container nav-wrapper">
<a class="logo" href="#">
<i class="fa-solid fa-scale-balanced"></i>
<span>TUPLUS <span class="gold-text">ABOGADOS</span></span>
</a>
<ul class="nav-links">
<li><a class="active" data-lang="nav_home" href="#inicio">Inicio</a></li>
<li><a data-lang="nav_firm" href="#la-firma">La Firma</a></li>
<li><a data-lang="nav_practices" href="#practicas">Áreas de Práctica</a></li>
<li><a data-lang="nav_team" href="#equipo">Equipo</a></li>
<li><a data-lang="nav_calculator" href="#cotizador">Cotizador</a></li>
<li><a data-lang="nav_contact" href="#contacto">Contacto</a></li>
</ul>
<div class="nav-actions">
<!-- Selector de Idioma -->
<button class="btn-lang" id="langToggle" onclick="toggleLanguage()" title="Cambiar Idioma / Change Language">
<i class="fa-solid fa-globe"></i> <span id="langText">EN</span>
</button>
<!-- Modo Oscuro / Claro -->
<button class="btn-theme" id="themeToggle" onclick="toggleTheme()" title="Cambiar Tema">
<i class="fa-solid fa-moon" id="themeIcon"></i>
</button>
<a class="btn-gold" data-lang="btn_consult" href="#contacto">Consulta Legal</a>
</div>
</div>
</header>`;

export default function Navbar() {
  return <div dangerouslySetInnerHTML={{ __html: navbarMarkup }} />;
}
