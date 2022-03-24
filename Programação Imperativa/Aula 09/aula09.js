// Prática de Estruturas Condicionais

// 1 - Escreva uma função utilizando uma estrutura básica de IF/ELSE que verifique uma senha. A senha válida é o número 1234. Devem ser impressas as seguintes mensagens:
// 	- ACESSO PERMITIDO caso a senha seja válida.
// 	- ACESSO NEGADO caso a senha seja inválida.
function senha(numero){
    if (numero == 1234){
    return console.log ('ACESSO PERMITIDO')}
    else {
    console.log ('ACESSO NEGADO')}
}
senha(1204);

// 2 - Escreva uma função utilizando a estrutura IF/ELSE-IF/ELSE que receba dois inteiros e diga qual deles é o maior, qual deles é menor OU se são iguais.
function inteiros(a , b){
    if (a > b){
    return console.log (a + ' maior que ' + b) 
    } else if (a < b){
    return console.log (a + ' menor que ' + b) 
    } else {
    return console.log (a + ' e ' + b + ' são iguais')}
}
inteiros(2, 2)

// 3 - Escreva um programa utilizando a estrutura de switch que imprima o mês de acordo com o número fornecido.
// 	- Exemplo: quando envio o número 9, o retorno será: 'SETEMBRO'
function ano(mes) {
    switch (mes) {
        case 1:
            console.log("JANEIRO");
            break;
        case 2:
            console.log("FEVEREIRO");
            break;
        case 3:
            console.log("MARÇO");
            break;
        case 4:
            console.log("ABRIL");
            break;
        case 5:
            console.log("MAIO");
            break;
        case 6:
            console.log("JUNHO");
            break;
        case 7:
            console.log("JULHO");
            break;
        case 8:
            console.log("AGOSTO");
            break;
        case 9:
            console.log("SETEMBRO");
            break;
        case 10:
            console.log("OUTUBRO");
            break;
        case 11:
            console.log("NOVEMBRO");
            break;
        case 12:
            console.log("DEZEMBRO");
            break;
        default:
            console.log ('OPÇÃO INVÁLIDA')
    }
}
ano(13)

// 4 - Reescreva função do exercício 1, utilizando o operador ternário.
function senha(numero){
   return console.log (numero == 1234   ?  'ACESSO PERMITIDO'  :   'ACESSO NEGADO')
}
senha(1234);

// PROJETO MICROONDAS
// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:
// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 
//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 
// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
function microondas(tempoPadrao, tempoInformado) {
    if(tempoInformado < tempoPadrao){
        return console.log("o tempo é insuficiente");
    }else if(tempoInformado > tempoPadrao*3){
        return console.log("Kabumm");
    }else if(tempoInformado > tempoPadrao*2){
        return console.log("a comida queimou.");
    }else{
        return console.log("O prato está pronto, bom apetite!!!");
    }
}

let pedidos = function (opcao, tempo) {
    switch (opcao) {
        case 1:
            console.log("Você escolheu PIPOCA e ");
            microondas(10, tempo);           
            break;
        
        case 2:
            console.log("Você escolheu MACARRÃO e ");
            microondas(8, tempo)
            break;
        
        case 3:
            console.log("Você escolheu CARNE e ");
            microondas(15, tempo)
            break;
        
        case 4:
            console.log("Você escolheu FEIJÃO e ");
            microondas(12, tempo)
            break;

        case 5:
            console.log("Você escolheu BRIGADEIRO e ");
            microondas(8, tempo)
            break;
    
        default:
            console.log("Prato Inexistente!")
    }
}
pedidos(6,30)