/*
REQUISITOS
- Crie um formulário para capturar um texto inserido.
- Implemente o evento "submit", use-o para salvar o comentário em um array.
- Cada vez que um novo comentário é adicionado, renderize-o em uma tag "p" (remova o código permanente do HTML e torne-o dinâmico).
- Salve constantemente as informações no localStorage, caso a página seja recarregada os comentários devem ser mantidos.
*/

function login() {
    var email = document.querySelector("#email");
    var password = document.querySelector("#password");

    if(email.value == "admin@admin.com" && password.value == "admin"){
        localStorage.setItem("acesso", true);

        alert ("Usuário autenticado!")

        window.location.href = "index.html";

    } else {
        alert("Usuário ou senha inválida!")
    }
}