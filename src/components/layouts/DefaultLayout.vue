<template>
  <div v-if="state.user">
    <Header />

    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import Header from "../Header.vue";
import { useStore } from "vuex";

const { state } = useStore();
</script>
