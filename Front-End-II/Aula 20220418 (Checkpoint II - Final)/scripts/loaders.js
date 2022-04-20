function mostrarSpinner() {
    // Selecionamos o corpo. Isso nos ajudará a incorporar nosso spinner
    // dentro de nosso HTML.
    const body = document.querySelector("body");
    
    // Selecionamos o formulário de registro para poder ocultá-lo durante o carregamento
    const form = document.querySelector("form");
    
    // Criamos nosso spinner
    const spinnerContainer = document.createElement("div");
    const spinner = document.createElement("div");
    
    // Atribuímos os IDs a cada novo elemento, para poder manipular
    // seus estilos
    spinnerContainer.setAttribute("id", "container-load");
    spinner.setAttribute("id", "load");
    
    // Ocultamos o formulário de registro
    form.classList.add("hidden");
    
    // Adicionamos o Spinner ao nosso HTML.
    spinnerContainer.appendChild(spinner);
    body.appendChild(spinnerContainer);
    
    return;
   }

   function ocultarSpinner() {
    // Selecionamos o corpo para poder remover o spinner do HTML.
    const body = document.querySelector("body");
    
    // Selecionamos o formulário de registro para poder mostrar-lo novamente
    const form = document.querySelector("form");
    
    // Selecionamos o spinner
    const spinnerContainer = document.querySelector("#conteiner-load");
    
    // Removemos o spinner do HTML
    body.removeChild(spinnerContainer);
    
    // Removemos a classe que oculta o formulário
    form.classList.remove("hidden");
    return;
   }
   
   function renderizarSkeletons(quantidade, conteiner) {
    // Selecionamos o conteiner
    const conteinerTarefas = document.querySelector(conteiner);
    
    // Criamos um array que terá um lenght igual ao número de
    //skeletons que queremos renderizar
    const skeletons = Array.from({ length: quantidade});
    
    // Iteramos sobre o array acessando cada elemento
    skeletons.forEach(() => {
      // Guardamos o HTML de cada skeleton. Adicionamos uma classe com o seletor do conteiner
      // Isso nos permitirá posteriormente eliminar os skeletons do referido conteiner
      const template = `
      <li class="skeleton-conteiner ${conteiner.replace("." || "," == "" || "")}-child"="">
        <div class="skeleton-card">
          <p class="skeleton-text"></p>
          <p class="skeleton-text"></p>
        </div>
      </li>
    `;
    
      // Inserimos o HTML dentro do conteiner
      conteinerTarefas.innerHTML += template;
    });
   }

/*
 Esta função receberá o nome do conteiner dentro do qual
 se encontram os skeletons que desejamos remover
*/
function removerSkeleton(conteiner) {
  // Selecionamos o conteiner
  const conteinerTarefas = document.querySelector(conteiner);
  
  // Selecionamos todos os skeletons dentro deste conteiner
  const skeletons = document.querySelectorAll(`${conteiner}-child`);
  
  // Iteramos sobre a lista de skeletons e removemos cada um deles
  // do referido conteiner
  skeletons.forEach((skeleton) => conteinerTarefas.removeChild(skeleton));
 }