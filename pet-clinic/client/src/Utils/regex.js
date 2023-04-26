export const validateNome = new RegExp("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$");

export const validateCpf = new RegExp(/^(\d{3}[\.\-]?){3}\d{2}$|^\d{11}$/);

export const validateEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

export const validatePassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

