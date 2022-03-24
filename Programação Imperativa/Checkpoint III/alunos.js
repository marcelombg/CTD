let aluno = {
    Nome: "Marcelo",
    Faltas: 1,
    Notas: [10, 8, 9, 7],
};

function Alunos(valorNome, valorFaltas, valorNotas) {
    this.nome = valorNome;
    this.faltas = valorFaltas;
    this.notas = valorNotas;
    this.calcularMedia = function() {
        return this.notas.reduce((acumulador, numero) => acumulador+numero/this.notas.length);
    }
    this.adicionarFaltas = function() {
        return this.faltas++;
    }
}

module.exports = Alunos;