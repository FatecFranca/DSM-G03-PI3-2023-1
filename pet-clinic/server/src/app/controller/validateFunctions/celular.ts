export const validCelular = (celular: string): boolean => {
  const celularLimpo = celular.replace(/\D/g, "");

  if (celularLimpo.length !== 11) {
    return false;
  }

  if (!/^\d+$/.test(celularLimpo)) {
    return false;
  }

  return true;
};
