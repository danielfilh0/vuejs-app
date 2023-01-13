<template>
  <div class="input-file-item">
    <label for="file">
      <img
        class="photo"
        :src="img || getters.photoURL"
        :alt="'Foto de perfil de ' + state.user.name"
      />

      <div
        class="open-input"
        title="Selecionar foto"
        role="button"
        tabindex="0"
      >
        <img src="../assets/images/icons/camera.svg" />
      </div>
    </label>

    <button v-if="img" type="button" class="cancel-input" @click="img = null">
      <img src="../assets/images/icons/close.svg" />
    </button>

    <input
      ref="file"
      @change="handleChangePhoto"
      type="file"
      id="file"
      accept=".png, .jpg, .jpeg"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const { state, getters } = useStore();

const emit = defineEmits(["onChangePhoto"]);

const file = ref(null);

const img = ref(null);

async function handleChangePhoto() {
  const [avatar] = file.value.files;

  const reader = new FileReader();

  reader.readAsDataURL(avatar);
  reader.onload = () => {
    img.value = reader.result;
  };

  emit("onChangePhoto", avatar);
}
</script>

<style scoped lang="scss">
.input-file-item {
  position: relative;
  display: inline-block;
  .photo {
    width: 100px;
    height: 100px;
    display: block;
    object-fit: cover;
    border-radius: 50%;
  }

  input {
    visibility: hidden;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .open-input {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;

    img {
      width: 2rem;
    }
  }

  .cancel-input {
    background: none;
    border: none;
    position: absolute;
    top: 0;
    right: -20px;

    img {
      width: 1.5rem;
    }
  }
}
</style>
