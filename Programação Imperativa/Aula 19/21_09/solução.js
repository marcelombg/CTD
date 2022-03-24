const altura = [1.65, 1.80, 1.82, 1.73, 1.50, 1.71, 1.89, 2.03, 1.62, 1.51, 1.78, 1.85, 1.82, 1.20, 2.02];
const genero = ["M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M"];

function alturaMaior(valor) {
    var maiorAltura = altura[0]; // inicializar o valor com a primeira posicao
    for (let i = 0; i < altura.length; i++) { // percorrer o array de altura
        if (altura[i] > maiorAltura) { // comparar
            maiorAltura = altura[i];
        }
    }
    return maiorAltura;
}

function alturaMenor(valor) {
    var menorAltura = altura[0];
    for (let i = 0; i < altura.length; i++) {
        if (altura[i] < menorAltura[i]) {
            menorAltura = altura[i];
        }
    }
    return menorAltura;
}

function mediaMulheres(g, a) {
    var soma = 0;
    var media = 0;
    for (let i = 0; i < genero.length; i++) {
        if (genero[i] === "F") {
            soma += altura[i];
            media++;
        }
    }
    return (soma / media);
}

function qtdeHomens(g) {
    var homens = 0;
    for (let i = 0; i < genero.length; i++) {
        if (genero[i] === "M") {
            homens++;
        }
    }
    return homens;
}

console.log("A Maior Altura é " + alturaMaior(altura) + " Metros.");
console.log("A Menor Altura é " + alturaMenor(altura) + " Metros.");
console.log("A Média de Altura das Mulheres é de " + mediaMulheres(genero, altura).toFixed(2) + " Metros.");
console.log("A Quantidade é de " + qtdeHomens(genero) + " Homens.");
