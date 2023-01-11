<template>
  <slot></slot>
</template>

<style scoped lang="scss">
::v-slotted(.card),
.card {
  width: 100%;
  padding: 2.5rem;
  border: 1px solid var(--gray-200-color);
  border-radius: 24px;

  h1 {
    margin-bottom: 2rem;

    font-size: 1.125rem;
    font-weight: 600;
  }

  form {
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  button {
    padding: 0.5rem 0;
    background: var(--primary-color);
    color: var(--white-color);
    border: none;
    border-radius: 8px;
    transition: 0.2s;

    &:hover,
    &:focus {
      box-shadow: 0 0 0 2px var(--gray-200-color);
    }
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    color: var(--gray-400-color);

    a {
      text-decoration: none;
      color: var(--primary-color);
    }
  }
}
</style>
