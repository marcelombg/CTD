//EQUIPE 5
//Marcelo Garofalo
//Joaderson Felipe Silva Barbosa
//Izabella De Paula Leite
//Daniel Costa Santiago Teixeira Martins
//Wesley Tessmann

/*REQUISITOS
- Crie um formulário para capturar um texto inserido.
- Implemente o evento "submit", use-o para salvar o comentário em um array.
- Cada vez que um novo comentário é adicionado, renderize-o em uma tag "p" (remova o código permanente do HTML e torne-o dinâmico).
- Salve constantemente as informações no localStorage, caso a página seja recarregada os comentários devem ser mantidos.*/

let capturarTexto = document.querySelector("#text")
let array = []
let button = document.querySelector("#button");
let comentario =  document.querySelector("#comentario")

button.addEventListener('click', function(){
    array.push(capturarTexto.value)

    comentario.innerHTML += 
`
<p>${capturarTexto.value}</p>
`
for (let index = 0; index < array.length; index++) {
    localStorage.setItem(index, array[index]) }
})

