
// criar customers.txt -> objeto a partir do texto

// importou o modulo de gerenciamento de arquivos: fs nativo do node  file system
const fs = require('fs');

// modulo nativo, npm init pra iniciar um projeto node
// npm install para criar a referencia nativa do node

// console.log(fs.readFileSync(__dirname + '/texto.txt', 'utf-8')) no vídeo explica assim

// leitura do arquivo
// o arquivo salvo na variavel customers
let customers = fs.readFileSync('./customers.txt', 'utf-8');

// separou nosso arquivo pelas virgulas
const list = customers.split(','); 


console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[3]);