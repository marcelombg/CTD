// Arrays e Coleções
// Vamos fortalecer nosso conhecimento sobre arrays explorando diferentes ações.
// Veremos se eles se comportam como esperamos ou se ocorrem resultados
// inesperados.
// Em primeiro lugar, vamos praticar as ações mais comuns e necessárias:

// // A. Acessar elementos específicos de um array.
// let meuArray = ['Star Wars', true, 23, 'Olá', false, 90];
// console.log (meuArray[2])

// // B. Modificar cada um dos elementos de um array e imprimi-los no console.
// let meuArray2 = ['Star Wars', true, 23, 'Olá', false, 90];
// console.log (meuArray2[3].replace("Olá", "Tchau"))

// // C. Adicionar elementos a um array.
// let meuArray3 = ['Star Wars', true, 23, 'Olá', false, 90];
// meuArray3.push('Tchau')
// console.log(meuArray3)

// // D. Extrair elementos de um array.
// let meuArray4 = ['Star Wars', true, 23, 'Olá', false, 90];
// meuArray4.pop()
// console.log(meuArray4)

// // E. Comparar elementos de um array com os elementos de outro.
// let meuArray5 = ['A', 'B', 'C', 'D', 'E'];
// let meuArray6 = [1, 2, 3, 4, 5];

// console.log(meuArray5[3],meuArray6[3])

// // O que esses códigos retornam?
// // Neste exercício, você terá que pensar sobre o que esses códigos retornam sem
// // testá-lo no console.
// let numbers =['teste', 33, 54, 66, 72]
// console.log(numbers[numbers.length])
// 5

// let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
// console.log(grupoDeAmigos[1][0])
// // "Spiderman"

// // let str = “una string qualquer”
// let grupoDeAmigos2 = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
// console.log(grupoDeAmigos2[2][grupoDeAmigos2[2].length - 1])

// Join
let array2 = ["o","l","á"]

function joinArray(array) {

    let arrayJoined = array[0] + array[1] + array[2]

    return console.log(arrayJoined);

}

joinArray(array2)

// Join 2

let funcaoJoin = function(valorA, valorB){
    console.log(valorA+valorB)
    return valorA+valorB;
}

console.log(["t","c","h","a","u"].reduce(funcaoJoin))

// Join 3

function join(array){
    str = array.shift() + array.shift() + array.shift()
    console.log(str)

}

join(['o','l','á'])

