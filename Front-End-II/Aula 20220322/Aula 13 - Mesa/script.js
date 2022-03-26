// Fazendo um atalho pra não escrever tanto no código, no momento de selecionar o ID.
function selectID(id) {
  return getElementById(ID);
}

// (Atalho para ganhar mais velocidade): Criando uma função para verificar se os elementos estão vazios
function empy(input){
  // O irá pegar o valor do input e irá limpar os vazios das extremidades, com o trim
  // Se o valor estiver vazio, irá retornar "true", caso contrário será "false"
   return input.value.trim() === "";
}

// (Atalho para Elemento Error): Função para colocar o erro diretamento no elemento
function errorMessage(message){
  // A mensagem que vem de fora, será inserida diramento no erro do HTML
  errorListUl.innerHTML += "<li>" + message +  "</li>";
}

// Selecionando os IDs
let form = selectID('contato-form');
let nome = selectID('nome');

// Pegando a TAG ul dentro do ID #error-list, para inserir li com os error
let errorListUl = document.querySelector('#error-list ul')

// Seletor somente o errorList
let errorList = selectID('error-list');

form.addEventListener('submit',function(e){

// Para evitar que toda vez, ao clicar no submit, ele gere o mesmo erro fazendo uma lista gigante com o mesmo alerta
// Colocamos uma string vazia, dessa forma toda vez que clicar no submit ele irá limpar o elemento.
// Essa técnica faz com que ele apague e adicione muito rápido e não conseguimos ver.
errorListUl.innerHTML = '';

// Verificando se o campo está vazio (todos estao pegando o atributo "value/name")
  if(empy(nome)){
    errorMessage("Campo <b>nome</b> não preenchido");
  }

  if(empy(email)){
    errorMessage("Campo <b>email</b> não preenchido");
  }

  if(empy(estado)){
    errorMessage("Campo <b>estado</b> não preenchido");
  }

  // Utilizado o textarea
  if(empy(mesagem)){
    errorMessage("Campo <b>mensagem</b> não preenchido");
  }

  // Precisamos verificar se existe algum erro
  // Objetivo é tirar a caixa de alert da tela do usuário caso não tenha nenhum erro

  // Está fazendo um seletor dentro de outro seletor
  // Pegou o "errorListUl", selecionou todos os li

  // Traz a quantidade de elementos que possui caso tenha erro

      if(errorListUl.querySelectorAll('li').length > 0){

        // Previne que ele não faça o envio da página para o backend
        // Vamos fazer o .preventDefault(), rodar somente quando houver erro. 
        // Quando tiver "li" dentro da lista, isso irá impedir enviar dados para o backend. 
        ev.preventDefault();

        // Se houver erro maior que zero, irá acionar o hidden. Elemento vai aparecer.
        errorList.hidden = ''
      } 
})