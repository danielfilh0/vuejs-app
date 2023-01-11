<template>
  <header class="container">
    <router-link to="/">Vuejs App</router-link>

    <div>
      <p>Daniel Filho</p>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    font-weight: 700;
    font-size: 1.25rem;

    &:focus {
      box-shadow: none;
    }
  }

  img {
    width: 32px;
    border-radius: 8px;
  }

  p {
    font-weight: 700;
  }
}
</style>
