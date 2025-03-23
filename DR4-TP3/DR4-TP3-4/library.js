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

function ordenarCrescente(array) {
    array.sort((a, b) => a - b);
    alert(array);
}

function ordenarDecrescente(array) {
    array.sort((a, b) => b - a);
    alert(array);
}

// -----------------------------------------------------------

function ordenarCrescenteTexto(array) {
    array.sort();
    alert(array);
}

function ordenarDecrescenteTexto(array) {
    array.sort().reverse();
    alert(array);
}

// -----------------------------------------------------------

