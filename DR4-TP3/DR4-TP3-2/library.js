// ------------------------------------------------------------

function tamanhoMaximo(item, num) { 
    return item.length < num ? true : false
}

function tamanhoMinimo(item, num) {
    return item.length > num ? true : false
}

// -----------------------------------------------------------

function validarCancelar(item) {
    if(item === null) {
        alert("Acao cancelada.");
        return;
    }
    if(item.trim() === "") {
        alert("Voce inseriu um valor vazio. Acao cancelada.");
        return;
    }
    return item
}

// -----------------------------------------------------------

