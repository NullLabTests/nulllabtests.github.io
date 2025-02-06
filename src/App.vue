<template>
  <div id="app">
    <header>
      <div class="header-content">
        <h1>Null Lab: Tinker & Learn</h1>
        <p>Explore, experiment, and push the boundaries of tech.</p>
      </div>
    </header>

    <section class="intro">
      <div class="intro-content">
        <h2>About Null Lab</h2>
        <p>We are a collective of tinkerers, learners, and builders. Dive into AI, Unix, and creative coding with interactive projects.</p>
        <button @click="toggleAnimation">{{ animated ? 'Pause' : 'Animate' }}</button>
      </div>
    </section>

    <section class="interactive">
      <div class="card" v-for="(item, index) in items" :key="index" :class="{ animated: animated }">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </section>

    <footer>
      <p>&copy; 2025 Null Lab | Built with Vue.js</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animated: false,
      items: [
        { title: 'AI & ML', description: 'Build intelligent and adaptive systems.' },
        { title: 'Unix & Systems', description: 'Master the command line and low-level tinkering.' },
        { title: 'Creative Coding', description: 'Explore generative art and interactive web experiences.' }
      ]
    };
  },
  methods: {
    toggleAnimation() {
      this.animated = !this.animated;
    }
  }
};
</script>

<style scoped>
body {
  background-color: #000;
  color: #0f0;
  font-family: 'Courier New', monospace;
  text-align: center;
}

header {
  padding: 40px;
  background-color: #111;
}

button {
  margin-top: 20px;
  background: #0f0;
  color: #000;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.interactive {
  display: flex;
  justify-content: space-around;
  padding: 40px;
}

.card {
  background: #222;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.5s ease;
}

.animated {
  transform: scale(1.1);
}
</style>

