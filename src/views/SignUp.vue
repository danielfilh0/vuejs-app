<template>
  <main class="lg-container">
    <FormCard>
      <div class="card">
        <header>
          <h1>Olá visitante, realize o seu cadastro abaixo.</h1>
        </header>

        <form @submit.prevent="handleCreateUser">
          <div class="wrapper two-grids">
            <div>
              <h3>Dados de login</h3>
              <InputItem
                v-model="signUpForm.email"
                id="email"
                type="email"
                label="Email"
                required
                :rules="[
                  {
                    message: 'Email inválido',
                    validation: validateEmailField,
                  },
                ]"
                @onValidate="handleValidateForm"
              />
              <InputItem
                v-model="signUpForm.password"
                id="password"
                type="password"
                label="Senha"
                required
                :rules="[
                  {
                    message: 'A senha precisa de no mínimo 7 caracteres',
                    validation: validatePasswordField,
                  },
                ]"
                @onValidate="handleValidateForm"
              />
            </div>

            <div>
              <h3>Dados de perfil</h3>
              <InputItem
                v-model="signUpForm.name"
                id="name"
                type="text"
                label="Nome"
                required
                :rules="[
                  {
                    message: 'Nome obrigatório',
                    validation: validateFieldLength,
                  },
                ]"
                @onValidate="handleValidateForm"
              />
              <InputItem
                v-model="signUpForm.cpf"
                id="cpf"
                type="text"
                label="CPF"
              />
              <InputItem
                v-model="signUpForm.pis"
                id="pis"
                type="text"
                label="PIS/PASEP"
              />
            </div>
          </div>

          <div class="wrapper three-grids">
            <h3>Dados de endereço</h3>
            <InputItem
              v-model="signUpForm.country"
              type="text"
              id="country"
              label="País"
            />
            <InputItem
              v-model="signUpForm.cep"
              type="text"
              id="cep"
              label="CEP"
            />
            <InputItem
              v-model="signUpForm.street"
              type="text"
              id="street"
              label="Endereço"
            />
            <InputItem
              v-model="signUpForm.number"
              type="number"
              id="number"
              label="Número"
            />
            <InputItem
              v-model="signUpForm.state"
              type="text"
              id="state"
              label="Estado"
            />
            <InputItem
              v-model="signUpForm.city"
              type="text"
              id="city"
              label="Município"
            />
            <InputItem
              v-model="signUpForm.complement"
              type="text"
              id="complement"
              label="Complemento"
            />
          </div>
          <Button type="submit" :isLoading="isLoading" :disabled="!formIsValid"
            >Cadastrar</Button
          >
        </form>
        <p>
          Já possui uma conta?
          <router-link to="/login">Realizar login</router-link>
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
import { dispatchError } from "../utils/getError";
import {
  validateEmailField,
  validateFieldLength,
  validatePasswordField,
} from "../utils/validateField";

const signUpForm = ref({
  email: "",
  password: "",
  name: "",
  cpf: "",
  pis: "",
  country: "",
  cep: "",
  street: "",
  number: "",
  state: "",
  city: "",
  complement: "",
});
const isLoading = ref(false);
const formIsValid = ref(false);

function handleValidateForm() {
  if (
    !validateEmailField(signUpForm.value.email) ||
    !validateFieldLength(signUpForm.value.name) ||
    !validatePasswordField(signUpForm.value.password)
  ) {
    formIsValid.value = false;
  } else {
    formIsValid.value = true;
  }
}

async function handleCreateUser() {
  try {
    isLoading.value = true;

    await UsersService.signUp(signUpForm.value);
  } catch (err) {
    dispatchError(err);
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped lang="scss">
.lg-container {
  padding: 0 1rem;
  margin: 1rem auto;
  max-width: 50rem;
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
}
</style>
