<template>
  <button class="button" :type="type" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  type: {
    default: "button",
    type: String,
  },
  disabled: {
    default: false,
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.button {
  padding: 0.5rem 0;
  background: var(--primary-color);
  color: var(--white-color);
  border: none;
  border-radius: 8px;
  transition: 0.2s;

  &:not(.button[disabled]) {
    &:hover,
    &:focus {
      box-shadow: 0 0 0 2px var(--gray-200-color);
    }
  }

  &[disabled] {
    background: var(--gray-600-color);
    cursor: not-allowed;
  }
}
</style>
