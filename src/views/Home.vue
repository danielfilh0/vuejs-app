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

            <p>{{ user.name }}</p>
          </li>

          <li>
            <p>Email</p>

            <p>{{ user.email }}</p>
          </li>

          <li>
            <p>CPF</p>

            <p>{{ user.cpf || "-" }}</p>
          </li>

          <li>
            <p>PIS</p>

            <p>{{ user.pis || "-" }}</p>
          </li>

          <li>
            <p>CEP</p>

            <p>{{ user.cep || "-" }}</p>
          </li>

          <li>
            <p>Endereço</p>

            <p>{{ address }}</p>
          </li>

          <li>
            <p>Complemento</p>

            <p>{{ user.complement || "-" }}</p>
          </li>

          <li>
            <p>Cidade</p>

            <p>{{ user.city || "-" }}</p>
          </li>

          <li>
            <p>Estado</p>

            <p>{{ user.state || "-" }}</p>
          </li>

          <li>
            <p>País</p>

            <p>{{ user.country || "-" }}</p>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const { state } = useStore();

const user = state.user;

const address =
  user.street && user.number ? `${user.street}, ${user.number}` : "-";
</script>

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
    transition: 0.2s;

    &:hover {
      background-color: var(--primary-color);
      border-color: var(--primary-color);
    }
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
