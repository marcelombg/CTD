let peliculas = ["Star Wars", "Totoro", "Rocky", "Pulp Fiction", "La Vida Es Bella"]

function converterAMaiusculas(array){

array[0] = array[0].toUpperCase()
array[1] = array[1].toUpperCase()
array[2] = array[2].toUpperCase()
array[3] = array[3].toUpperCase()
array[4] = array[4].toUpperCase()

return array
}

console.log(converterAMaiusculas(array))

// for (let index = 0; index < array.length; index++) {
//     array[index] = array[index].toUpperCase();
    
// }

// function trocarElementos(arra1, array2){

// array1.push(array2.pop().toUpperCase())
// array1.push(array2.pop().toUpperCase())
// array1.push(array2.pop().toUpperCase())
// array1.push(array2.pop().toUpperCase())
// array1.push(array2.pop().toUpperCase())
// array de retorno1
// }

// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const asiaScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// function compararCalificaciones(asia, europa) {
//     let comparacionesAsiaEuropa = []
// comparacionesAsiaEuropa[0] = asia[0] === europa[0]
// comparacionesAsiaEuropa[1] = asia[1] === europa[0]
// comparacionesAsiaEuropa[2] = asia[2] === europa[0]
// comparacionesAsiaEuropa[3] = asia[3] === europa[0]

// }