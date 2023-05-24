import { validCPF } from "../validateFunctions/cpf";
import { validSenha } from "../validateFunctions/senha";
import { validEmail } from "../validateFunctions/email";
import { validNome } from "../validateFunctions/nome";
import { validCEP } from "../validateFunctions/cep";
interface endereco {
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

interface Cliente {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  endereco: endereco;
}

interface Valid {
  data: object;
  valid: boolean;
}

export default (cliente: Cliente): Valid => {
  if (!validNome(cliente.nome)) {
    return { data: { err: "nome inválido" }, valid: false };
  } else if (!validEmail(cliente.email)) {
    return { data: { err: "email inválido" }, valid: false };
  } else if (!validSenha(cliente.senha)) {
    return { data: { err: "senha inválida" }, valid: false };
  } else if (!validCPF(cliente.cpf)) {
    return { data: { err: "CPF inválido" }, valid: false };
  } else if (!validCEP(cliente.endereco.cep)) {
    return { data: { err: "CEP inválido" }, valid: false };
  }

  return {
    data: cliente,
    valid: true,
  };
};
