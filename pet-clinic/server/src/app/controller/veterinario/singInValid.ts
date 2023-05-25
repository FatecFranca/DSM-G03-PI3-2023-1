import { validCelular } from "../validateFunctions/celular";
import { validCPF } from "../validateFunctions/cpf";
import { validEmail } from "../validateFunctions/email";
import { validNome } from "../validateFunctions/nome";
import { validSenha } from "../validateFunctions/senha";

interface Veterinario {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  crmv: string;
  celular: string;
}

interface Valid {
  data: object;
  valid: boolean;
}

export default (veterinario: Veterinario): Valid => {
  if (!validCelular(veterinario.celular)) {
    return { data: { err: "celular inválido" }, valid: false };
  } else if (!validNome(veterinario.nome)) {
    return { data: { err: "nome inválido" }, valid: false };
  } else if (!validEmail(veterinario.email)) {
    return { data: { err: "email inválido" }, valid: false };
  } else if (!validSenha(veterinario.senha)) {
    return { data: { err: "senha inválida" }, valid: false };
  } else if (!validCPF(veterinario.cpf)) {
    return { data: { err: "CPF inválido" }, valid: false };
  }

  return {
    data: veterinario,
    valid: true,
  };
};
