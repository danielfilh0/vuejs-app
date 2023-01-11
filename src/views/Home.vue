<template>
  <div class="container">
    <main>
      <h1>Informações pessoais</h1>

      <div class="profile-card">
        <header>
          <h2>Perfil</h2>

          <router-link to="/edit-user">Editar</router-link>
        </header>

        <ul>
          <li>
            <p>Nome</p>

            <p>Daniel Filho</p>
          </li>

          <li>
            <p>Email</p>

            <p>danbsilva98@gmail.com</p>
          </li>

          <li>
            <p>CPF</p>

            <p>999.999.999-99</p>
          </li>

          <li>
            <p>Endereço</p>

            <p>Rua Front end developer, 551, Vuejs</p>
          </li>

          <li>
            <p>CEP</p>

            <p>60710321</p>
          </li>

          <li>
            <p>PIS</p>

            <p>999999999</p>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
main {
  padding-bottom: 1rem;

  h1 {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.75rem;
    font-weight: 400;
  }
}

.profile-card {
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 45rem;
  border: 1px solid var(--gray-200-color);
  border-radius: 24px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 400;
  }

  a {
    border: 1px solid var(--gray-200-color);
    padding: 0.5rem 1.5rem;
    border-radius: 8px;
  }

  > header {
    padding: 1rem 3rem;
    border-bottom: 1px solid var(--gray-200-color);
  }

  li {
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid var(--gray-200-color);
    }
  }

  img {
    width: 72px;
    border-radius: 8px;
  }
}
</style>
