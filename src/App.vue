<template>
  <div id="app">
    <header>
      <div class="header-content">
        <h1>Null Lab Tests</h1>
        <p>Tinkering. Learning. Innovating.</p>
      </div>
    </header>

    <section class="content">
      <div class="intro">
        <h2>Welcome to the Lab</h2>
        <p>
          Explore our experiments in cyber-security, AI, and Unix tinkering.
          Our goal is to learn by doing—push the limits of technology, one project at a time.
        </p>
        <button @click="toggleAnimation">Enter the Matrix</button>
      </div>
      <transition name="fade">
        <div v-if="showAnimation" class="animation-box">
          <p>System Online. Running diagnostics...</p>
        </div>
      </transition>
    </section>

    <footer>
      <p>&copy; 2025 Null Lab Tests | Built with Vue.js</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showAnimation: false,
    };
  },
  methods: {
    toggleAnimation() {
      this.showAnimation = !this.showAnimation;
    },
  },
};
</script>

<style scoped>
/* Ensure the entire browser pane is black */
html, body {
  margin: 0;
  padding: 0;
  background-color: #000;
  height: 100%;
}

/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Root container styles */
#app {
  background-color: #000; /* Black background */
  color: #00ff00;        /* Neon green text */
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.6;
  min-height: 100vh;
}

/* Header Styles */
header {
  background-color: #111;   /* Very dark grey */
  padding: 40px 20px;
  text-align: center;
  position: relative;
}

.header-content h1 {
  font-size: 3.5rem;
  margin-bottom: 10px;
  text-shadow: 0 0 10px #00ff00;
  animation: glow 2s infinite alternate;
}

.header-content p {
  font-size: 1.5rem;
  text-shadow: 0 0 5px #00ff00;
}

/* Content Section */
.content {
  padding: 40px 20px;
  text-align: center;
}

.intro h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #00ff00;
}

.intro p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 20px auto;
}

/* Button styling */
button {
  padding: 10px 20px;
  background-color: #00ff00;
  color: #000;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #00cc00;
}

/* Animation Box */
.animation-box {
  margin-top: 20px;
  padding: 20px;
  border: 2px solid #00ff00;
  animation: borderPulse 1.5s infinite;
}

/* Footer Styles */
footer {
  background-color: #111;
  padding: 20px;
  text-align: center;
  font-size: 0.9rem;
}

/* Keyframes for glowing text */
@keyframes glow {
  from {
    text-shadow: 0 0 5px #00ff00;
  }
  to {
    text-shadow: 0 0 20px #00ff00;
  }
}

/* Keyframes for pulsing border */
@keyframes borderPulse {
  0% {
    border-color: #00ff00;
  }
  50% {
    border-color: #00cc00;
  }
  100% {
    border-color: #00ff00;
  }
}

/* Fade transition for animation box */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

