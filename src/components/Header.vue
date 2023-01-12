<template>
  <header class="container">
    <router-link to="/">Vuejs App</router-link>

    <div>
      <p>{{ name }}</p>

      <button @click.prevent="handleLogout">Sair</button>
    </div>
  </header>
</template>

<script setup>
import UsersService from "../services/UsersService";
import { useStore } from "vuex";

const { state } = useStore();

const name = state.user.name;

async function handleLogout() {
  UsersService.signOut();
}
</script>

<style scoped lang="scss">
header {
  padding: 1rem 0;
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
    width: 32px;
    border-radius: 8px;
  }

  p {
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
</style>
