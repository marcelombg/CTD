const Aluno = require("./alunos");

let aluno1 = new Aluno('Marcio', 6, [5, 5, 5, 3]);
let aluno2 = new Aluno('Ana', 4, [6, 8, 9, 9]);
let aluno3 = new Aluno('José', 5, [7, 8, 9, 7]);
let aluno4 = new Aluno('Jacó', 2, [8, 8, 4, 6]);
let aluno5 = new Aluno('Jonas',7, [10, 5, 8, 9]);
let aluno6 = new Aluno('Juca', 0, [10, 10, 10, 10]);


let estudantes = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6];

console.log(aluno6.calcularMedia())

module.exports = estudantes;
