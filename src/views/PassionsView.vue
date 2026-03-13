<script setup>
import { ref } from 'vue'

const passions = ref([
  { 
    id: 1, icon: '🏊‍♂️', title: 'Natation', duration: '+11 ans en club', 
    desc: "L'exigence et la régularité de ce sport m'ont forgé un mental de fer et une grande persévérance. Des qualités indispensables face aux bugs coriaces !", 
    accent: 'var(--color-olive)' 
  },
  { 
    id: 2, icon: '🤝', title: 'Associatif', duration: 'Bénévolat AMA', 
    desc: "Animation d'œuvres de charité. C'est une façon essentielle pour moi de garder un lien fort avec mes racines malgaches tout en aidant mon prochain.", 
    accent: 'var(--color-earth)' 
  },
  { 
    id: 3, icon: '🛠️', title: 'DIY & Maker', duration: 'Conception', 
    desc: "J'adore comprendre comment les choses fonctionnent. Je réalise des petits projets de mes propres mains, ce qui stimule mon esprit logique et pratique.", 
    accent: 'var(--color-dark-green)' 
  },
  { 
    id: 4, icon: '🎹', title: 'Piano', duration: '3 ans', 
    desc: "La musique m'apporte une véritable respiration créative. L'apprentissage du piano demande une rigueur qui fait curieusement écho à l'écriture du code.", 
    accent: 'var(--color-lime)' 
  },
  { 
    id: 5, icon: '🎮', title: 'Jeux Vidéo', duration: 'Stratégie', 
    desc: "Plutôt orienté vers les jeux nécessitant de la réflexion. Un excellent moyen d'entraîner sa prise de décision rapide et la gestion de ressources.", 
    accent: 'var(--color-olive)' 
  },
  { 
    id: 6, icon: '🚀', title: 'Veille Tech', duration: 'Quotidien', 
    desc: "Le monde de l'informatique évolue à une vitesse folle. Je suis toujours curieux de découvrir et tester les dernières innovations et technos.", 
    accent: 'var(--color-earth)' 
  }
])

const activeId = ref(1)
</script>

<template>
  <div class="passions-view">
    
    <div class="header-section">
      <h1 class="page-title">Mes Passions</h1>
      <p class="subtitle">Ce qui m'anime au-delà de l'écran.</p>
      <p class="intro-text">
        L'informatique est ma vocation, mais mes centres d'intérêt forgent mon équilibre. Du sport à la musique en passant par l'engagement associatif, voici les activités qui stimulent ma créativité et mon esprit d'analyse au quotidien.
      </p>
    </div>

    <div class="accordion-container">
      <div 
        v-for="item in passions" 
        :key="item.id" 
        class="panel"
        :class="{ active: activeId === item.id }"
        @mouseenter="activeId = item.id"
        @click="activeId = item.id"
        :style="{ '--accent': item.accent }"
      >
        <div class="panel-icon">{{ item.icon }}</div>

        <div class="panel-preview">
          <h3 class="vertical-title">{{ item.title }}</h3>
        </div>

        <div class="watermark">{{ item.icon }}</div>

        <div class="panel-content">
          <div class="panel-info">
            <h3>{{ item.title }}</h3>
            <span class="badge">{{ item.duration }}</span>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.passions-view {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
}

/* --- EN-TÊTE ÉTOFFÉ --- */
.header-section {
  margin-bottom: 3rem;
}

.page-title {
  color: var(--color-dark-green);
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}

.subtitle {
  color: var(--color-olive);
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 1rem;
}

.intro-text {
  color: var(--text-light);
  line-height: 1.6;
  max-width: 800px;
  font-size: 1.05rem;
}

/* --- L'ACCORDÉON --- */
.accordion-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 550px; /* Un peu plus haut pour plus de prestance */
  gap: 15px;
}

.panel {
  position: relative;
  flex: 1; 
  background-color: var(--card-bg);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(46, 70, 0, 0.1);
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.panel:hover {
  background-color: #fcfcfc;
}

.panel.active {
  flex: 6; /* Prend beaucoup plus de place */
  border-color: var(--accent);
  box-shadow: 0 15px 35px rgba(0,0,0,0.08);
  transform: translateY(-5px);
  background-color: var(--card-bg);
}

/* --- L'ICÔNE QUI SE DÉPLACE --- */
.panel-icon {
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background-color: var(--bg-beige);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 10;
}

/* Quand ouvert, l'icône va en haut à gauche */
.panel.active .panel-icon {
  left: 1.5rem;
  transform: translateX(0) scale(1.1);
  background-color: white;
  border: 1px solid var(--accent);
}

/* --- LE TEXTE VERTICAL (PANNEAUX FERMÉS) --- */
.panel-preview {
  position: absolute;
  top: 6rem; /* Sous l'icône */
  bottom: 2rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.panel.active .panel-preview {
  opacity: 0;
  pointer-events: none;
}

.vertical-title {
  writing-mode: vertical-rl; /* Fait tourner le texte à la verticale */
  transform: rotate(180deg); /* Le met dans le sens de lecture naturel (bas vers le haut) */
  font-size: 1.1rem;
  color: var(--text-light);
  letter-spacing: 4px; /* Étire le mot pour remplir la bande */
  text-transform: uppercase;
  font-weight: 700;
  white-space: nowrap;
}

/* --- LE CONTENU (PANNEAU OUVERT) --- */
.panel-content {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Pousse le texte en bas */
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
  z-index: 5;
}

.panel.active .panel-content {
  opacity: 1;
  pointer-events: auto;
  transition-delay: 0.2s; /* Apparaît doucement après l'ouverture */
}

.panel-info h3 {
  color: var(--color-dark-green);
  font-size: 1.8rem;
  margin: 0 0 0.5rem 0;
}

.badge {
  display: inline-block;
  background-color: rgba(46, 70, 0, 0.05);
  color: var(--accent);
  border: 1px solid var(--accent);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
}

.panel-info p {
  color: var(--text-light);
  line-height: 1.6;
  font-size: 1.05rem;
  margin: 0;
  max-width: 90%; /* Évite que le texte ne touche les bords */
}

/* --- L'ÉMOJI EN FILIGRANE --- */
.watermark {
  position: absolute;
  right: -20px;
  bottom: -20px;
  font-size: 14rem;
  opacity: 0;
  z-index: 1;
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform: scale(0.5) rotate(0deg);
}

.panel.active .watermark {
  opacity: 0.04;
  transform: scale(1) rotate(-15deg);
}

/* --- RESPONSIVE MOBILE --- */
@media screen and (max-width: 850px) {
  .accordion-container {
    flex-direction: column;
    height: 700px;
  }
  
  /* On remet le texte à l'horizontale sur mobile */
  .vertical-title {
    writing-mode: horizontal-tb;
    transform: none;
    letter-spacing: 2px;
  }

  .panel-preview {
    top: 0; left: 6rem; bottom: 0;
    justify-content: flex-start;
  }

  .panel-icon {
    top: 50%; left: 1rem;
    transform: translateY(-50%);
  }

  .panel.active .panel-icon {
    top: 1.5rem; left: 1.5rem;
    transform: translateX(0) scale(1);
  }
}
</style>