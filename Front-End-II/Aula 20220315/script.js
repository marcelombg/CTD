let formulario = document.querySelector('form');

formulario.addEventListener('onsubmit', function(event){
    console.log ('Voce clicou em submit para envio do formulário');

    event.preventDefault();
})

let p1 = document.querySelector('p');

p1.addEventListener('mouseover', function(event){
    console.log ('Voce passou o mouse!');
    
    p1.style.border = "1px"
    
})

let p2 = document.querySelector('p');

p2.addEventListener('mouseout', function(event){
    console.log ('Voce tirou o mouse!');

    p2.style.border = "0px"

})

let meuInput = document.querySelector('#meuInput');

meuInput.onkeydown = function(){
    
    meuInput.style.border = "1px solid red";
}

