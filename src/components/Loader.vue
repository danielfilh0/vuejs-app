<template>
  <div class="loader">
    <Spinner :size="100" />
  </div>
</template>

<script setup>
import Spinner from "./Spinner.vue";
</script>

<style scoped lang="scss">
.loader {
  width: 100vw;
  height: 100vh;
  inset: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
