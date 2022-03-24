let nome = 'String'
let sobrenome = 'String'
let idade = Number
let peso = Number
let altura = Number
let plano = Boolean

nome='José'
sobrenome='da Silva'
idade=27
peso=83.5
altura=1.70
plano=true

const calculoAltura = altura*altura
const calculoIMC = peso/calculoAltura

console.log(nome , sobrenome  , "tem"  , idade , "anos e seu índice de massa corporal é" , calculoIMC)