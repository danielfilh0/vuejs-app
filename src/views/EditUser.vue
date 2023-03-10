<template>
  <div class="lg-container">
    <FormCard>
      <div class="card">
        <header>
          <h1>Editar dados de login</h1>

          <Button
            className="danger"
            :isLoading="isLoadingUserRemoval"
            @click.prevent="handleDeleteUser"
          >
            Remover usuário
          </Button>
        </header>

        <form @submit.prevent="handleEditAuth">
          <div class="wrapper two-grids">
            <InputItem
              v-model="editAuthForm.email"
              id="email"
              type="email"
              label="Novo email"
              :rules="[
                {
                  message: 'Email inválido',
                  validation: validateEmptyEmailField,
                },
              ]"
              @onValidate="handleValidateAuthForm"
            />
            <InputItem
              v-model="editAuthForm.password"
              id="password"
              type="password"
              label="Nova senha"
              :rules="[
                {
                  message: 'A senha precisa de no mínimo 7 caracteres',
                  validation: validateEmptyPasswordField,
                },
              ]"
              @onValidate="handleValidateAuthForm"
            />
          </div>

          <Button
            type="submit"
            :isLoading="isLoadingAuthEditing"
            :disabled="!isAuthFormValid"
          >
            Salvar
          </Button>
        </form>
      </div>
    </FormCard>

    <FormCard>
      <div class="card">
        <header>
          <h1>Editar dados de perfil</h1>
        </header>

        <form @submit.prevent="handleEditProfile">
          <div class="wrapper two-grids">
            <div>
              <PhotoInput @onChangePhoto="handleChangePhoto" />

              <InputItem
                v-model="editProfileForm.name"
                id="name"
                type="text"
                label="Nome"
                :rules="[
                  {
                    message: 'Nome obrigatório',
                    validation: validateFieldLength,
                  },
                ]"
                @onValidate="handleValidateProfileForm"
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
          <Button
            type="submit"
            :isLoading="isLoadingProfileEditing"
            :disabled="!isProfileFormValid"
          >
            Editar
          </Button>
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
import PhotoInput from "../components/PhotoInput.vue";
import Button from "../components/Button.vue";

import UsersService from "../services/UsersService";
import { dispatchError } from "../utils/getError";
import { openToast } from "../libs/toast";
import {
  validateEmailField,
  validatePasswordField,
  validateFieldLength,
  validateEmptyEmailField,
  validateEmptyPasswordField,
} from "../utils/validateField";

const { state, commit } = useStore();

const user = state.user;

const photo = ref(null);

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

const isLoadingAuthEditing = ref(false);
const isLoadingProfileEditing = ref(false);
const isLoadingUserRemoval = ref(false);
const isAuthFormValid = ref(false);
const isProfileFormValid = ref(true);

function handleChangePhoto(event) {
  photo.value = event;
}

async function handleEditAuth() {
  try {
    isLoadingAuthEditing.value = true;

    const updatedEmailAndPassword = await UsersService.updateInAuth(
      user.uid,
      editAuthForm.value
    );

    commit("UPDATE_USER_EMAIL", updatedEmailAndPassword);

    openToast({
      type: "success",
      message: "Os dados de login foram atualizados.",
      position: "top-right",
    });
  } catch (err) {
    dispatchError(err);
  } finally {
    isLoadingAuthEditing.value = false;
  }
}

async function handleEditProfile() {
  try {
    isLoadingProfileEditing.value = true;

    if (photo.value) {
      await UsersService.uploadPhoto(user.uid, photo.value);
      const photoURL = await UsersService.downloadPhoto(user.uid);

      editProfileForm.value.photoURL = photoURL;
    }

    const updatedUser = await UsersService.updateInDb(
      user.uid,
      editProfileForm.value
    );

    commit("UPDATE_USER", updatedUser);

    openToast({
      type: "success",
      message: "Os dados de perfil foram atualizados.",
      position: "top-right",
    });
  } catch (err) {
    dispatchError(err);
  } finally {
    isLoadingProfileEditing.value = false;
  }
}

async function handleDeleteUser() {
  try {
    isLoadingUserRemoval.value = true;

    await UsersService.delete(user.uid);
  } catch (err) {
    dispatchError(err);
  } finally {
    isLoadingUserRemoval.value = false;
  }
}

function handleValidateProfileForm() {
  if (validateFieldLength(editProfileForm.value.name)) {
    isProfileFormValid.value = true;
  } else {
    isProfileFormValid.value = false;
  }
}

function handleValidateAuthForm() {
  if (validateAuthForm(editAuthForm.value)) {
    isAuthFormValid.value = true;
  } else {
    isAuthFormValid.value = false;
  }
}

function validateAuthForm(fields) {
  const { email, password } = fields;

  if (!email.length && !password.length) {
    return false;
  }
  if (validateEmailField(email) && !password.length) {
    return true;
  }
  if (validatePasswordField(password) && !email.length) {
    return true;
  }
  if (validateEmailField(email) && validatePasswordField(password)) {
    return true;
  }

  return false;
}
</script>

<style scoped lang="scss">
.lg-container {
  margin: 1rem auto;
  padding: 0 1rem;
  max-width: 50rem;
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}
</style>
