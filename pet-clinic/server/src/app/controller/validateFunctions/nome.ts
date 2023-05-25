export const validNome = (nome: string): boolean => {
  const regex = /\d/;

  return !regex.test(nome);
};
