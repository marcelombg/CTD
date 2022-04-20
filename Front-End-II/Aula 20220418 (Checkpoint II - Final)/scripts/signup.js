
//Captura as entradas de dados e ações do usuário na página de cadastro 
let nome = document.getElementById("inputNomeCadastro");
let sobrenome = document.getElementById("inputSobrenomeCadastro");
let email = document.getElementById("inputEmailCadastro");
let senha = document.getElementById("inputSenhaCadastro");
let repetirSenha = document.getElementById("inputRepetirSenhaCadastro");
let botaoCriarConta = document.getElementById("botaoCriarContaCadastro");

botaoCriarConta.addEventListener('click', evento => {

    evento.preventDefault();
    mostrarSpinner();

    //Verifica se todos os campos estão preenchidos

    if (nome.value != "" && sobrenome.value != "" && senha.value.length >= 8 && senha.value.length < 15 && senha.value == repetirSenha.value
        && /.com$/.test(email.value)) {
        //  && email.value != "" && senha.value.length >= 8 && senha.value.length < 15 && senha.value == repetirSenha.value
        // configuracao da API, encontrada na tarefa de criar Usuario.

        let configuracaoRequisicao = {
            method: 'POST',
            body: JSON.stringify({

                firstName: nome.value,
                lastName: sobrenome.value,
                email: email.value,
                password: senha.value

            }),

            headers: {

                'Content-type': 'application/json'
            },
        };


        // Chamando   a API

        fetch("https://ctd-todo-api.herokuapp.com/v1/users", configuracaoRequisicao)

            .then((response) => {


                // verifica se o status se é 201, que é o status ok. Se não entra no catch.
                if (response.status == 201) {
                    return response.json()
                }
                /* Se o código for diferente de sucesso (201), lança um throw para que a execução caia no Catch() */
                throw response;
            }).then(function (resposta) {
                cadastroSucesso(nome.value, sobrenome.value, email.value, resposta.jwt)
            })
            .catch(error => {
                cadastroErro(error)
            });

    } else {

        alert("Todos os campos devem ser preenchidos para que possa prosseguir")
        console.error()
        window.location.href = "signup.html"
        ocultarSpinner();
    }
});

/*  Ao obter o sucesso, recebe o json (token) do usuário*/


function cadastroSucesso(nome, sobrenome, email, jsonRecebido) {


    localStorage.setItem("user", JSON.stringify({ nome: nome, sobrenome: sobrenome, email: email, token: jsonRecebido }))

    alert("Usuário cadastrado com sucesso")


    // e então redirecionamos para a pagina de tarefas;
    window.location.href = "index.html"

}

function cadastroErro(statusRecebido) {

    console.log("Erro ao cadastrar");

    console.log(statusRecebido)
}