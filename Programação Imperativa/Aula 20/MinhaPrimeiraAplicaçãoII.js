const dados = require('./dados');

const totalDados = () => {
    console.log('Total', dados.length);
}

const totalHomens = () => {
    return dados.filter((dado) => {
        return dado.sexo === 'masculino';
    });
} 

const totalMulheres = () => {
    return dados.filter((dado) => {
        return dado.sexo === 'feminino';
    });
} 

const totalAlturaHomens = () => {
    return  homens.reduce((grupo, reduzido) => {
        return grupo + reduzido.altura;
    }, 0);    
}

const mediaAlturaHomens = () => {
    const totalHomens = totalHomens();
    const totalAlturaHomens = totalHomens();
    return totalAlturaHomens / totalHomens.length;
}

const mediaAlturaMulheres = () => {
    const totalMulheres = totalMulheres();
    const totalAlturaMulheres = totalMulheres();
    return totalAlturaMulheres / totalMulheres.length;
}

const testeForEach = (tipoAltura = 'maior') => {
    let altura = 0;

    dados.forEach((objeto) => {
        switch(tipoAltura) {
            case 'maior' :
                if (objeto.altura > altura) {
                    altura = objeto.altura;
                }
            break;
            case 'menor' :
                if (altura === 0) {
                    altura = objeto.altura;
                }

                if (objeto.altura < altura) {
                    altura = objeto.altura;
                }
            break;
        }
    });

    return altura;
}

console.log(testeForEach('menor'));
