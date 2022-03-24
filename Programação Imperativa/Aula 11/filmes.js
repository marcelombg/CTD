// CORRIGIR A FUNÇÃO adicionarElementosDoArray2NoArray1
// de forma que o resultado seja o ARRAY 1 + ARRAY 2

// UTILIZE QUALQUER ESTRUTURA VISTA ATÉ A AULA DE HOJE !!!!!!!

let filmes = ['star wars', 'matrix', 'robot', 'o Preço do Amanhã', 'a Vida é Bela']
let designInterface = ['Figma', 'Adobe XD', 'Sketch', 'Marvel APP', 'Exemplo']

function converterMaisculas(array){
    array[0] = array[0].toUpperCase();
    array[1] = array[1].toUpperCase();
    array[2] = array[2].toUpperCase();
    array[3] = array[3].toUpperCase();
    array[4] = array[4].toUpperCase();

    for (let index = 0; index < array.length; index++) {
        array[index] = array[index].toUpperCase();
    }

    return array;
}

console.log(filmes);
console.log(converterMaisculas(filmes));

function adicionarElementosDoArray2NoArray1(array1, array2) {

    console.log('entrada - ', array2);
    // converterMaisculas(array2);
    console.log('maiusculas - ', array2);
    
    array1.push() 
    array2.pop().toUpperCase();
    array1.push() 
    array2.pop().toUpperCase();
    array1.push() 
    array2.pop().toUpperCase();
    array1.push() 
    array2.pop().toUpperCase();
    
    // array1.push()(array2.pop().toUpperCase());
    // array1.push()(array2.pop().toUpperCase());
    // array1.push()(array2.pop().toUpperCase());
    // array1.push()(array2.pop().toUpperCase());

    console.log('saida - ', array2);
    
    return array1;

}
saida = adicionarElementosDoArray2NoArray1(filmes, designInterface);
console.log(saida);