//EQUIPE 3
//Marcelo Garofalo
//Michel Picozzi
//Erick Pereira Araujo
//Atef Chelaghma
//Rhuam Bello Carneiro
//João Sousa

document.body.innerHTML += `
    <form action="">
        <div>
            <input type="" name="" id="inputTask" placeholder="Nova Tarefa">
            <button id="botao" type="submit">Submit</button>
            <button id="botao" type="reset">Reset</button>
        </div>
    </form> 
    `
    
//acessando campos de entrada e o método preventDefatul
const form = document.querySelector("form");
const inputTask = document.getElementById("inputTask");
const container = document.querySelector("div");

form.addEventListener('submit', executaEvento);

function criaParagrafo(e){
    container.innerHTML +=`
    <p>${e.target.value}</p>
    <p>${e.target.value.length}</p>
    `
}

inputTask.addEventListener('keydown', criaParagrafo);

function executaEvento(e) {
    console.log(`Tipo do Evento: ${e.type}`);
    console.log(inputTask.value);
    e.preventDefault();
    console.log(e.target.value);
}

const mudaCor = document.querySelector("button");

mudaCor.addEventListener('mouseover', mudaCorIn);
function mudaCorIn(event) {
    event.target.style.color = "Yellow"
}

mudaCor.addEventListener('mouseout', tiraCorIn);
function tiraCorIn(event) {
    event.target.style.color = "Black"
}

window.onload = () => alert ('A página foi carregada');

//CÓDIGO RHUAN//
// window.onload = () => {alert('Página terminou de ser carregada! 🚀');
  
//     renderTags('form', document.body);
//     renderTags('input', document.querySelector('form'), 'text');
//     renderTags('input', document.querySelector('form'), 'submit', 'Enviar');
//     renderTags('input', document.querySelector('form'), 'reset', 'Limpar');
//   }
  
//   const renderTags = (tag, parent, attribute, text) => {
//     const createdTag = document.createElement(tag);
    
//     if (attribute) {
//       createdTag.setAttribute('type', attribute);
//     }
  
//     if (text) {
//       const createdText = document.createTextNode(text);
//       createdTag.appendChild(createdText);
//     }
    
//     parent.appendChild(createdTag);
//   }

