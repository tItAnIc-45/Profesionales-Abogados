import './Perfil.css';

const perfilMarkup = `<div class="modal" id="modal-jose-dante">
<div class="modal-content profile-modal-content">
<button class="modal-close" onclick="closeModal('modal-jose-dante')">×</button>
<h2 class="profile-modal-name">JOSÉ DANTE DÍAZ CRUZ</h2>
<p class="profile-modal-role" data-en="FOUNDING PARTNER / LITIGATION" data-es="SOCIO FUNDADOR / LITIGIOS">SOCIO FUNDADOR / LITIGIOS</p>
<hr class="profile-divider"/>
<p class="profile-email"><i class="fa-solid fa-envelope"></i> jose.dante@tuplusabogados.com.pe</p>
<div class="profile-modal-body">
<h3 data-en="Academic Background:" data-es="Formación académica:">Formación académica:</h3>
<p data-en="Lawyer specialized in Economic Criminal Law and Criminal Procedural Law from the Universidad Particular de San Martín de Porres (2000). Completed studies in the Master's in Criminal Law at the Pontificia Universidad Católica del Perú (2004) and Postgraduate studies in Criminal Law at the University of Salamanca, Spain (2003)." data-es="Abogado especialista en Derecho Penal Económico y Derecho Procesal Penal por la Universidad Particular de San Martín de Porres (2000). Estudios culminados en la Maestría de Derecho Penal de la Pontificia Universidad Católica del Perú (2004) y de Posgrado en Derecho Penal en la Universidad de Salamanca, España (2003).">Abogado especialista en Derecho Penal Económico y Derecho Procesal Penal por la Universidad Particular de San Martín de Porres (2000). Estudios culminados en la Maestría de Derecho Penal de la Pontificia Universidad Católica del Perú (2004) y de Posgrado en Derecho Penal en la Universidad de Salamanca, España (2003).</p>
<p data-en="He holds a Master of Laws (LL.M.) specializing in Oral Advocacy from California Western School of Law (2016), as well as a Master's in Criminal Compliance from the University of Castilla – La Mancha, Spain (2021). Cross-examination course at Alejandro Decastro Gonzales Legal Clinic – Medellín, Colombia (2023)." data-es="Es Magister en Derecho con especialización en Litigación Oral (LL.M.) por la California Western School of Law (2016). Asimismo, cuenta con un Máster en Cumplimiento Normativo en Derecho Penal por la Universidad de Castilla – La Mancha, España (2021). Curso de Contrainterrogatorio en la Clínica Jurídica Alejandro Decastro Gonzales – Medellín, Colombia (2023).">Es Magister en Derecho con especialización en Litigación Oral (LL.M.) por la California Western School of Law (2016). Asimismo, cuenta con un Máster en Cumplimiento Normativo en Derecho Penal por la Universidad de Castilla – La Mancha, España (2021). Curso de Contrainterrogatorio en la Clínica Jurídica Alejandro Decastro Gonzales – Medellín, Colombia (2023).</p>
<h3 data-en="Experience:" data-es="Experiencia:">Experiencia:</h3>
<p data-en="His professional activity and career have allowed him to intervene in high-profile criminal litigation. He possesses extensive experience grounded in the dogmatic field and precise knowledge of the functioning of the criminal judicial system." data-es="Su actividad profesional y trayectoria le han permitido intervenir en litigios penales de gran relevancia. Posee una amplia experiencia fundamentada en el ámbito dogmático y en el conocimiento preciso del funcionamiento del sistema judicial penal.">Su actividad profesional y trayectoria le han permitido intervenir en litigios penales de gran relevancia. Posee una amplia experiencia fundamentada en el ámbito dogmático y en el conocimiento preciso del funcionamiento del sistema judicial penal.</p>
<p data-en="He is the author of various research papers and publications related to Criminal Law and its implications for business activity." data-es="Es autor de diversos trabajos de investigación y publicaciones relacionados al Derecho Penal y a sus implicancias en el ejercicio de la actividad empresarial.">Es autor de diversos trabajos de investigación y publicaciones relacionados al Derecho Penal y a sus implicancias en el ejercicio de la actividad empresarial.</p>
<p data-en="He currently serves as Managing Partner of TuPlus Abogados, practicing professionally since 2007. He has been part of the criminal law departments at Muñiz and Benites, Mercado &amp; Ugaz law firms." data-es="Actualmente se desempeña como Socio Director de TuPlus Abogados, donde viene ejerciendo profesionalmente desde el año 2007. Ha formado parte de las áreas penales de los Estudios Muñiz y Benites, Mercado &amp; Ugaz.">Actualmente se desempeña como Socio Director de TuPlus Abogados, donde viene ejerciendo profesionalmente desde el año 2007. Ha formado parte de las áreas penales de los Estudios Muñiz y Benites, Mercado &amp; Ugaz.</p>
<h3 data-en="Theses and Publications:" data-es="Tesis y publicaciones:">Tesis y publicaciones:</h3>
<ul>
<li data-en="Criminal liability of legal entities – Accessory consequences." data-es="“La responsabilidad penal de las personas jurídicas – Consecuencias accesorias.”">“La responsabilidad penal de las personas jurídicas – Consecuencias accesorias.”</li>
<li data-en="Civil reparation in criminal proceedings." data-es="“La reparación civil en el proceso penal.”">“La reparación civil en el proceso penal.”</li>
<li data-en="The presumption of innocence in the New Criminal Procedure Code." data-es="“La presunción de inocencia en el Nuevo Código Procesal Penal.”">“La presunción de inocencia en el Nuevo Código Procesal Penal.”</li>
</ul>
<h3 data-en="Memberships:" data-es="Membresías:">Membresías:</h3>
<ul>
<li data-en="Peruvian Institute of Criminology and Penal Sciences (INPECCP)." data-es="Instituto Peruano de Criminología y Ciencias Penales (INPECCP).">Instituto Peruano de Criminología y Ciencias Penales (INPECCP).</li>
<li data-en="Lima Bar Association." data-es="Colegio de Abogados de Lima.">Colegio de Abogados de Lima.</li>
</ul>
<h3 data-en="Languages:" data-es="Idiomas:">Idiomas:</h3>
<ul>
<li data-en="Spanish" data-es="Español">Español</li>
<li data-en="English" data-es="Inglés">Inglés</li>
</ul>
</div>
<div class="text-right mt-3">
<button class="btn-gold" data-en="Close" data-es="Cerrar" onclick="closeModal('modal-jose-dante')">Cerrar</button>
</div>
</div>
</div>
<div class="modal" id="modal-frank-luis">
<div class="modal-content profile-modal-content">
<button class="modal-close" onclick="closeModal('modal-frank-luis')">×</button>
<h2 class="profile-modal-name">FRANK LUIS QUISPE ROJAS</h2>
<p class="profile-modal-role" data-en="PARTNER" data-es="SOCIO">SOCIO</p>
<hr class="profile-divider"/>
<p class="profile-email"><i class="fa-solid fa-envelope"></i> frank.luis@tuplusabogados.com.pe</p>
<div class="profile-modal-body">
<h3 data-en="Academic Background:" data-es="Formación académica:">Formación académica:</h3>
<p data-en="Lawyer specialized in Criminal Procedural Law, Oral Advocacy, and Economic Crimes. Extensive background in sponsoring complex criminal proceedings and corporate preventive consulting." data-es="Abogado especialista en Derecho Procesal Penal, Litigación Oral y Delitos Económicos. Amplia trayectoria en el patrocinio de procesos penales complejos y consultoría preventiva corporativa.">Abogado especialista en Derecho Procesal Penal, Litigación Oral y Delitos Económicos. Amplia trayectoria en el patrocinio de procesos penales complejos y consultoría preventiva corporativa.</p>
<h3 data-en="Experience:" data-es="Experiencia:">Experiencia:</h3>
<p data-en="Partner at TuPlus Abogados with extensive experience in defending high-complexity criminal litigation, regulatory compliance, and sponsorship before judicial and arbitral instances." data-es="Socio en TuPlus Abogados con amplia experiencia en la defensa de litigios penales de alta complejidad, compliance normativo y patrocinio ante instancias judiciales y arbitrales.">Socio en TuPlus Abogados con amplia experiencia en la defensa de litigios penales de alta complejidad, compliance normativo y patrocinio ante instancias judiciales y arbitrales.</p>
<h3 data-en="Languages:" data-es="Idiomas:">Idiomas:</h3>
<ul>
<li data-en="Spanish" data-es="Español">Español</li>
<li data-en="English" data-es="Inglés">Inglés</li>
</ul>
</div>
<div class="text-right mt-3">
<button class="btn-gold" data-en="Close" data-es="Cerrar" onclick="closeModal('modal-frank-luis')">Cerrar</button>
</div>
</div>
</div>
<div class="modal" id="modal-dayana-mercedez">
<div class="modal-content profile-modal-content">
<button class="modal-close" onclick="closeModal('modal-dayana-mercedez')">×</button>
<h2 class="profile-modal-name">DAYANA MERCEDEZ URRIAGA</h2>
<p class="profile-modal-role" data-en="SENIOR ASSOCIATE" data-es="ASOCIADA PRINCIPAL">ASOCIADA PRINCIPAL</p>
<hr class="profile-divider"/>
<p class="profile-email"><i class="fa-solid fa-envelope"></i> dayana.mercedez@tuplusabogados.com.pe</p>
<div class="profile-modal-body">
<h3 data-en="Academic Background:" data-es="Formación académica:">Formación académica:</h3>
<p data-en="Lawyer graduated with honors, specialist in Corporate Law, Regulatory Compliance, and Prevention of Corporate Criminal Risks." data-es="Abogada graduada con mención de honor, especialista en Derecho Corporativo, Cumplimiento Normativo y Prevención de Riesgos Penales Empresariales.">Abogada graduada con mención de honor, especialista en Derecho Corporativo, Cumplimiento Normativo y Prevención de Riesgos Penales Empresariales.</p>
<h3 data-en="Experience:" data-es="Experiencia:">Experiencia:</h3>
<p data-en="Senior Associate at TuPlus Abogados. Advises companies on the design of crime prevention programs and procedural sponsorship in corporate investigations." data-es="Asociada Principal en TuPlus Abogados. Asesora a empresas en el diseño de programas de prevención de delitos y patrocinio procesal en investigaciones corporativas.">Asociada Principal en TuPlus Abogados. Asesora a empresas en el diseño de programas de prevención de delitos y patrocinio procesal en investigaciones corporativas.</p>
<h3 data-en="Languages:" data-es="Idiomas:">Idiomas:</h3>
<ul>
<li data-en="Spanish" data-es="Español">Español</li>
<li data-en="English" data-es="Inglés">Inglés</li>
</ul>
</div>
<div class="text-right mt-3">
<button class="btn-gold" data-en="Close" data-es="Cerrar" onclick="closeModal('modal-dayana-mercedez')">Cerrar</button>
</div>
</div>
</div>`;

export default function Perfil() {
  return <div dangerouslySetInnerHTML={{ __html: perfilMarkup }} />;
}