<template>
  <main class="lg-container">
    <FormCard>
      <div class="card">
        <h1>Editar dados de perfil</h1>
        <form @submit.prevent="handleSubmit">
          <div class="wrapper two-grids">
            <div>
              <InputItem
                v-model="editForm.name"
                id="name"
                type="text"
                label="Nome"
              />
              <InputItem
                v-model="editForm.cpf"
                id="cpf"
                type="text"
                label="CPF"
              />
              <InputItem
                v-model="editForm.pis"
                id="pis"
                type="text"
                label="PIS/PASEP"
              />
            </div>
          </div>

          <div class="wrapper three-grids">
            <h3>Dados de endereço</h3>
            <InputItem
              v-model="editForm.country"
              type="text"
              id="country"
              label="País"
            />
            <InputItem
              v-model="editForm.cep"
              type="text"
              id="cep"
              label="CEP"
            />
            <InputItem
              v-model="editForm.street"
              type="text"
              id="street"
              label="Endereço"
            />
            <InputItem
              v-model="editForm.number"
              type="number"
              id="number"
              label="Número"
            />
            <InputItem
              v-model="editForm.state"
              type="text"
              id="state"
              label="Estado"
            />
            <InputItem
              v-model="editForm.city"
              type="text"
              id="city"
              label="Município"
            />
            <InputItem
              v-model="editForm.complement"
              type="text"
              id="complement"
              label="Complemento"
            />
          </div>
          <Button type="submit">Editar</Button>
        </form>
      </div>
    </FormCard>
  </main>
</template>

<script setup>
import { ref } from "vue";

import FormCard from "../components/FormCard.vue";
import InputItem from "../components/InputItem.vue";
import Button from "../components/Button.vue";

const editForm = ref({
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

function handleSubmit() {
  console.log(editForm.value);
}
</script>

<style scoped lang="scss">
.lg-container {
  margin: 1rem auto;
  max-width: 50rem;
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
}
</style>
