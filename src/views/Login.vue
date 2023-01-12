<template>
  <main class="sm-container">
    <FormCard>
      <div class="card">
        <header>
          <h1>Olá visitante, seja bem-vindo!</h1>
        </header>

        <form @submit.prevent="handleSubmit">
          <InputItem v-model="email" id="email" type="email" label="Email" />
          <InputItem
            v-model="password"
            id="password"
            type="password"
            label="Senha"
          />
          <Button type="submit" :isLoading="isLoading">Entrar</Button>
        </form>

        <p>
          Ainda não tem uma conta?
          <router-link to="/sign-up">Registre-se</router-link>
        </p>
      </div>
    </FormCard>
  </main>
</template>

<script setup>
import { ref } from "vue";

import FormCard from "../components/FormCard.vue";
import InputItem from "../components/InputItem.vue";
import Button from "../components/Button.vue";

import UsersService from "../services/UsersService";

const email = ref("");
const password = ref("");

const isLoading = ref(false);

async function handleSubmit() {
  try {
    isLoading.value = true;

    await UsersService.signIn({
      email: email.value,
      password: password.value,
    });
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped lang="scss">
.sm-container {
  margin: 0 auto;
  max-width: 30rem;
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
}
</style>
