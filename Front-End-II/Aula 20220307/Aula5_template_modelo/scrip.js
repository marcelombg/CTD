const bg = document.querySelector('h1');
const background = document.querySelector('body'); 
const dados = document.querySelectorAll('.dados');

bg.style.color = 'red';

// bg.style.backgroundColor = 'white';

background.style.backgroundColor = 'white';

dados.forEach( elemento => { elemento.classList.add('dadosAlterados')});