// function soma(a=1, b=3) {
//     return a+b;
// }

// console.log(soma());
// console.log(soma(3));
// console.log(soma(1,2));

//////////////////////////////////////////////////////////////////

// let numeros= [10, 8, 7, 99, 0, 1, 6]
// let saida = [99, 10, 8, 7, 6,  1, 0]
// let saida1 = [0, 1, 10, 6,7, 8, 99]

// numeros.sort(
    
//     function(a,b) { 
//     return b*a;
//     // a*b
// }

// );

// numeros.sort();

// console.log(numeros)

//////////////////////////////////////////////////////////////////

// var z=0;
// for (var i=20; i<50; i+=10) {
//     z+=i;
// }
// console.log(z);

//////////////////////////////////////////////////////////////////

// let frutasAmarelas=['melão','mamão','limão siciliano']
// let frutasVermelhas=['morango','cereja','maçã red']
// let frutasVerdes=['limão','kiwi','maçã verde']

// frutasVermelhas1=frutasVermelhas.map(fruta => fruta.toUpperCase());
// let todasFrutas=[...frutasAmarelas,...frutasVermelhas1,...frutasVerdes];
// console.log(todasFrutas)

//////////////////////////////////////////////////////////////////

// let valor=5;
// let fatorial=1;
// for (let i=valor; i>1; i--) {
//     fatorial*=i;
// }
// console.log('Fatorial = '+fatorial);

//////////////////////////////////////////////////////////////////

// let frutasAmarelas=['melão','mamão','limão'];
// let [fruta1, fruta2, fruta3] = frutasAmarelas;

// console.log(fruta1);
// console.log(fruta2);
// console.log(fruta3);
// console.log(frutasAmarelas);

//////////////////////////////////////////////////////////////////

// let frutasAmarelas=['melão','mamão','limão'];
// let [fruta1, fruta2, fruta3] = frutasAmarelas;

// console.log(fruta1);
// console.log(fruta2);
// console.log(fruta3);
// console.log(frutasAmarelas);

//////////////////////////////////////////////////////////////////

let x=5;
let y=x++ + ++x;
console.log('y= '+y);
x=3;
y=x*(x+1)*x++;
x=5;
y=3;
y*= x+1
console.log("x= "+x);
console.log('y= '+y);

//////////////////////////////////////////////////////////////////

// for (var i=0; i<50; i+=10) {
//     console.log(i);
// }
// console.log(i);

//////////////////////////////////////////////////////////////////

// function soletrar(texto) {
//     console.log(texto.replace('-', '').toLocaleUpperCase().split("").join("-"));
// }

// soletrar("digital-house");
// soletrar("ctd");

//////////////////////////////////////////////////////////////////

// function verificaSenha(senha)
// {
//     let senhaCorreta = "1234";
//     if(senha === senhaCorreta)
//     {
//         console.log("ACESSO PERMITIDO");
//     }else{
//         console.log("ACESSO NEGADO");
//     }
// }

// function verificaNumeros(numA, numB){
//     if (numA > numB){
//         console.log("O número ", numA, "é maior do que o número ", numB);
//     } else if (numA < numB){
//         console.log("O número ", numA, " é menor do que o número ", numB);
//     } else if (numA == numB) {
//         console.log("Os dois números são iguais");
//     } else {
//         console.log("Número digitado não é válido");
//     }
// }

// verificaSenha(4343);

// let mesesDoAno = 12;

// switch(mesesDoAno)
// {
//     case 1:
//         console.log("Janeiro");
//         break;

//     case 2:
//         console.log("Fevereiro");
//         break;

//      case 3:
//          console.log("Março");
//           break;

//      case 4:
//         console.log("Abril");
//         break;

//      case 5:
//          console.log("Maio");
//          break;

//      case 6:
//         console.log("Junho");
//         break;

//     case 7:
//         console.log("Julho");
//         break;

//      case 8:
//          console.log("Agosto");
//           break;

//      case 9:
//         console.log("Setembro");
//         break;

//      case 10:
//          console.log("Outubro");
//          break;

//      case 11:
//         console.log("Novembro");
//         break;

//     case 12:
//          console.log("Dezembro");
//          break;

//     default:
//     {
//         console.log("O mês digitado não é válido");
//         break;
//     }

            
// }

// function verificaSenha2(senha) {
//     senha === 1234 ? console.log("Acesso permitido") : console.log("Acesso negado")

// }

// verificaSenha2(1234)


// /* As proximas linhas refere-se ao Exercicio do MicroOndas */


// console.log("Escolha uma das opções abaixo:\n",
// "1 - Pipoca – 10 segundos (padrão)\n",
// "2 - Macarrão – 8 segundos (padrão)\n",
// "3 - Carne – 15 segundos (padrão)\n",
// "4 - Feijão – 12 segundos (padrão)\n",
// "5 - Brigadeiro – 8 segundos (padrão)");


// let menu = 5;
// var tempoPadraoAlimento;
// var tempoQueUsuarioEscolhe = 10;

// switch(menu)
// {
//     case 1:
//         tempoPadraoAlimento = 10;
//         microOndas(tempoQueUsuarioEscolhe, tempoPadraoAlimento)
//         break;

//     case 2:
//         tempoPadraoAlimento = 8;
//         microOndas(tempoQueUsuarioEscolhe, tempoPadraoAlimento)
//         break;

//     case 3:
//         tempoPadraoAlimento = 15;
//         microOndas(tempoQueUsuarioEscolhe, tempoPadraoAlimento)
//         break;

//     case 4:
//         tempoPadraoAlimento = 12;
//         microOndas(tempoQueUsuarioEscolhe, tempoPadraoAlimento)
//         break;

//     case 5:
//         tempoPadraoAlimento = 20;
//         microOndas(tempoQueUsuarioEscolhe, tempoPadraoAlimento)
//         break;

//     default:
//         console.log("Prato inexistente!");
//         break;

// }


// function microOndas(tempoQueUsuarioEscolhe, tempoPadraoAlimento)
// {
//     if(tempoQueUsuarioEscolhe > (tempoPadraoAlimento * 2))
//     {
//         console.log("A comida queimou");
//     }else if(tempoQueUsuarioEscolhe < tempoPadraoAlimento)
//     {
//         console.log("Tempo insuficiente")
//     }else if(tempoQueUsuarioEscolhe > (tempoPadraoAlimento * 3))
//     {
//         console.log("kabumm");
//     }else{
//         console.log("Prato pronto, bom apetite!!!")
//     }
// }