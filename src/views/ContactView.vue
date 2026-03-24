<template>
  <div class="contact-view">
    <h1 class="page-title">Contact</h1>
    
    <p class="intro-text">
      N'hésitez pas à me contacter pour toute question ou collaboration. Je serai ravi d'échanger avec vous !
    </p>

    <div class="contact-list">
      
      <a href="mailto:toavina.randrianatrehina@etu.uca.fr" class="contact-card">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="2" fill="none">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        <div class="card-content">
          <h3>Email</h3>
          <p>toavina.randrianatrehina@etu.uca.fr</p>
        </div>
      </a>

      <a href="https://www.linkedin.com/in/toavina-randrianatrehina-6b150b365/" target="_blank" class="contact-card">
        <img src="/assets/images/linkedIn-logo.png" alt="LinkedIn" class="custom-icon">
        <div class="card-content">
          <h3>LinkedIn</h3>
          <p>Mon profil professionnel</p>
        </div>
      </a>

      <a href="https://github.com/Toav1na" target="_blank" class="contact-card">
        <div class="icon-wrapper dark-bg">
          <img src="/assets/images/github-mark-white.png" alt="GitHub" class="custom-icon small">
        </div>
        <div class="card-content">
          <h3>GitHub</h3>
          <p>Mes dépôts et contributions</p>
        </div>
      </a>

      <a href="/CV-Toavina-Randrianatrehina.pdf" download class="contact-card cv-card">
        <div class="card-icon cv-text">CV</div>
        <div class="card-content">
          <h3>Curriculum Vitae</h3>
          <p>Télécharger au format PDF</p>
        </div>
      </a>

    </div>
  </div>
</template>

<style scoped>
/* --- ALIGNEMENT CALQUÉ SUR LA PAGE PROJETS --- */
.contact-view {
  width: 100%;
  max-width: 650px; /* Même largeur que tes projets pour une cohérence parfaite */
  margin: 0 auto;
  text-align: left;
}

.page-title {
  color: var(--color-dark-green);
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.intro-text {
  color: var(--text-light);
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

/* --- LISTE DES CONTACTS --- */
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espace entre chaque carte */
}

/* --- DESIGN DES CARTES --- */
.contact-card {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background-color: transparent;
  border: 1px solid rgba(46, 70, 0, 0.15); /* Bordure discrète */
  border-radius: 4px;
  text-decoration: none;
  color: var(--text-main);
  transition: all 0.3s ease;
}

/* L'effet Premium au survol : la carte avance légèrement vers la droite */
.contact-card:hover {
  border-color: var(--color-olive);
  background-color: var(--card-bg);
  transform: translateX(8px); 
  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.03);
}

.card-content h3 {
  margin: 0 0 0.3rem 0;
  font-size: 1.1rem;
  color: var(--color-dark-green);
}

.card-content p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-light);
}

.card-icon {
  font-size: 2rem;
  margin-right: 1.5rem;
  width: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* On force l'épaisseur et le style de l'icône texte "CV" */
.cv-text {
  font-weight: 900; /* Ultra épais */
  font-family: 'Inter', sans-serif;
  letter-spacing: -1px; /* Rapproche un peu les lettres pour un effet logo */
  font-size: 2.2rem;
}

.custom-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-right: 1.5rem;
}

.custom-icon.small {
  width: 25px;
  height: 25px;
  margin-right: 0; /* Géré par le wrapper */
}

.icon-wrapper {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-right: 1.5rem;
}

.dark-bg {
  background-color: #24292e; /* Fond foncé pour faire ressortir ton logo GitHub blanc */
}

/* --- CARTE CV SPÉCIALE --- */
.contact-card.cv-card {
  margin-top: 1rem;
  border-color: var(--color-earth);
  background-color: rgba(125, 68, 39, 0.03); /* Léger fond marron */
}

.contact-card.cv-card h3 {
  color: var(--color-earth);
}

.contact-card.cv-card:hover {
  background-color: var(--color-earth);
  color: white;
}

.contact-card.cv-card:hover h3,
.contact-card.cv-card:hover p {
  color: white;
}
</style>