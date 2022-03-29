//EQUIPE 5
//Marcelo Garofalo
//Sankler Bergman
//Atef Chelaghma
//Samir Libos
//Renan Miranda

function entrar() {

    const email = document.querySelector("#inputEmail").value;
    const emailNormalizado = email.toLowerCase();

    const senha = document.querySelector("#inputPassword").value;
    if (senha.length >= 8 && senha.length < 12 && /.com$/.test(emailNormalizado)) {

        localStorage.setItem("login", emailNormalizado)

        alert("Login efetuado com sucesso!")

        window.location.href = "tarefas.html"
    }else{
        alert("Login não efetuado.")
    }
}

function loginUp() {

    let re = /^[A-Za-z]+$/; //fazer validação do nome e sobrenome, só letras, sem espaço

    const nome = document.querySelector("#nome").value;
    localStorage.setItem("loginUp", nome);

    const apelido = document.querySelector("#apelido").value;  
    localStorage.setItem("loginUp", apelido);
    
    const email = document.querySelector("#email").value; 
    const emailNormalizado = email.toLowerCase();
            
    const senha = document.querySelector("#senha").value;
    const repetirSenha = document.querySelector("#repetirSenha").value;

    if (senha.length >= 8 && senha.length < 12 && /.com$/.test(emailNormalizado) && senha == repetirSenha) {
        
        localStorage.setItem("loginUp", emailNormalizado)

        alert("Cadastro efetuado com sucesso!")

        window.location.href = "tarefas.html"
    }else{
        alert("Cadastro não efetuado.")
    }
}



