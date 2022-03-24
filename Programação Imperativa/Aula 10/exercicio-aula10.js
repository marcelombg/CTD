// O exercício a seguir é proposto:
// Usando apenas .pop() e .push()
// crie uma função que receba uma matriz de 4 elementos por parâmetro
// retorne uma matriz com os elementos invertidos em sua ordem:
// Então [1,2,3,4]
// retorna [4,3,2,1]

// function matrizInvertida(array) {
//     console.log(array);

// }

// matrizInvertida([1,2,3,4]);

// let novoArray = array.pop()

// console.log(novoArray);

console.log (matrizInvertido([1, 2, 3, 4]))

function matrizInvertido(array) {

    saida1 = array.pop()
    saida2 = array.pop()
    saida3 = array.pop()
    saida4 = array.pop()
    
    array.push(saida1)
    array.push(saida2)
    array.push(saida3)
    array.push(saida4)

    console.log(array)
}

matrizInvertido([1, 2, 3, 4])


