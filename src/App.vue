<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HeaderView from './components/HeaderView.vue';
</script>

<script>
export default {
  data() {
    return {
      canvasDimensions: {
        height: 500,
        width: 1000
      }
    };
  },
  provide() {
    return {
      canvasDimensions: this.canvasDimensions
    };
  }
};
</script>

<template>
  <header>
    <HeaderView />
  </header>
  <RouterView />
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/fire-heli">Fire Heli</RouterLink>
      <RouterLink to="/graff">Graff</RouterLink>
      <RouterLink to="/streamflow">Streamflow</RouterLink>
      <RouterLink to="/expense-tracker">Expense Tracker</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
