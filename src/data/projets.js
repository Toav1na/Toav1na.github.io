// src/data/projets.js

export const projetsData = [
  {
    id: 1,
    type: 'scolaire',
    title: 'Qwirkle',
    // On met à jour tes vraies technos !
    tags: ['PHP', 'JavaScript', 'Three.js', 'Android Studio'],
    competences: ['C1 (Développement)', 'C2 (Optimisation)', 'C5 (Gestion de projet)', 'C6 (Travail d\'équipe)'],
    imgBase: './assets/images/projects-imgs/qwirkle/qwirkle-logo.png',
    imgHover: './assets/images/projects-imgs/qwirkle/qwirkle-lobby.png',
    gallery: [
      './assets/images/projects-imgs/qwirkle/qwirkle-lobby.png',
      './assets/images/projects-imgs/qwirkle/qwirkle-game.png',
      './assets/images/projects-imgs/qwirkle/qwirkle-boite.png'
    ],
    descFull: "Développement d'une plateforme web et d'une application mobile (Android) permettant de jouer au Qwirkle classique, Qwirkle Cube et Qwirkle 3D (réalisé avec Three.js). Le jeu propose un mode multijoueur en ligne intégrant un système de matchmaking et de rangs, ainsi qu'un mode solo contre une IA disposant de trois niveaux de difficulté (aléatoire, optimisation de score, et anticipation stratégique). Le projet à été réalisé en équipe de 7 personnes dont 165 heures par personnes (soit 1155 heures au total) sur une période de 8 mois, avec une gestion de projet agile (sprints, réunions quotidiennes, rétrospectives) et une utilisation intensive de Git pour la collaboration et le contrôle de version.",
    links: [
      { 
        label: 'Jouer en ligne', 
        url: 'https://qwirkle.maximerocher.fr', 
        // L'icône du triangle "Play" plein
        icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`,
        isPlayButton: true 
      },
      { 
        label: 'Code source', 
        url: 'https://github.com/Toav1na/qwirkle', 
        icon: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
      }
    ]
  },
  {
    id: 2,
    type: 'personnel',
    title: 'Ciderer (Apple Music)',
    tags: ['Node.js', 'WebSockets', 'MusicKit.js'],
    competences: ['C1 (Développement)', 'C3 (Administration/Réseau)'],
    imgBase: './assets/images/projects-imgs/ciderer/ciderer-logo.png',
    imgHover: './assets/images/projects-imgs/ciderer/cider-player.png',
    gallery: [
      './assets/images/projects-imgs/ciderer/cider-player.png',
      './assets/images/projects-imgs/ciderer/cider-remote.png'
    ],
    descFull: "Création d'un écosystème complet (Lecteur Web PC + Télécommande iPad) pour contrôler Apple Music à distance. J'ai implémenté un serveur relais en Node.js utilisant les WebSockets pour une synchronisation bidirectionnelle en temps réel à la milliseconde. Le projet intègre également un Discord RPC avancé et contourne les limites d'API d'Apple (Rate Limiting) via un système de mise en cache personnalisé.",
    links: [
      { label: 'GitHub', url: 'https://github.com/Toav1na/ciderer', icon: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>` }
    ]
  },
  {
    id: 3,
    type: 'scolaire',
    title: 'DressGuize (SAÉ 1.06)',
    tags: ['Économie', 'RSE', 'Analyse SWOT'],
    competences: ['C4 (Gestion des données)', 'C5 (Conduite de projet)'],
    imgBase: './assets/images/projects-imgs/DressGuiz/DG-logo.png',
    imgHover: './assets/images/projects-imgs/DressGuiz/DG-site.png',
    gallery: [
      './assets/images/projects-imgs/DressGuiz/DG-site.png',
      './assets/images/projects-imgs/DressGuiz/screenSWOT1.png',
      './assets/images/projects-imgs/DressGuiz/screenSWOT2.png'
    ],
    descFull: "Étude économique et écologique d'une entreprise fictive de location de déguisements opérant en concurrence monopolistique. Nous avons défini une démarche RSE stricte, incluant l'utilisation de costumes composés à 50% de plastique recyclé et l'analyse de notre empreinte carbone (transport, nettoyage, serveurs). Une analyse SWOT complète a été réalisée pour identifier nos opportunités face à la digitalisation du marché.",
    links: []
  },
  {
    id: 4,
    type: 'scolaire',
    title: 'Blokus Duo',
    tags: ['C++', 'IA', 'Jeux de plateau'],
    competences: ['C1 (Développement)', 'C2 (Optimisation)'],
    imgBase: './assets/images/projects-imgs/blokusDuo/BD-case.jpg',
    imgHover: './assets/images/projects-imgs/blokusDuo/BD-game.png',
    gallery: [
      './assets/images/projects-imgs/blokusDuo/BD-game.png',
      './assets/images/projects-imgs/blokusDuo/BD-case.jpg'
    ],
    descFull: "Adaptation numérique du jeu Blokus Duo (plateau de 14x14) jouable à deux ou contre une Intelligence Artificielle. Le projet intègre la validation des règles de placement (contact uniquement par les coins) et un système de personnalisation (thèmes, taille du plateau dynamique, génération de pièces aléatoires). Un système de sauvegarde de parties et un classement des meilleurs scores ont été développés.",
    links: []
  },
  {
    id: 5,
    type: 'scolaire',
    title: 'Gestion des Stages',
    tags: ['C', 'Allocation dynamique', 'Pointeurs'],
    competences: ['C1 (Développement)', 'C4 (Gestion de données)'],
    // On met ton tout nouveau logo comme image de base (la carte au repos)
    imgBase: './assets/images/projects-imgs/GestionStageSAE/stages-logo-sober.png',
    // L'image qui s'affiche au survol
    imgHover: './assets/images/projects-imgs/GestionStageSAE/screenStart.png',
    // Les images qui s'afficheront dans la galerie de la modale
    gallery: [
      './assets/images/projects-imgs/GestionStageSAE/screenStart.png',
      './assets/images/projects-imgs/GestionStageSAE/screen_jury.png'
    ],
    descFull: "Développement d'une application de gestion des stages en langage C. Ce projet de première année de BUT s'est concentré sur la gestion de la mémoire, l'utilisation avancée des pointeurs et l'allocation dynamique pour stocker et manipuler efficacement les données des étudiants et des entreprises.",
    links: []
  }
];