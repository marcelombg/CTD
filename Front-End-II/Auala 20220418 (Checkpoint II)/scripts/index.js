

function entrar() {
    const email = document.querySelector("#inputEmail").value;

    const emailNormalizado = email.toLowerCase();

    const senha = document.querySelector("#inputPassword").value;

    console.log(emailNormalizado, senha)

    // configuracao da API, encontrada na tarefa de criar Usuario.

    let configuracaoRequisicao = {
        method: 'POST',
        body: JSON.stringify({
            email: emailNormalizado,
            password: senha
        }),

        headers: {

            'Content-type': 'application/json'
        },
    };

    // Chamando   a API
    fetch("https://ctd-todo-api.herokuapp.com/v1/users/login", configuracaoRequisicao)

        .then((response) => {
            return response.json()
        })
        .then(function (resposta) {
            localStorage.setItem("login", JSON.stringify({ token: resposta }))

            alert("Login realizado com sucesso")


            // e então redirecionamos para a pagina de tarefas;
            window.location.href = "tarefas.html"

        })
        .catch(error => {
            // cadastroErro(error)
            console.log(error)
        })


}