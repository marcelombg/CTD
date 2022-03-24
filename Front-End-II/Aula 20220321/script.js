let formulario = document.querySelector("form");
formulario.addEventListener("submit", function(event) {
   event.preventDefault()
})

function limita(maximoCaracteres) {
    var elemento = document.getElementById("texto");
    if(elemento.value.length >= maximoCaracteres ) {
        return false;
    }
    else {
        return true;
    }
}

var nome = document.getElementById("nome").value;
console.log(nome); // OpcaoA
var numero = document.getElementById("numero").value;
console.log(numero); // OpcaoB

var elementos = document.getElementsByName("pergunta");
elementos.forEach(function(elemento) {
 console.log(`Elementos: ${elemento.value}`)
 console.log(`Selecionado: ${elemento.checked}`)
})
// Elemento: sim Selecionado: true
// Elemento: nao Selecionado: false

var privacidade = document.getElementById("privacidade");
console.log(`Elementos: ${privacidade.value}`)
console.log(`Selecionado: ${privacidade.checked}`)
// Elementos: privacidade
// Selecionado: false