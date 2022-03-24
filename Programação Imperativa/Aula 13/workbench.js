function Conta(titularConta, tipoConta, numeroConta, saldoConta) {

    this.titularConta = titularConta;
    this.tipoConta = tipoConta;
    this.numeroConta = numeroConta;
    this.saldoConta = saldoConta;

}

const eduardo = new Conta("Eduardo Russo", "Corrente", "1234-555-10-0", 130.000);
const filipe = new Conta("Filipe Farias", "Corrente", "1234-555-10-1", 110.500);
const mayara = new Conta("Mayara Dias", "Corrente", "1234-555-10-2", 199.500);
const regina = new Conta("Regina Estrota", "Corrente", "1234-555-10-3", 999.500);

let contas = [eduardo, filipe, mayara, regina];

const banco = {

    clientes: contas,

    consultarCliente: function(cliente) {

        return console.log(this.clientes.includes(cliente) ? cliente : "Cliente não existe");

    },

    depositar: function(cliente, valor) {

        let novoSaldo = cliente.saldoConta += valor

        console.log("Depósito realizado! Seu novo saldo é de: " + novoSaldo);

    },

    sacar: function(cliente, valor) {

        let novoSaldo = cliente.saldoConta -= valor

        cliente.saldoConta > 0 ? console.log("Saque realizado! Seu novo saldo é de: " + novoSaldo) : console.log("Saldo insuficiente");

        ;

    }

}

banco.consultarCliente(eduardo);
banco.depositar(eduardo, 100.000);
banco.sacar(eduardo, 100.000);