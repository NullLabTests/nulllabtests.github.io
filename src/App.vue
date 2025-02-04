<template>
  <div id="app">
    <header>
      <div class="header-content">
        <h1>Welcome to Null Lab Tests</h1>
        <p>Your research hub for AI, Science, and Unix development.</p>
      </div>
    </header>

    <section class="intro">
      <div class="intro-content">
        <h2>About Us</h2>
        <p>We combine the power of AI, scientific research, and Unix systems to drive innovation in machine learning and neurosymbolic AI. Explore our work and collaborate with us!</p>
      </div>
    </section>

    <section class="images">
      <div class="image-container">
        <div class="image-card">
          <h3>Science</h3>
          <p>Explore the latest in research and scientific development.</p>
        </div>
        <div class="image-card">
          <h3>AI & Machine Learning</h3>
          <p>Building intelligent systems that learn and reason.</p>
        </div>
        <div class="image-card">
          <h3>Unix & Systems</h3>
          <p>Utilizing Unix to power high-performance computing systems.</p>
        </div>
      </div>
    </section>

    <footer>
      <p>&copy; 2025 Null Lab Tests | Built with Vue.js</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #000000;  /* Black background */
  color: #00ff00;  /* Bright green text */
  font-family: 'Courier New', monospace;  /* Terminal-like font */
  line-height: 1.6;
}

/* Header Section */
header {
  background-color: #1c1c1c;  /* Dark grey header */
  color: #00ff00;  /* Bright green text */
  text-align: center;
  padding: 40px;
}

.header-content h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.header-content p {
  font-size: 1.2rem;
}

/* Introduction Section */
.intro {
  background-color: #111111;  /* Dark background */
  padding: 40px;
  text-align: center;
}

.intro h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #00ff00;
}

.intro p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  color: #00ff00;
}

/* Images Section */
.images {
  display: flex;
  justify-content: space-around;
  padding: 40px;
  background-color: #1c1c1c;  /* Dark grey background */
}

.image-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.image-card {
  background-color: #222222;  /* Slightly lighter grey */
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  width: 30%;
}

.image-card h3 {
  margin-top: 15px;
  color: #00ff00;
}

.image-card p {
  font-size: 1rem;
  color: #00ff00;
}

/* Footer Section */
footer {
  text-align: center;
  background-color: #1c1c1c;
  color: #00ff00;
  padding: 20px;
  font-size: 0.9rem;
}
</style>

