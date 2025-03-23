// ------------------------------------------------------------

function tamanhoMaximo(item, num) { 
    return item.length < num ? item : alert(`o item ${item} tem mais de ${num} caracteres`);

}

function tamanhoMinimo(item, num) {
    return item.length < num ? alert(`o item ${item} tem menos de ${num} caracteres`) : item;
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

function corrigirNome(nome) {
    // Isso faz com que qualquer quantidade de espaços seguidos seja considerada como um único separador.
    const nomes = nome.trim().split(/\s+/).map(item => item.trim());

    let nomesCorrigidos = nomes.map((item, i) => {
        if(["da", "de", "do"].includes(item.toLowerCase()) && i !== 0) {
            return item.toLowerCase();
        } else {
            return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
        }
    })

    alert(nomesCorrigidos.join(" "));
}

// -----------------------------------------------------------

function adicionarItemNaLista(botao, caixa, lista) {
    botao.addEventListener("click", () => {
        const item = document.getElementById("item").value.trim();
        
        if(item === ""){
            alert("voce deve escrever o nome do item!")
            return
        }

        lista.push(item)
        exibirListaOculta(caixa, item);
        
        document.getElementById("item").value = "";
        console.log(lista)
    })
}

function exibirListaOculta(lista, item) {
    lista.classList.remove("hide")
    lista.innerHTML += `<p>${item}</p>` 
}

// -----------------------------------------------------------