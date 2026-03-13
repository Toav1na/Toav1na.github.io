<script setup>
import { ref, watch } from 'vue'

const projets = ref([
  {
    id: 1,
    titre: "SAÉ S1.01 – Gestion des stages (Algorithmie)",
    duree: "6 Semaines",
    contexte: "Développement d'une application en langage C répondant à un besoin concret de gestion des stages au sein du département informatique.",
    missions: [
      "Conception des structures de données",
      "Lecture/Écriture de fichiers (persistance)",
      "Gestion des pointeurs et tableaux",
      "Mise en place de tests et traces"
    ],
    resultats: "Application fonctionnelle renforçant les compétences en C et gestion de données complexes.",
    github: "https://github.com/toav1na/SAE1.01",
    images: ["screenStart.png", "screen_jury.png"] // Images dans public/assets/images/
  },
  {
    id: 2,
    titre: "SAÉ S1.06 – Économie durable et numérique",
    duree: "5 Semaines",
    contexte: "Analyse du positionnement économique et écologique d'une entreprise du numérique avec réalisation d'un site vitrine.",
    missions: [
      "Réalisation d'un SWOT (Forces/Faiblesses/Opportunités/Menaces)",
      "Réflexion collective sur l'empreinte carbone",
      "Création d'un site web HTML/CSS",
      "Production d'une vidéo de présentation"
    ],
    resultats: "Analyse complète incluant un site fonctionnel et un dossier économique structuré.",
    links: [
      { label: "Code GitHub", url: "https://github.com/Toav1na/SAE1.06.git", type: 'github' },
      { label: "Dépôt Drive", url: "https://drive.google.com/drive/folders/1e-yXR6kp8mPULbw0foqxitthJnDE5rkz", type: 'drive' }],
    images: ["screenSWOT1.png", "screenSWOT2.png"] // Images dans public/assets/images/
  }
])

const projetOuvert = ref(null)

const toggleProjet = (id) => {
  projetOuvert.value = projetOuvert.value === id ? null : id
}

// --- LOGIQUE LIGHTBOX (Agrandissement d'image) ---
const showModal = ref(false)
const selectedImage = ref('')

const openImage = (imgName) => {
  selectedImage.value = `/assets/images/${imgName}` // On construit le chemin complet
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedImage.value = ''
}

// Optionnel : Fermer avec la touche Échap
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && showModal.value) closeModal()
})

// Empêcher le défilement de la page quand la modale est ouverte
watch(showModal, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

</script>

<template>
  <div class="projets-view">
    <h1 class="page-title">Mes Projets</h1>
    
    <div class="projets-list">
      <div 
        v-for="projet in projets" 
        :key="projet.id" 
        class="projet-item"
        :class="{ active: projetOuvert === projet.id }"
      >
        <button @click="toggleProjet(projet.id)" class="projet-header">
          <span class="projet-titre"><strong>{{ projet.titre }}</strong></span>
          <span class="icon">{{ projetOuvert === projet.id ? '−' : '+' }}</span>
        </button>

        <div v-if="projetOuvert === projet.id" class="projet-details">
          <p class="contexte"><em>{{ projet.contexte }}</em> (Durée : {{ projet.duree }})</p>
          
          <div class="info-section">
            <h4>Missions :</h4>
            <ul>
              <li v-for="mission in projet.missions" :key="mission">{{ mission }}</li>
            </ul>
          </div>

          <div class="info-section">
            <h4>Résultats :</h4>
            <p>{{ projet.resultats }}</p>
          </div>

          <div class="links-container">
            <a v-if="projet.github" :href="projet.github" target="_blank" class="btn-link github">
              <img src="/assets/images/github-mark-white.png" alt="" class="btn-icon">
              GitHub
            </a>
            
            <template v-if="projet.links">
              <a v-for="link in projet.links" :key="link.url" :href="link.url" target="_blank" class="btn-link" :class="link.type">
                <img v-if="link.type === 'github'" src="/assets/images/github-mark-white.png" class="btn-icon">
                <img v-if="link.type === 'drive'" src="/assets/images/Google_Drive_icon_(2020).png" class="btn-icon">
                {{ link.label }}
              </a>
            </template>
          </div>

          <div class="images-preview">
             <p class="img-label">Aperçus (cliquer pour agrandir) :</p>
             <div class="img-grid">
               <img 
                 v-for="img in projet.images" 
                 :key="img" 
                 :src="`/assets/images/${img}`" 
                 alt="Capture projet" 
                 @click="openImage(img)" 
               />
             </div>
          </div>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <button class="modal-close" @click="closeModal">×</button>
        <img :src="selectedImage" alt="Aperçu grand format" class="modal-image" />
      </div>
    </Transition>

  </div>
</template>

<style scoped>
.projets-view {
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  text-align: left;
  
  /* --- LA NOUVELLE BOÎTE OPAQUE --- */
  background-color: var(--card-bg); /* S'adapte au mode clair/sombre */
  padding: 3rem 4rem; /* Un beau padding pour respirer */
  border-radius: 20px; /* Bords arrondis modernes */
  border: 1px solid var(--nav-border);
  backdrop-filter: blur(12px); /* Floute les étoiles en dessous */
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

/* IMPORTANT : Ajoute ce petit fix pour les petits écrans */
@media screen and (max-width: 768px) {
  .projets-view {
    padding: 2rem 1.5rem;
  }
}

.page-title {
  color: var(--color-dark-green);
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.projets-list {
  border-top: 1px solid rgba(46, 70, 0, 0.2);
}

.projet-item {
  border-bottom: 1px solid rgba(46, 70, 0, 0.2);
}

.projet-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0; 
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}

.projet-titre {
  font-size: 1.1rem;
  color: var(--text-main);
  padding-right: 20px; 
}

.projet-details {
  padding: 0 0 2.5rem 0;
  text-align: left; /* On renforce l'alignement à gauche ici aussi */
}

/* --- RE-CENTRAGE DES PUCES --- */
ul {
  padding-left: 1.5rem; /* Espace naturel pour les puces */
  margin: 1rem 0;
  list-style-position: outside; /* Pour que le texte de la puce soit bien aligné */
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.links-container {
  display: flex;
  gap: 12px;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.btn-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: 0.2s;
  border: 1px solid #ddd;
  color: var(--text-main);
}

.btn-link.github {
  background-color: #24292e;
  color: white;
  border: none;
}

.btn-link.drive {
  background-color: var(--card-bg);
  border-color: #4285f4;
}

.btn-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
  color: var(--text-main)
}

.images-preview {
  margin-top: 2.5rem;
}

.img-label {
  font-weight: bold;
  margin-bottom: 1rem;
}

.img-grid {
  display: flex;
  gap: 15px;
}

.img-grid img {
  height: 100px;
  border-radius: 4px;
  border: 1px solid #eee;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.img-grid img:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 70, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  cursor: zoom-out;
}

.modal-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
  border: 4px solid var(--color-lime);
  cursor: default;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  transition: color 0.2s;
}

.modal-close:hover {
  color: var(--color-lime);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>