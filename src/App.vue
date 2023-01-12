<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import router from "./router";
import "./assets/styles/global.scss";
import UsersService from "./services/UsersService";

const defaultLayout = "default";

const { currentRoute } = useRouter();

const { commit } = useStore();

const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
);

async function getUser(auth) {
  commit("SET_IS_LOADING", true);

  if (auth) {
    const user = await UsersService.getByEmail(auth.email);
    commit("SET_USER", user);
    router.push("/");
  } else {
    commit("SET_USER", null);
    router.push("/login");
  }

  commit("SET_IS_LOADING", false);
}

onMounted(() => {
  UsersService.listenLoggedAuth(getUser);
});
</script>
