var btn = document.querySelector("#send");

btn.addEventListener("click", function(e){

e.preventDefault();

var name = document.querySelector("#name");

var texto = name.value;

console.log(texto);

var arrayFilmes = texto.split(";");

console.log(arrayFilmes);

})

