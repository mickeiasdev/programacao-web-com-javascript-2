const str = prompt("Digite uma palavra:");
const max = 10;
const min = 5;

if(maxLength(str, max)) {
    alert(`A palavra é menor que ${max} caracteres`);
} else {
    alert(`A palavra é maior que ${max} caracteres`);
}

if(minLength(str, min)) {
    alert(`A palavra é maior que ${min} caracteres`);
} else {    
    alert(`A palavra é menor que ${min} caracteres`);
}