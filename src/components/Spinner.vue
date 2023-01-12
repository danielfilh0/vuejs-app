<template>
  <div class="lds-ring" :style="{ width: size + 'px', height: size + 'px' }">
    <div
      v-for="n in 4"
      :key="n"
      :style="{
        width: size * 0.8 + 'px',
        height: size * 0.8 + 'px',
        margin: size * 0.1 + 'px',
        borderWidth: size * 0.1 + 'px',
      }"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  size: {
    default: 32,
    type: Number,
  },
});
</script>

<style scoped lang="scss">
.lds-ring {
  display: inline-block;
  position: relative;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    margin: 8px;
    border-style: solid;
    border-color: var(--white-color);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
