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

interface valid {
  data: object;
  valid: boolean;
}

const validSenha = (senha: string): boolean => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  return regex.test(senha);
};

const validEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
};

const validNome = (nome: string): boolean => {
  const regex = /\d/;

  return !regex.test(nome);
};

const validCPF = (cpf: string): boolean => {
  const cpfLimpo = cpf.replace(/\D/g, "");

  if (cpfLimpo.length !== 11) {
    return false;
  }

  if (/^(\d)\1{10}$/.test(cpfLimpo)) {
    return false;
  }

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpfLimpo.charAt(i)) * (10 - i);
  }
  let digito1 = 11 - (soma % 11);
  if (digito1 > 9) {
    digito1 = 0;
  }

  if (parseInt(cpfLimpo.charAt(9)) !== digito1) {
    return false;
  }

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpfLimpo.charAt(i)) * (11 - i);
  }
  let digito2 = 11 - (soma % 11);
  if (digito2 > 9) {
    digito2 = 0;
  }

  if (parseInt(cpfLimpo.charAt(10)) !== digito2) {
    return false;
  }

  return true;
};

const validCEP = (cep: string): boolean => {
  const cepLimpo = cep.replace(/\D/g, "");

  if (cepLimpo.length !== 8) {
    return false;
  }

  return true;
};

export default (cliente: Cliente): valid => {
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
