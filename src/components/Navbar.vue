<script>
import { RouterLink, RouterView } from 'vue-router'
import { useLoggedInStore } from '@/stores/loggedIn'

export default {
    setup() {
        const isLoggedIn = useLoggedInStore();
        return { isLoggedIn }
    },
    methods: {
        logout() {
            this.isLoggedIn.setLoggedOut();
            this.$router.push('/login')

        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
              <RouterLink to="/todo">Todo</RouterLink>
            </div>
            <button @click="logout()" class="btn btn-danger my-2 my-sm-0">Logout</button> 
        </div>
    </nav>
</template>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
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
  padding: .3rem 1rem;
  border-left: 1px solid var(--color-border);
  font-size: 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 2rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>