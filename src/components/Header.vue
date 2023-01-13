<template>
  <header class="container">
    <router-link to="/">Vuejs App</router-link>

    <div>
      <img
        :src="getters.photoURL"
        :alt="'Foto de perfil de ' + state.user.name"
      />
      <p>{{ name }}</p>

      <button @click.prevent="handleLogout">Sair</button>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import UsersService from "../services/UsersService";

const { state, getters } = useStore();

const name = computed(() => state.user.name);

async function handleLogout() {
  UsersService.signOut();
}
</script>

<style scoped lang="scss">
header {
  margin-bottom: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    font-weight: 700;
    font-size: 1.25rem;

    &:focus {
      box-shadow: none;
    }
  }

  img {
    margin-right: 1rem;
    width: 32px;
    border-radius: 8px;
  }

  p {
    display: none;
    font-weight: 700;
    margin-right: 1rem;
  }

  button {
    padding: 0.2rem 1rem;
    background: var(--red-color);
    color: var(--white-color);
    border: none;
    border-radius: 8px;
    transition: 0.2s;
  }
}

@media (min-width: 576px) {
  header {
    p {
      display: inline-block;
    }

    img {
      margin-right: unset;
    }
  }
}

@media (min-width: 1024px) {
  header {
    margin-bottom: unset;
  }
}
</style>
