//GRUPO 8 - Marcelo Garofalo, Monique Cristina Cerqueira De Souza Mendes, 
//Manuel Jose Pinero, Wesley Claudinei Lubke, Rhuam Bello Carneiro

function somandoArrays (array){
    array.reduce((total, numero) => {
        console.log(`${total} + ${numero}`)
        return total+numero
    } )
}

somandoArrays ([1,2,4,8]);

function somandoArraysII (array){
    let total = array[0]
    
    array.slice(1).forEach(numero => {
        console.log(`${total} + ${numero}`)
        total+=numero
    })
}

somandoArraysII ([1,2,4,8]);

    function somandoArraysIII (array){
        let total = array[0]
        for (let i=1; i<array.length; i++){
            console.log(`${total} + ${array[i]}`)
            total+=array[i]
        }
    }

somandoArraysIII ([1,2,4,8]);
