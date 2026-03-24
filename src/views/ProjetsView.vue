<script setup>
import { ref, computed } from 'vue'
// We import the data from our new data file!
import { projetsData } from '../data/projets' 

// We put our imported data into a reactive variable
const projets = ref(projetsData)

// --- FILTER LOGIC ---
const currentFilter = ref('tous')

const filteredProjets = computed(() => {
  if (currentFilter.value === 'tous') return projets.value
  return projets.value.filter(projet => projet.type === currentFilter.value)
})

// --- MODAL & GALLERY MANAGEMENT ---
const selectedProject = ref(null)
const currentModalImage = ref('') 

const openProject = (project) => {
  selectedProject.value = project
  currentModalImage.value = (project.gallery && project.gallery.length > 0) 
                            ? project.gallery[0] 
                            : project.imgHover
  document.body.style.overflow = 'hidden'
}

const closeProject = () => {
  selectedProject.value = null
  currentModalImage.value = ''
  document.body.style.overflow = ''
}
</script>

<template>
  <div class="projets-view">
    
    <div class="projects-header">
      <h1 class="page-title">PROJETS</h1>
      
      <div class="filter-group">
        <button 
          :class="['filter-btn', { active: currentFilter === 'tous' }]" 
          @click="currentFilter = 'tous'"
        >Tout</button>
        <button 
          :class="['filter-btn', { active: currentFilter === 'scolaire' }]" 
          @click="currentFilter = 'scolaire'"
        >Scolaires</button>
        <button 
          :class="['filter-btn', { active: currentFilter === 'personnel' }]" 
          @click="currentFilter = 'personnel'"
        >Personnels</button>
      </div>
    </div>

    <TransitionGroup name="list" tag="div" class="projects-grid">
      <div 
        v-for="item in filteredProjets" 
        :key="item.id" 
        class="project-card" 
        @click="openProject(item)"
      >
        <div class="img-container">
          <img :src="item.imgBase" :alt="item.title + ' - Base'" class="img-base">
          <img :src="item.imgHover" :alt="item.title + ' - Preview'" class="img-hover">
        </div>

        <div class="card-content">
          <div class="tags">
            <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <h3>{{ item.title }}</h3>
        </div>
      </div>
    </TransitionGroup>

    <Transition name="fade">
      <div v-if="selectedProject" class="modal-overlay" @click.self="closeProject">
        <div class="modal-content">
          <button @click="closeProject" class="close-btn" title="Fermer">&times;</button>
          
          <div class="modal-body">
            
            <div class="modal-gallery-section">
              <div class="modal-photo">
                <img :src="currentModalImage" alt="Preview du projet">
              </div>
              
              <div class="thumbnail-list" v-if="selectedProject.gallery && selectedProject.gallery.length > 1">
                <div 
                  v-for="(img, index) in selectedProject.gallery" 
                  :key="index"
                  class="thumbnail"
                  :class="{ active: currentModalImage === img }"
                  @click="currentModalImage = img"
                >
                  <img :src="img" :alt="'Miniature ' + (index + 1)">
                </div>
              </div>
            </div>
            
            <div class="modal-details">
              <div class="modal-details-inner">
                <h2>{{ selectedProject.title }}</h2>
                
                <div class="tags">
                  <span v-for="tag in selectedProject.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>

                <div class="competences-list" v-if="selectedProject.competences">
                  <strong>Compétences mobilisées :</strong>
                  <ul>
                    <li v-for="comp in selectedProject.competences" :key="comp">{{ comp }}</li>
                  </ul>
                </div>
                
                <div class="desc-content">
                  <p>{{ selectedProject.descFull }}</p>
                </div>
              </div>
              
              <div class="action-links" v-if="selectedProject.links && selectedProject.links.length > 0">
                <a 
                  v-for="(link, index) in selectedProject.links" 
                  :key="index"
                  :href="link.url"
                  target="_blank"
                  :class="['action-btn', { play: link.isPlayButton }]"
                >
                  <span class="btn-icon" v-html="link.icon"></span>
                  {{ link.label }}
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
.projets-view {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  padding: 1rem 0;
}

/* --- FLEXBOX HEADER --- */
.projects-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end; 
  margin-bottom: 4rem;
  border-bottom: 1px solid var(--nav-border);
  padding-bottom: 1.5rem;
}

.page-title {
  color: var(--text-main);
  margin: 0;
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 1;
}

/* --- FILTER BUTTONS --- */
.filter-group {
  display: flex;
  gap: 1.5rem;
}

.filter-btn {
  background: none;
  border: none;
  color: var(--text-light);
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.filter-btn:hover {
  color: var(--text-main);
}

.filter-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: var(--color-lime);
  transition: width 0.3s ease;
}

.filter-btn.active {
  color: var(--color-lime);
}

.filter-btn.active::after {
  width: 100%;
}

/* --- GRID & CARDS --- */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 3rem;
  position: relative; 
}

.project-card {
  background-color: var(--card-bg);
  border-radius: 12px;
  overflow: hidden; 
  position: relative;
  cursor: pointer;
  border: 1px solid var(--nav-border);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease, border-color 0.4s ease;
  aspect-ratio: 4 / 3;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
  border-color: var(--color-lime);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.list-leave-active {
  position: absolute; 
}

/* --- IMAGES & CONTENT --- */
.img-container {
  width: 100%;
  height: 100%;
  position: absolute; 
  top: 0;
  left: 0;
  z-index: 1;
}

.img-base, .img-hover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.5s ease;
}

.img-base { opacity: 1; }
.img-hover { opacity: 0; }
.project-card:hover .img-base { opacity: 0; }
.project-card:hover .img-hover { opacity: 1; }

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 1.5rem;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0.9) 100%);
  color: white;
  z-index: 2; 
  transition: background 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 60%;
}

.project-card:hover .card-content {
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,1) 100%);
}

.card-content h3 {
  font-size: 1.4rem;
  margin: 0.8rem 0 0 0;
  text-shadow: 0 2px 4px rgba(0,0,0,0.8);
}

.tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }

.tag {
  background-color: rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.8rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
  backdrop-filter: blur(8px);
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}

/* --- NEW MODAL DESIGN (FIXES) --- */
/* --- LE NOUVEAU DESIGN DE LA MODALE (Façon UI Gaming) --- */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85); /* Plus sombre pour faire ressortir la modale */
  z-index: 2000; 
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
}

.modal-content {
  background-color: #0f1115; /* Fond très sombre comme sur ta maquette */
  width: 90%;
  max-width: 1100px;
  max-height: 90vh; 
  border-radius: 16px;
  padding: 3rem;
  position: relative;
  box-shadow: 0 25px 50px rgba(0,0,0,0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden; 
}

.modal-body {
  display: grid;
  grid-template-columns: 1fr 1.1fr; /* Donne un tout petit peu plus de place au texte */
  gap: 4rem;
  height: 100%;
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  font-size: 2.5rem;
  color: #64748b;
  cursor: pointer;
  line-height: 1;
  transition: color 0.3s ease, transform 0.3s ease;
  z-index: 10;
}

.close-btn:hover {
  color: #fff;
  transform: rotate(90deg);
}

/* --- SECTION GALERIE (Gauche) --- */
.modal-gallery-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.modal-photo {
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  background-color: #00000059; /* Assure qu'il n'y a pas de fond noir derrière */
  /* J'ai supprimé la ligne aspect-ratio ici ! */
}

.modal-photo img {
  width: 100%;
  height: auto; /* L'image dicte sa propre hauteur naturellement */
  display: block; /* Enlève le micro-espace fantôme en bas des images */
  object-fit: contain; /* Assure que l'image est toujours affichée en entier */
}

.thumbnail-list {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
}

.thumbnail {
  width: 90px;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  opacity: 0.5;
  transition: all 0.2s ease;
  background-color: #000;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.thumbnail:hover { opacity: 0.8; }
.thumbnail.active { 
  opacity: 1; 
  border-color: #a855f7; /* Violet au clic */
}

/* --- SECTION DÉTAILS (Droite) --- */
.modal-details {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.modal-details-inner {
  flex: 1;
  overflow-y: auto; 
  padding-right: 1rem; 
}

/* Personnalisation de la barre de scroll pour la zone de texte */
.modal-details-inner::-webkit-scrollbar { width: 6px; }
.modal-details-inner::-webkit-scrollbar-track { background: transparent; }
.modal-details-inner::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }

.modal-details h2 {
  color: #f8fafc; /* Blanc cassé très propre */
  margin-top: 0;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.modal-details .tags {
  margin-bottom: 2.5rem;
}

.modal-details .tags .tag {
  background-color: transparent;
  color: #94a3b8;
  border: 1px solid #334155;
  padding: 0.4rem 1rem;
}

/* --- LES COMPÉTENCES (Le trait violet) --- */
.competences-list {
  margin-bottom: 2.5rem;
  padding: 0.2rem 0 0.2rem 1.5rem; /* Espace à gauche pour le trait */
  border-left: 4px solid #c084fc; /* Le fameux trait violet de ta maquette */
}

.competences-list strong {
  color: #f8fafc;
  font-size: 1rem;
  display: block;
  margin-bottom: 1rem;
}

.competences-list ul {
  margin: 0;
  padding-left: 1.5rem;
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.8;
  list-style-type: disc; /* Remet les petits points */
}

.competences-list li::marker {
  color: #64748b; /* Couleur discrète pour les points */
}

.desc-content p {
  color: #e2e8f0;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

/* --- LES BOUTONS D'ACTION (Le bas de la modale) --- */
.action-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05); /* La ligne séparatrice subtile */
  margin-top: 1rem;
}

/* Le gros bouton vert "Jouer" */
.action-btn.play {
  background-color: #22c55e; /* Vert Xbox/Spotify */
  color: #000; /* Texte noir pour faire contraste */
  border: none;
  font-weight: 700;
}

.action-btn.play:hover {
  background-color: #16a34a;
  transform: translateY(-2px);
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background-color: transparent;
  color: #e2e8f0;
  border: 1px solid #475569;
  padding: 0.8rem 1.8rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.action-btn:not(.play):hover {
  background-color: #1e293b;
  border-color: #94a3b8;
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* (Garde tes media queries pour le mobile ici...) */

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* --- MOBILE RESPONSIVE --- */
@media screen and (max-width: 900px) {
  .modal-body {
    grid-template-columns: 1fr; 
    gap: 2.5rem;
    overflow-y: auto; /* Enable full modal scrolling on small screens */
  }
  
  .modal-content {
    padding: 2.5rem;
    width: 95%;
    max-height: 95vh;
  }
  
  .modal-details {
    overflow: visible; /* Disable inner scrolling */
    height: auto;
  }
  
  .modal-details-inner {
    overflow: visible;
    padding-right: 0;
    flex: none;
  }
  
  .modal-details h2 {
    font-size: 2rem;
  }
  
  .action-links {
    position: relative;
    padding-top: 1.5rem;
    margin-top: 2rem;
  }
}

@media screen and (max-width: 600px) {
  .projects-header {
    flex-direction: column; 
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .filter-group {
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr; 
    gap: 2rem;
  }
}
</style>