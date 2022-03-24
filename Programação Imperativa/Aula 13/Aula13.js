let carro = {
    nome: "Fox",
    ano:2012,
    cor: "Preto",
    ligar: function(){
        console.log ("O carro " + this.nome + " está ligado")
    }
}

carro.ligar()
console.log("O modelo do carro é " + carro.nome + ", foi fabricado em " + carro.ano + " e sua cor é " + carro.cor)

function Carro(nomeCarro, anoCarro){
    this.nome = nomeCarro;
    this.ano = anoCarro;
}

let civic = new Carro("Civic", "2019");
let gol = new Carro("Gol", "2017");

console.log(civic)
console.log(gol)

let pessoa = {
    nome: "Marcelo",
    idade: 36,
    altura: 1.73
}

let json = JSON.stringify(pessoa)

console.log(json)

let objetoDeNovo = JSON.parse(json)

console.log(objetoDeNovo)

let listaCompras = ["pão", "presunto", "queijo"]

let dadoEntrada = {
    nome:"Christopher",
    profissao:"Programador",
    idade:25,
    linguagens:["PHP","Javascript","Dart"],
    disponibilidadeParaViajar:true,
    ramoProfissional: {
        anosDeExperiencia: 12,
        nivel: "Senior"
    },
   
    calculo: function(){
        return this.idade - this.ramoProfissional.anosDeExperiencia;
    },

 }

