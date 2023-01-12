import { openToast } from "../libs/toast";

const firebaseErrors = [
  { "auth/email-already-in-use": "O email já existe." },
  { "auth/invalid-email": "O email não é válido." },
  { "auth/user-not-found": "Usuário não encontrado." },
  { "auth/operation-not-allowed": "Operação não permitida." },
  { "auth/weak-password": "Senha fraca." },
  { "auth/wrong-password": "Senha incorreta." },
  { "auth/account-exists-with-different-credential": "O email já existe." },
  {
    "auth/requires-recent-login": "Requer login recente. Faça login novamente.",
  },
];

export function getError(error) {
  const { name, message } = error;

  let result;

  if (name === "FirebaseError") {
    result = firebaseErrors.find((error) => {
      for (const prop in error) {
        if (message.includes(prop)) {
          return error[prop];
        }
      }
      return false;
    });
    return result ? Object.values(result)[0] : "Erro desconhecido.";
  }

  result = message;

  return result;
}

export function dispatchError(error) {
  const caughtError = getError(error);

  openToast({ message: caughtError, type: "error", position: "top-right" });
}
