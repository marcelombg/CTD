let pessoas = [
    {Altura: 4.00,
    Sexo: "M",
    Nome: "Pessoa1"},
  
    {Altura: 2.00,
    Sexo: "M",
    Nome: "Pessoa2"}
]

let media = pessoas.filter(function(pessoas){
    return function (altura) 
    {this.Altura = altura / 2;}
});

console.log(media)