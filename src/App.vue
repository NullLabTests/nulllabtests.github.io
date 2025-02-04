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
        <!-- Vue.js Logo from reliable CDN -->
        <img src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js" alt="Vue.js Logo" class="vue-logo"/>
        <h2>About Us</h2>
        <p>We combine the power of AI, scientific research, and Unix systems to drive innovation in machine learning and neurosymbolic AI. Explore our work and collaborate with us!</p>
      </div>
    </section>

    <section class="images">
      <div class="image-container">
        <div class="image-card">
          <!-- Science image (reliable source) -->
          <img src="https://via.placeholder.com/500x300?text=Science+Image" alt="Science"/>
          <h3>Science</h3>
          <p>Explore the latest in research and scientific development.</p>
        </div>
        <div class="image-card">
          <!-- AI image (reliable source) -->
          <img src="https://via.placeholder.com/500x300?text=AI+Image" alt="AI"/>
          <h3>AI & Machine Learning</h3>
          <p>Building intelligent systems that learn and reason.</p>
        </div>
        <div class="image-card">
          <!-- Unix image (reliable source) -->
          <img src="https://via.placeholder.com/500x300?text=Unix+Image" alt="Unix"/>
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
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

/* Header Section */
header {
  background: url('https://images.unsplash.com/photo-1593642532904-0d6a29b10f3b?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjYwM3wwfDF8c2VhY3J8Mnx8Y29tcGxldGVlZG5ldHxlbnwwfHx8fDE2Nzc2NzEyNjg&ixlib=rb-1.2.1&q=80&w=1080') no-repeat center center/cover;
  height: 50vh;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-content {
  text-align: center;
  padding: 20px;
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
  background-color: #f4f4f4;
  padding: 40px;
  text-align: center;
}

.intro h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.intro .vue-logo {
  width: 150px;
  margin-bottom: 20px;
}

.intro p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Images Section */
.images {
  display: flex;
  justify-content: space-around;
  padding: 40px;
  background-color: #ffffff;
}

.image-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.image-card {
  background-color: #f9f9f9;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 30%;
}

.image-card img {
  width: 100%;
  border-radius: 10px;
}

.image-card h3 {
  margin-top: 15px;
}

.image-card p {
  font-size: 1rem;
  color: #777;
}

/* Footer Section */
footer {
  text-align: center;
  background-color: #333;
  color: white;
  padding: 20px;
  font-size: 0.9rem;
}
</style>

