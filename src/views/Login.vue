<template>
  <div class="sm-container">
    <FormCard>
      <div class="card">
        <h1>Olá visitante, seja bem-vindo!</h1>
        <form>
          <InputItem v-model="email" id="email" type="email" label="Email" />
          <InputItem
            v-model="password"
            id="password"
            type="password"
            label="Senha"
          />
          <button type="submit">Entrar</button>
        </form>

        <p>
          Ainda não tem uma conta?
          <router-link to="/sign-up">Registre-se</router-link>
        </p>
      </div>
    </FormCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import FormCard from "../components/FormCard.vue";
import InputItem from "../components/InputItem.vue";

const email = ref("");
const password = ref("");
</script>
