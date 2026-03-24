<script setup>
</script>

<template>
  <div class="home-view">
    
    <section class="hero-section">
      <div class="subtitle-wrapper">
        <span class="line"></span>
        <span class="subtitle">PORTFOLIO RÉALISÉ PAR</span>
        <span class="line"></span>
      </div>
      
      <h1 class="main-title">
        Toavina <span class="highlight">Randrianatrehina</span>
      </h1>
      
      <p class="tagline">"Recherche un stage de 8 à 10 semaines dans le cadre de mes études."</p>
      
      <RouterLink to="/contact" class="btn-connect">
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        <span>Me Contacter</span>
      </RouterLink>
    </section>

    <section class="about-section">
      <div class="section-header">
        <h2>À propos de moi</h2>
      </div>

      <div class="about-top-row">
        
        <div class="about-photo-container">
          <img src="/assets/images/toavina.jpg" alt="Toavina Randrianatrehina" class="about-photo">
        </div>
        
        <div class="about-text">
          <p>
            Étudiant en <strong>deuxième année de BUT Informatique</strong> à l'IUT Clermont Auvergne, je me passionne pour le développement de solutions complètes.
          </p>
          <p>
            Mon parcours m'a permis d'allier mon goût pour la <strong>logique algorithmique</strong> avec la création d'interfaces intuitives. Que ce soit sur la conception de <strong>bases de données</strong>, le code <strong>backend</strong> ou l'intégration <strong>frontend</strong>, j'aime comprendre un projet dans sa globalité.
          </p>
          <p>
            Toujours curieux, je <strong>recherche un stage ou une alternance</strong> pour mettre en pratique mes connaissances et relever de nouveaux défis techniques au sein d'une équipe dynamique.
          </p>
        </div>

      </div>

      <div class="skills-bottom-row">
        <h3 class="skills-title">Mes Compétences</h3>
        
        <div class="skills-tags-grid">
          
          <div class="skill-category">
            <h4>Web & Front-end</h4>
            <div class="tags-container">
              <span class="tag">HTML / CSS</span>
              <span class="tag">JavaScript</span>
              <span class="tag">Vue.js 3</span>
              <span class="tag">UI/UX</span>
            </div>
          </div>

          <div class="skill-category">
            <h4>Back-end & Logiciel</h4>
            <div class="tags-container">
              <span class="tag">C / C++ / C#</span>
              <span class="tag">Python</span>
              <span class="tag">PHP</span>
              <span class="tag">Java / JavaFX</span>
            </div>
          </div>

          <div class="skill-category">
            <h4>Outils & Données</h4>
            <div class="tags-container">
              <span class="tag">SQL / PostgreSQL</span>
              <span class="tag">noSQL / MongoDB</span>
              <span class="tag">Git / GitHub</span>
              <span class="tag">Linux</span>
              <span class="tag">Agile</span>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.home-view {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

/* --- HERO SECTION --- */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 8rem;
  animation: fadeIn 1s ease-out;
}

.subtitle-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.subtitle-wrapper .line {
  width: 40px;
  height: 1px;
  background-color: var(--text-light);
}

.subtitle {
  font-size: 0.8rem;
  letter-spacing: 4px;
  color: var(--text-light);
  text-transform: uppercase;
}

.main-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  color: var(--text-main);
  margin: 0 0 1rem 0;
  line-height: 1.1;
  letter-spacing: -1px;
}

.main-title .highlight {
  color: var(--color-olive);
}

.tagline {
  font-size: 1.2rem;
  font-style: italic;
  color: var(--text-light);
  margin-bottom: 2.5rem;
}

.btn-connect {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: var(--bg-beige);
  color: var(--text-main);
  border: 1px solid var(--text-main);
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.btn-connect:hover {
  background-color: var(--color-olive);
  border-color: var(--color-olive);
  color: var(--card-bg);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(72, 107, 0, 0.15);
}

/* --- SECTION PROFIL & COMPÉTENCES --- */
.section-header h2 {
  font-size: 1.8rem;
  color: var(--text-main);
  margin-bottom: 3rem;
  text-align: center;
}

/* ÉTAGE 1 : Grille Photo + Texte */
.about-top-row {
  display: grid;
  grid-template-columns: 280px 1fr; /* 280px pour la photo, le reste pour le texte */
  gap: 4rem;
  align-items: center; /* Centre le texte verticalement par rapport à la photo */
  margin-bottom: 5rem; /* Grand espace avant les compétences */
}

/* Photo */
.about-photo-container {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.06);
  border: 1px solid rgba(0,0,0,0.05);
}

.about-photo {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s ease;
}

.about-photo-container:hover .about-photo {
  transform: scale(1.05);
}

/* Texte */
.about-text p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 1.5rem;
}

/* ÉTAGE 2 : Compétences en pleine largeur */
.skills-bottom-row {
  width: 100%;
}

.skills-title {
  font-size: 1.4rem;
  color: var(--text-main);
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding-bottom: 0.5rem;
}

.skills-tags-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 belles colonnes ! */
  gap: 2rem;
}

.skill-category h4 {
  font-size: 1rem;
  color: var(--color-earth);
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background-color:var(--card-bg);
  color: var(--text-main);
  border: 1px solid rgba(0,0,0,0.1);
  padding: 0.4rem 0.9rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.tag:hover {
  border-color: var(--color-olive);
  color: var(--color-olive);
  background-color: rgba(72, 107, 0, 0.05);
  transform: translateY(-2px);
}

/* ANIMATION D'APPARITION */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- RESPONSIVE MOBILE & TABLETTE --- */
@media screen and (max-width: 950px) {
  .about-top-row {
    grid-template-columns: 1fr; /* Sur tablette, photo au dessus, texte en dessous */
    gap: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .about-photo-container {
    max-width: 250px;
    margin: 0 auto;
  }

  .skills-tags-grid {
    grid-template-columns: 1fr 1fr; /* 2 colonnes pour tablette */
  }
}

@media screen and (max-width: 600px) {
  .hero-section {
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
  
  .skills-tags-grid {
    grid-template-columns: 1fr; /* 1 seule colonne pour mobile */
    gap: 2.5rem;
  }
}
</style>