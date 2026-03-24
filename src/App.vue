<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isMenuOpen = ref(false)
const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu = () => { isMenuOpen.value = false }

const isDarkMode = ref(false)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})
</script>

<template>
  <header class="header-wrapper">
    <nav class="pill-nav" :class="{ 'is-open': isMenuOpen }">
      
      <div class="logo">
        <RouterLink to="/" @click="closeMenu" class="logo-link">
          <img :src="isDarkMode ? './assets/images/logo-theme-sombre.png' : './assets/images/logo-theme-claire.png'" alt="Logo TR" class="logo-img">
        </RouterLink>
      </div>

      <div class="nav-links">
        <RouterLink to="/" class="nav-link" @click="closeMenu">À PROPOS</RouterLink>
        <RouterLink to="/scolarite" class="nav-link" @click="closeMenu">SCOLARITÉ</RouterLink>
        <RouterLink to="/passions" class="nav-link" @click="closeMenu">OCCUPASSIONS</RouterLink>
        <RouterLink to="/projets" class="nav-link" @click="closeMenu">PROJETS</RouterLink>
        <RouterLink to="/contact" class="nav-link" @click="closeMenu">CONTACT</RouterLink>
      </div>

      <div class="nav-icons">
        <button @click="toggleTheme" class="icon-btn theme-toggle" title="Changer le thème">
          <svg v-if="isDarkMode" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          <svg v-else viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </button>

        <RouterLink to="/contact" class="icon-btn" title="Contact" @click="closeMenu">
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </RouterLink>
        <a href="https://github.com/Toav1na" target="_blank" class="icon-btn" title="GitHub">
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="https://www.linkedin.com/in/toavina-randrianatrehina-6b150b365/" target="_blank" class="icon-btn" title="LinkedIn">
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
      </div>

      <button class="menu-toggle" :class="{ 'is-active': isMenuOpen }" @click="toggleMenu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </header>

  <main class="content">
    <RouterView />
  </main>

  <footer class="site-footer">
    <div class="footer-content">
      <p>© 2026 Toavina Randrianatrehina. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<style scoped>
.header-wrapper {
  position: fixed;
  top: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1000;
  padding: 0 20px;
}

.pill-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1050px;
  background-color: var(--nav-bg); 
  border: 1px solid var(--nav-border); 
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px); 
  padding: 0.7rem 2rem; 
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

/* --- LE STYLE DU LOGO --- */
.logo-link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.logo-img {
  width: 42px; 
  height: 42px;
  object-fit: cover; 
  border-radius: 50%; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.08);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-light);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.nav-link:hover, .router-link-active {
  color: var(--color-olive);
}

.nav-icons {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.icon-btn {
  color: var(--text-light);
  transition: all 0.2s ease;
  display: flex;
}

.icon-btn:hover {
  color: var(--color-olive);
  transform: translateY(-2px);
}

/* Le bouton spécifique pour le thème */
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  outline: none;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.menu-toggle span {
  width: 100%;
  height: 2px;
  background-color: var(--text-main);
  transition: all 0.3s ease;
}

.content {
  flex: 1;
  width: 100%;
  padding-top: 150px;
  padding-bottom: 3rem;
  padding-left: 20px;
  padding-right: 20px;
}

/* --- LE STYLE DU FOOTER --- */
.site-footer {
  width: 100%;
  padding: 2.5rem 20px;
  text-align: center;
  border-top: 1px solid var(--nav-border);
  background-color: var(--bg-beige);
  position: relative;
  z-index: 10;
  margin-top: auto; 
}

.footer-content p {
  color: var(--text-light);
  font-size: 0.9rem;
  margin: 0.4rem 0;
}

.footer-tagline {
  font-style: italic;
}

.footer-tagline span {
  color: var(--color-olive);
  margin: 0 0.5rem;
  font-size: 1.1rem;
}

@media screen and (max-width: 850px) {
  .nav-links, .nav-icons { display: none; }
  .menu-toggle { display: flex; }

  .menu-toggle.is-active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .menu-toggle.is-active span:nth-child(2) { opacity: 0; }
  .menu-toggle.is-active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  .pill-nav.is-open {
    flex-direction: column;
    border-radius: 20px;
    padding: 1.5rem;
    gap: 2rem;
    background-color: var(--nav-bg); 
  }

  .pill-nav.is-open .nav-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .pill-nav.is-open .nav-icons {
    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    padding-top: 1rem;
    border-top: 1px solid var(--nav-border);
  }
}
</style>