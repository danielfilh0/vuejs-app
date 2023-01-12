<template>
  <div class="lg-container">
    <FormCard>
      <div class="card">
        <h1>Editar dados de login</h1>

        <form @submit.prevent="handleEditAuth">
          <div class="wrapper two-grids">
            <InputItem
              v-model="editAuthForm.email"
              id="email"
              type="email"
              label="Novo email"
            />
            <InputItem
              v-model="editAuthForm.password"
              id="password"
              type="password"
              label="Nova senha"
            />
          </div>

          <Button type="submit">Salvar</Button>
        </form>
      </div>
    </FormCard>

    <FormCard>
      <div class="card">
        <h1>Editar dados de perfil</h1>

        <form @submit.prevent="handleEditProfile">
          <div class="wrapper two-grids">
            <div>
              <InputItem
                v-model="editProfileForm.name"
                id="name"
                type="text"
                label="Nome"
              />
              <InputItem
                v-model="editProfileForm.cpf"
                id="cpf"
                type="text"
                label="CPF"
              />
              <InputItem
                v-model="editProfileForm.pis"
                id="pis"
                type="text"
                label="PIS/PASEP"
              />
            </div>
          </div>

          <div class="wrapper three-grids">
            <h3>Dados de endereço</h3>
            <InputItem
              v-model="editProfileForm.country"
              type="text"
              id="country"
              label="País"
            />
            <InputItem
              v-model="editProfileForm.cep"
              type="text"
              id="cep"
              label="CEP"
            />
            <InputItem
              v-model="editProfileForm.street"
              type="text"
              id="street"
              label="Endereço"
            />
            <InputItem
              v-model="editProfileForm.number"
              type="number"
              id="number"
              label="Número"
            />
            <InputItem
              v-model="editProfileForm.state"
              type="text"
              id="state"
              label="Estado"
            />
            <InputItem
              v-model="editProfileForm.city"
              type="text"
              id="city"
              label="Município"
            />
            <InputItem
              v-model="editProfileForm.complement"
              type="text"
              id="complement"
              label="Complemento"
            />
          </div>
          <Button type="submit">Editar</Button>
        </form>
      </div>
    </FormCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

import FormCard from "../components/FormCard.vue";
import InputItem from "../components/InputItem.vue";
import Button from "../components/Button.vue";

import UsersService from "../services/UsersService";

const { state, commit } = useStore();

const user = state.user;

const editAuthForm = ref({
  email: "",
  password: "",
});

const editProfileForm = ref({
  name: user.name,
  cpf: user.cpf || "",
  pis: user.pis || "",
  country: user.country || "",
  cep: user.cep || "",
  street: user.street || "",
  number: user.number || "",
  state: user.state || "",
  city: user.city || "",
  complement: user.complement || "",
});

async function handleEditAuth() {
  const updatedUser = await UsersService.updateInAuth(
    user.uid,
    editAuthForm.value
  );
  commit("SET_USER", { ...user, ...updatedUser });
}

async function handleEditProfile() {
  const updatedUser = await UsersService.updateInDb(
    user.uid,
    editProfileForm.value
  );

  commit("SET_USER", updatedUser);
}
</script>

<style scoped lang="scss">
.lg-container {
  margin: 1rem auto;
  max-width: 50rem;
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}
</style>
