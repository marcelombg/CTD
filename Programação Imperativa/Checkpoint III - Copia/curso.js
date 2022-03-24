const CriarAluno = require("./alunos");
const estudantes = require("./estudantes");

let curso = {
    NomeCurso: "PI",
    NotaAprovação: 7,
    FaltasMáximas: 5,
    ListaEstudantes: estudantes,
    adicionarEstudantes(aluno) {
        this.ListaEstudantes.push(aluno)
    },
    verificarAprovação(aluno) {
        if(aluno.calcularMedia() >= 7 && aluno.faltas < this.FaltasMáximas){
            return true;
        } else if(aluno.faltas == this.FaltasMáximas && aluno.calcularMedia() >= this.NotaAprovação*0.1) {
            return true;
        } else {
            return false
        };
    },
    passo6(estudantes){
        let lista = [] 
        estudantes.forEach(estudante => {
        lista.push('Estudante ' + estudante.nome + ' aprovado ' + this.verificarAprovação(estudante))
        });
        return lista
    },
};

console.log(curso.passo6(curso.ListaEstudantes));

curso.adicionarEstudantes(new CriarAluno("Maria", 4, [6, 10, 10, 9]));