<template>
  <div class="input-item">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="updateValue"
    />
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["update:modelValue"]);

defineProps({
  id: String,
  label: {
    default: null,
    type: String,
  },
  type: {
    default: "text",
    type: String,
  },
  placeholder: String,
  modelValue: [String, Number],
});

function updateValue(event) {
  emit("update:modelValue", event.target.value);
}
</script>

<style lang="scss" scoped>
.input-item {
  width: 100%;

  &:focus-within {
    label {
      color: var(--primary-color);
    }

    input {
      border-color: var(--primary-color);
    }
  }

  & + .input-item {
    margin-top: 0.2rem;
  }
}

label {
  display: block;
  margin-bottom: 0.3rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1.3px;
}

input {
  padding: 0 1rem;
  width: inherit;
  height: 3rem;
  background: transparent;
  border: 1px solid var(--gray-200-color);
  border-radius: 8px;
}
</style>
