const urlLogin = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe';

const nomeUsuario = document.getElementById('nomeUsuario');


window.addEventListener("load", function (evento) {


    evento.preventDefault();

    const jwt = localStorage.getItem("jwt");


    console.log(jwt)


    const settings = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: jwt
        }
    }


    fetch(urlLogin, settings)

        // aqui passamos a nossa response para JSON.

        .then((resp) => resp.json())


        .then(function (data) {


            const dadosUsuario = `${data.firstName} ${data.lastName}`



            console.log(dadosUsuario)


            nomeUsuario.innerHTML = dadosUsuario




        })

        .catch(err => {

            console.log(err)
            alert("Falha ao validar as informações do usuario!")
        })


    listarTarefa()

})



function listarTarefa() {

    const urlTarefa = 'https://ctd-todo-api.herokuapp.com/v1/tasks'

    const tarefa = document.getElementById('nome')

    const dataCriada = document.getElementById('timestamp')

    const tarefasPendentes = document.getElementById('tarefasPendentes')

    let skeletonRef = document.querySelector('#skeleton')


    const jwt = this.localStorage.getItem("jwt")

    console.log(jwt);

    const settings = {
        method: 'GET',
        headers: {
           'content-type': 'application/json',
           'Authorization': jwt
        }
       }

       fetch(urlTarefa, settings)


       .then((resp) => resp.json())


       .then( function(tasks){


        // é necessário que o skeleton, que nada mais é que a parte do código sem os dados inseridos com template string, fiquem desabilitado
   //quando é recebido o response pela API


        skeletonRef.style.display = 'none'

  // e então efetuamos o map, onde trazemos de cada tarefa,a  sua descrição especifica, e quando ela foi criada
      //usando template string.
        tasks.map((task) => {

            console.log(task.description)
            console.log(task.createdAt)

tarefasPendentes.innerHTML += ` <li class="tarefa">
<div class="not-done"></div>
<div class="descricao">
  <p class="nome">${task.description}</p>
  <p class="timestamp">${task.createdAt}</p>
</div>
</li>` 

        })
       })

         // neste console log validamos se ele está trazendo o nome do usuario corretamente do login que acessamos no JWT.


       .catch(err => {
        console.log(err);
        alert("Falha ao validar as tarefas do usuario!")
     })

}

