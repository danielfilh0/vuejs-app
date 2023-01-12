<template>
  <div class="input-item">
    <label v-if="props.label" :for="id"
      >{{ props.label }} <span v-if="props.required">*</span></label
    >
    <input
      :id="props.id"
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="handleUpdateValue"
      @keyup="handleError"
    />
  </div>
</template>

<script setup>
import isEmailValid from "../utils/isEmailValid";

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
  placeholder: String,
  modelValue: [String, Number],
});

const emit = defineEmits(["update:modelValue", "onError"]);

function handleUpdateValue(event) {
  emit("update:modelValue", event.target.value);
}

// wip
function handleError() {
  if (props.required) {
    if (props.id === "email") {
      emit("onError", isEmailValid(props.modelValue));
    }
  }
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
}
</style>
