<template>
  <div class="input-item">
    <label v-if="props.label" :for="id"
      >{{ props.label }} <span v-if="props.required">*</span></label
    >
    <input
      :class="errors.length && 'error'"
      :id="props.id"
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :maxlength="maxLength"
      @input="handleUpdateValue"
      @keyup="handleKeyUp"
    />
    <p v-if="errors.length" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

import { formatCpf, formatCep, formatPis } from "../utils/masks";

const props = defineProps({
  id: String,
  label: {
    default: null,
    type: String,
  },
  type: {
    default: "text",
    type: String,
  },
  required: {
    default: false,
    type: Boolean,
  },
  maxLength: {
    default: "",
    type: String,
  },
  placeholder: String,
  modelValue: [String, Number],
});

const emit = defineEmits(["update:modelValue", "onValidate"]);

const errors = ref({});

const maxLength = computed(() => {
  if (props.maxLength) return props.maxLength;
  if (props.id === "cpf" || props.id === "pis") return "14";
  if (props.id === "cep") return "10";
  return "";
});

function handleUpdateValue(event) {
  if (props.id === "cpf") {
    emit("update:modelValue", formatCpf(event.target.value));
  } else if (props.id === "cep") {
    emit("update:modelValue", formatCep(event.target.value));
  } else if (props.id === "pis") {
    emit("update:modelValue", formatPis(event.target.value));
  } else {
    emit("update:modelValue", event.target.value);
  }
}

function handleKeyUp() {
  emit("onValidate", { field: props.id, value: props.modelValue });
}
</script>

<style lang="scss" scoped>
.input-item {
  margin-bottom: 0.4rem;
  width: 100%;

  &:focus-within {
    label {
      color: var(--primary-color);
    }

    input {
      border-color: var(--primary-color);
    }
  }
}

label {
  display: block;
  margin-bottom: 0.3rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1.3px;

  span {
    color: var(--primary-color);
  }
}

input {
  padding: 0 1rem;
  width: inherit;
  height: 3rem;
  background: transparent;
  border: 1px solid var(--gray-200-color);
  border-radius: 8px;

  &.error {
    border-color: var(--red-color) !important;
  }
}

p.error {
  text-align: left;
  color: var(--red-color);
}
</style>
