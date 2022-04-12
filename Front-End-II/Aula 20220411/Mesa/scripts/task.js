// configuracao da API, encontrada na tarefa de criar Usuario.
const tokenJson = localStorage.getItem("login")
const taskValue = document.getElementById("novaTarefa")
let taskList = document.getElementById("taskList")
let valorToken = JSON.parse(tokenJson)

console.log(taskValue);

let configuracaoRequisicao = {
    method: 'GET',

    headers: {

        'Content-type': 'application/json',
        'Authorization': valorToken.token.jwt
    },
};

// Chamando   a API
fetch("https://ctd-todo-api.herokuapp.com/v1/users/getMe", configuracaoRequisicao)

    .then((response) => {
        return response.json()
    })
    .then(function (resposta) {
        const nomeUser = document.querySelector('p')
        nomeUser.innerHTML = `${resposta.firstName} ${resposta.lastName}`

    })
    .catch(error => {
        // cadastroErro(error)
        console.log(error)
    })

///////////////////////////////////////

// let button = document.getElementById("submit");
// button.addEventListener("click", function (e) {
//     e.preventDefault();

//     let configurationTask = {
//         method: 'POST',

//         headers: {
//             'Accept': 'application/json',
//             'Authorization': valorToken.token.jwt
//         },

//         body: JSON.stringify(
//             {
//                 "description": "Aprender Javascript",
//                 "completed": false
//             }
//         )
//     };

//     fetch("https://ctd-todo-api.herokuapp.com/v1/tasks", configurationTask)

//         .then((response) => {
//             return response.json()
//         })
//         .then(function (resposta) {
//             localStorage.setItem('tasks', JSON.stringify(data))

//             let listOfTasks = document.createElement('p')
//             listOfTasks.innerHTML = `${resposta.description}`
//             taskList.appendChild(listOfTasks)

//             taskValue.value = '';
//             console.log(resposta)

//         });

// })
