let meuArray = ['Star Wars', true, 23, 'Olá', false, 90];
console.log (meuArray.length)

let cores = ['Roxo', 'Laranja', 'Azul'];
cores.push('Violeta')

console.log(cores)

cores.push('Cinza', 'Ouro')

console.log(cores)

let ultimaCor = cores.pop()

console.log(cores)
console.log(ultimaCor)

let primeiraCor = cores.shift()

console.log(cores)
console.log(primeiraCor)

cores.unshift('Verde', 'Branco', 'Roxo')

console.log(cores)

console.log(cores.join(" - "))

console.log(cores.join(" , "))

console.log(cores.lastIndexOf("Marrom"))

console.log(cores.lastIndexOf("Azul"))

console.log(cores.includes("Marrom"))

console.log(cores.includes("Azul"))
