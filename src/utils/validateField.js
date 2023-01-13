import isEmailValid from "./isEmailValid";

export function validateEmailField(email) {
  if (email.length && isEmailValid(email)) return true;

  return false;
}

export function validateEmptyEmailField(email) {
  if (!email.length) return true;

  return validateEmailField(email);
}

export function validatePasswordField(password) {
  if (password.length > 6) return true;

  return false;
}

export function validateEmptyPasswordField(password) {
  if (!password.length) return true;

  return validatePasswordField(password);
}

export function validateFieldLength(field) {
  if (field.length) return true;

  return false;
}
