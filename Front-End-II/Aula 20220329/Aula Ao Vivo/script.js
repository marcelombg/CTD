console.log("Bem vindos a DH Bank Digital");

const minhaPrimeiraPromessa = new Promise((resolve, reject) => {

    const contaBancaria = {

        estado: "ativo",
        usuario: "Michel Polsan",
        valorPoupanca: 10000
    };

    setTimeout(function () {
        if (contaBancaria.valorPoupanca < 1) {
            reject({
                mensagem: "Fundos insuficientes na conta"
            });

        } else if (contaBancaria.estado != "ativo") {
            reject({
                mensagem: "A sua conta nao se encontra ativa"
            });

        } else {
            resolve({
                mensagem: "A transacao foi realizada com exito."
            });

        }
    }, 2000);

});

let tentativa;

const caixa = document.querySelector('.bancaMobile')

minhaPrimeiraPromessa.then((resposta) => {
    tentativa = resposta;
    caixa.innerHTML = `<h4> ${tentativa.mensagem} </h4>`  
    console.log(tentativa);

}).catch((err) => {
    tentativa = err;
    caixa.innerHTML = `<h4> ${tentativa.mensagem} </h4>`
    console.log(err);
})