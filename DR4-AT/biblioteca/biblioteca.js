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

