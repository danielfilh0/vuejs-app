<template>
  <Loader v-if="state.isLoading" />

  <div v-if="state.user">
    <Header />

    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

import Header from "../Header.vue";
import Loader from "../Loader.vue";

const { state } = useStore();
</script>

<style></style>
