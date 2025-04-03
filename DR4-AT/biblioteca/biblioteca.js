function validarCancelar(valor) {
  if (valor === null) { 
    const confirmacao = confirm("Você tem certeza que deseja cancelar?");
    if (confirmacao) {
      alert("Programa encerrado.");
      return false;
    }
    return true;
  }
  return true;
}

function validarVazio(valor) {
  if (valor === null) return false;
  if (valor.trim() === "") {
    alert("Invalido! Você digitou um valor vazio.");
    return false;
  }
  return true;
}

function validarNumero(valor) {
  if (!validarVazio(valor)) return false;
  valor = valor.replace(",", ".");
  if (isNaN(valor)) {
    alert("O programa espera um numero como entrada.");
    return false;
  }
  return true;
}

function validarNumeroInteiro(valor) {
  if (!validarNumero(valor)) return false
  valor = Number(valor);
  if (!Number.isInteger(valor)) {
    alert("O programa espera um numero inteiro como entrada.");
    return false;
  }
  return true;
}

function validarNumeroInteiroPositivo(valor) {
  if (!validarNumeroInteiro(valor)) return false
  if (valor < 0) {
    alert("O programa espera um numero inteiro positivo como entrada.");
    return false;
  }
  return true;
}

function limitarNumeroDaEntrada(num, min = 1, max = 3) {
  if(num > max || num < min) {
    alert("A entrada deve ser um numero entre ${min} e ${max}")
    return false
  }
  return true
}

function validarAnoBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

function verificarFormatoArray(item) {
  if (typeof item !== "object" || !item.autor || !item.titulo || !item.isbn) {
    throw new Error(
      'Invalido! o item deve ter as propriedades: "Autor", "Titulo" e "Isbn".'
    );
  }
}

function validarStringApenasNumero(entrada) {
  const regex = /\d/;
  if(!regex.test(entrada)){
      alert("Entrada invalida! O programa espera uma string apenas de numeros.")
      return false
  }
  return true
}

function validarStringApenasLetras(entrada) {
  const regex = /\d/;
  if(regex.test(entrada)){
      alert("Entrada invalida! O programa espera uma string apenas de letras.")
      return false
  }
  return true
}

function removerAcentos(entrada) {
  return entrada.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}