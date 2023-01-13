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

  > header {
    margin-bottom: 2rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 576px) {
    > header {
      flex-direction: row;
    }
  }

  h1 {
    font-size: 1.125rem;
    font-weight: 600;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 400;
  }

  form {
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .wrapper.two-grids {
    display: flex;
    flex-direction: column;

    > div {
      & + div {
        margin-top: 1rem;
      }
    }
  }

  @media (min-width: 768px) {
    .wrapper.two-grids {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;

      > div {
        & + div {
          margin-top: unset;
        }
      }
    }
  }

  .wrapper.three-grids {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .wrapper.three-grids {
      display: grid;
      grid-template-columns: 100px 200px 1fr 100px;
      align-items: center;
      column-gap: 2rem;

      h3 {
        grid-column: 1 / 5;
      }
    }
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    color: var(--gray-400-color);

    a {
      color: var(--primary-color);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .login-data {
    width: 50%;
  }
}
</style>
