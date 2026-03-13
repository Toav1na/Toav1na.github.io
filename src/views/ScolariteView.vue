<script setup>
import { ref, watch } from 'vue'

const parcours = ref([
  {
    id: 'future',
    position: 'center', // Tronc (Haut)
    title: 'La suite de mon parcours...',
    establishment: 'À la recherche de nouvelles opportunités',
    date: 'Demain et au-delà',
    image: null, 
    description: "Les futures feuilles de mon arbre : stages, alternance, ou poursuite d'études pour approfondir mes compétences en développement web, architectures logicielles et nouvelles technologies.",
    details: [],
    type: 'future'
  },
  {
    id: 'iut',
    position: 'right', // Branche Droite
    title: 'BUT Informatique (2ème Année)',
    establishment: 'IUT Clermont Auvergne (Aubière)',
    date: '2024 - Présent',
    image: 'iut-clermont.jpg',
    description: "Actuellement en deuxième année, j'ai considérablement élargi mon éventail technique. Spécialisé en réalisation d'applications, je possède désormais une bonne maîtrise pour le développement front-end et back-end (Vue.js, PHP, JavaScript), la conception et gestion avancée de bases de données, et le travail en méthode agile. Une année charnière remplie de projets concrets.",
    details: [],
    type: 'education'
  },
  {
    id: 'exp1',
    position: 'left', // Branche Gauche
    title: 'Castration de maïs',
    establishment: 'Exploitation agricole, Auvergne',
    date: 'Été 2022',
    image: 'mais.jpg', // Met bien une image "mais.jpg" dans public/assets/images/
    description: "Première expérience professionnelle sous forme de travail saisonnier dans les champs. Une expérience fondatrice sur la valeur du travail.",
    details: [
      "Castration manuelle des plants de maïs pour la production de semences",
      "Contrôle qualité des plants castrés",
      "Travail en équipe et respect des protocoles de production",
      "Compétences : Précision, minutie, endurance physique et persévérance"
    ],
    type: 'experience'
  },
  {
    id: 'lycee',
    position: 'right', // Branche Droite
    title: 'Lycée (Baccalauréat)',
    establishment: 'Lycée Godefroy de Bouillon',
    date: '2021 - 2024',
    image: 'godfroy.JPG',
    description: "Parcours scientifique orienté vers l'ingénierie et les mathématiques. C'est en fin de lycée que mon goût pour l'informatique s'est confirmé, me poussant à m'orienter pleinement vers cette voie.",
    details: [
      'Spécialités : Sciences de l\'ingénieur, Physique-Chimie, Mathématiques',
      'Obtenu sans mention', 
      'Clermont-Ferrand (63100)'
    ],
    type: 'education'
  },
  {
    id: 'college',
    position: 'center', // Tronc (Racines)
    title: 'Collège',
    establishment: 'Collège Franc Rosier',
    date: '2016 - 2021',
    image: 'college.webp',
    description: "Mes racines. C'est ici que j'ai pris goût à l'informatique au travers des premiers travaux pratiques en Technologie, posant les bases de mon intérêt pour les sciences.",
    details: ['Brevet Mention Bien', 'Clermont-Ferrand (63100)'],
    type: 'education'
  }
])

const showModal = ref(false)
const selectedNode = ref(null)

const openModal = (item) => {
  selectedNode.value = item
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  setTimeout(() => { selectedNode.value = null }, 300)
}

watch(showModal, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && showModal.value) closeModal()
})
</script>

<template>
  <div class="scolarite-view">
    <h1 class="page-title">Mon Parcours</h1>
    <p class="subtitle">De mes racines à mes futurs projets.</p>

    <div class="tree-container">
      <div class="trunk"></div>

      <div class="nodes-list">
        <div 
          v-for="item in parcours" 
          :key="item.id" 
          class="tree-row"
          :class="item.position"
        >
          <div v-if="item.position !== 'center'" class="tree-branch"></div>

          <div 
            class="tree-node"
            :class="item.type"
            @click="openModal(item)"
          >
            <div class="node-card">
              <div class="node-image-wrapper">
                <img v-if="item.image" :src="`/assets/images/${item.image}`" :alt="item.title" class="node-image">
                <div v-if="!item.image" class="placeholder-icon">🍃</div>
              </div>
              <div class="node-info">
                <h3>{{ item.title }}</h3>
                <p class="establishment">{{ item.establishment }}</p>
                <span class="date-badge">{{ item.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="modal-close" @click="closeModal">×</button>
          
          <div class="modal-header">
            <div class="modal-image-wrapper">
              <img v-if="selectedNode.image" :src="`/assets/images/${selectedNode.image}`" :alt="selectedNode.title" class="modal-image" @error="$event.target.style.display='none'">
              <div v-if="!selectedNode.image" class="modal-icon">🌳</div>
            </div>
            <div class="modal-title-area">
              <h2>{{ selectedNode.title }}</h2>
              <p class="modal-establishment">{{ selectedNode.establishment }}</p>
              <span class="modal-date">{{ selectedNode.date }}</span>
            </div>
          </div>

          <div class="modal-body">
            <p class="modal-desc">{{ selectedNode.description }}</p>
            
            <ul v-if="selectedNode.details.length > 0" class="modal-details-list">
              <li v-for="(detail, index) in selectedNode.details" :key="index">
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.scolarite-view {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
}

.page-title {
  color: var(--color-dark-green);
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}

.subtitle {
  color: var(--color-olive);
  font-style: italic;
  margin-bottom: 3rem;
}

/* --- STRUCTURE DE L'ARBRE (DESKTOP) --- */
.tree-container {
  position: relative;
  padding: 2rem 0;
  width: 100%;
}

/* Le Tronc */
.trunk {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  /* Dégradé : vert en haut (feuilles), marron au milieu, marron foncé en bas (racines) */
  background: linear-gradient(to bottom, var(--color-lime) 0%, var(--color-earth) 20%, #5c3219 100%);
  border-radius: 4px;
  z-index: 0;
}

.nodes-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
}

/* Lignes (Rows) pour aligner à gauche, à droite ou au centre */
.tree-row {
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
}

.tree-row.center {
  justify-content: center;
}

/* Moitié gauche */
.tree-row.left {
  padding-right: 50%; 
}
.tree-row.left .tree-node {
  margin-left: auto;
  margin-right: 40px; /* Laisse de la place pour la branche */
}

/* Moitié droite */
.tree-row.right {
  padding-left: 50%;
}
.tree-row.right .tree-node {
  margin-right: auto;
  margin-left: 40px; /* Laisse de la place pour la branche */
}

/* Les Branches horizontales */
.tree-branch {
  position: absolute;
  top: 50%;
  width: 40px;
  height: 6px;
  background-color: var(--color-earth);
  transform: translateY(-50%);
  z-index: 0;
}

.tree-row.left .tree-branch {
  right: 50%;
  border-radius: 4px 0 0 4px;
}

.tree-row.right .tree-branch {
  left: 50%;
  border-radius: 0 4px 4px 0;
}

/* --- DESIGN DES CELLULES (NŒUDS) --- */
.tree-node {
  width: 100%;
  max-width: 380px; /* Taille max d'une carte */
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.node-card {
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  border: 2px solid transparent;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.tree-node:hover .node-card {
  border-color: var(--color-lime);
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgb(0,0,0,);
}

.tree-node.experience .node-card {
  border-bottom: 4px solid var(--color-earth);
}

.tree-node.future .node-card {
  border: 2px dashed var(--color-lime);
  background-color: var(--bg-beige); /* Fond blanc totalement opaque */
}

.tree-node.future .node-image-wrapper {
  background-color: var(--bg-beige);/* On s'assure que le haut de la carte est opaque aussi */
}

/* Image */
.node-image-wrapper {
  height: 150px;
  width: 100%;
  background-color: var(--bg-beige);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.node-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.tree-node:hover .node-image {
  transform: scale(1.08);
}

.placeholder-icon {
  font-size: 5rem;
  color: var(--color-lime);
}

/* Info */
.node-info {
  padding: 1.5rem;
  text-align: center;
}

.node-info h3 {
  margin: 0 0 0.5rem 0;
  color: var(--color-dark-green);
  font-size: 1.2rem;
}

.establishment {
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  color: var(--text-light);
}

.date-badge {
  display: inline-block;
  background-color: var(--color-olive);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.tree-node.future .date-badge {
  background-color: var(--color-lime);
  color: var(--color-dark-green);
}

/* --- MODALE (POP-UP) --- */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 1rem;
}

.modal-content {
  background: var(--card-bg);
  border-radius: 12px;
  width: 100%;
  max-width: 650px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
  text-align: left;
}

.modal-close {
  position: absolute;
  top: 15px; right: 20px;
  background: none; border: none;
  font-size: 2.5rem; color: white;
  cursor: pointer; z-index: 10;
  transition: color 0.2s;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.modal-close:hover { color: var(--color-lime); }

.modal-header { position: relative; }

.modal-image-wrapper {
  height: 220px;
  background: var(--color-dark-green);
  display: flex; justify-content: center; align-items: center;
}

.modal-image {
  width: 100%; height: 100%;
  object-fit: cover; opacity: 0.8;
}

.modal-icon { font-size: 6rem; }

.modal-title-area {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 3rem 2rem 1.5rem 2rem;
  background: linear-gradient(to top, rgba(0,0,0,0.95), transparent);
  color: white;
}

.modal-title-area h2 { margin: 0; font-size: 1.8rem; }
.modal-establishment { margin: 0.3rem 0; font-size: 1.05rem; color: #ddd; }
.modal-date {
  display: inline-block;
  margin-top: 0.5rem;
  background: var(--color-lime); color: var(--color-dark-green);
  padding: 0.3rem 0.8rem; border-radius: 4px;
  font-weight: bold; font-size: 0.9rem;
}

.modal-body { padding: 2.5rem; }
.modal-desc { line-height: 1.6; color: var(--text-main); margin-bottom: 1.5rem; font-size: 1.05rem; }
.modal-details-list { padding-left: 1.5rem; margin: 0; color: var(--text-light); }
.modal-details-list li { margin-bottom: 0.5rem; line-height: 1.5; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(20px); }

/* --- RESPONSIVE MOBILE --- */
@media screen and (max-width: 850px) {
  /* Sur mobile, on retire les branches et on centre tout */
  .tree-branch { display: none; }
  .tree-row.left, .tree-row.right { padding: 0; justify-content: center; }
  .tree-row.left .tree-node, .tree-row.right .tree-node { margin: 0; }
  .tree-node { max-width: 90%; }
}
</style>