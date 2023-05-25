export const validSenha = (senha: string): boolean => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  return regex.test(senha);
};
