import isEmailValid from "./isEmailValid";

export function validateEmailField(email) {
  if (email.length && isEmailValid(email)) return true;

  return false;
}

export function validateFieldLength(field) {
  if (field.length) return true;

  return false;
}

export function validatePasswordField(field) {
  if (field.length > 6) return true;

  return false;
}
