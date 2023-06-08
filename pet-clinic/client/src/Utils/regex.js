export const validateText = new RegExp("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$");

export const validateCpf = new RegExp(/^(\d{3}[\.\-]?){3}\d{2}$|^\d{11}$/);

export const validateEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

export const validatePassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

export const validateCep = new RegExp(/^\d{5}-?\d{3}$/);

export const validateNumero = new RegExp(/^[0-9]{1,6}$/);

export const validatetime = new RegExp(/^[0-9]{1,6}$/);

