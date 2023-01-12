function getOnlyNumbers(number) {
  if (typeof number === "string") {
    return number.replace(/\D|\s/g, "");
  }
  return "";
}

export function formatCpf(cpf) {
  if (typeof cpf === "string") {
    cpf = getOnlyNumbers(cpf);
    cpf = cpf.substring(0, 11);
    cpf = cpf.replace(/(.{3})(.{1})/, "$1.$2");
    cpf = cpf.replace(/(.{7})(.{1})/, "$1.$2");
    cpf = cpf.replace(/(.{11})(.{1})/, "$1-$2");
    return cpf;
  }
  return "";
}

export function formatCep(cep) {
  if (typeof cep === "string") {
    cep = getOnlyNumbers(cep);
    cep = cep.substring(0, 8);
    cep = cep.replace(/(.{2})(.{1})/, "$1.$2");
    cep = cep.replace(/(.{6})(.{1})/, "$1-$2");
    return cep;
  }
  return "";
}

export function formatPis(pis) {
  if (typeof pis === "string") {
    pis = pis.replace(/\D/g, "");
    pis = pis.replace(/^(\d{3})(\d)/, "$1.$2");
    pis = pis.replace(/^(\d{3})\.(\d{5})(\d)/, "$1.$2.$3");
    pis = pis.replace(/(\d{3})\.(\d{5})\.(\d{2})(\d)/, "$1.$2.$3.$4");
    return pis;
  }
  return "";
}
