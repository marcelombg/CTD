

function entrar() {
    const email = document.querySelector("#inputEmail").value;

    // const emailNormalizado = email.toLowerCase();

    let emailNormalizado = email.toLowerCase();

    const senha = document.querySelector("#inputPassword").value;

    console.log(emailNormalizado, senha)

    mostrarSpinner();

    if (senha.length >= 8 && senha.length < 15 && /.com$/.test(emailNormalizado)) {

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
            // if (response.status == 200){
                return response.json()
            // }
            /* Se o código for diferente de sucesso (201), lança um throw para que a execução caia no Catch() */
            // throw response;
        })
        .then(function (resposta) {
            localStorage.setItem("login", JSON.stringify({ token: resposta }))

            alert("Login realizado com sucesso")


            // e então redirecionamos para a pagina de tarefas;
            window.location.href = "tarefas.html"

        })
        .catch(error => {
            console.log(error)
        })



    } else {
        alert("Usuario ou senha incorreto")
        window.location.href = "index.html"
        ocultarSpinner();
    }

}




