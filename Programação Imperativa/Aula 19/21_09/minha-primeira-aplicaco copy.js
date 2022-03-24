let pessoas = [
    {nome:"Diego Reis",
     altura:1.71,
     sexo:'M'},

     {nome:"Fagner Wall",
     altura:1.70,
     sexo:'M'},

     {nome:"Tereza Virginio",
     altura:1.57,
     sexo:'F'},

     {nome:"Antonio Rocha",
     altura:1.70,
     sexo:'M'},

     {nome:"Maria de Fátima",
     altura:1.02,
     sexo:'F'},


     {nome:"Emanoela Dourado",
     altura:1.65,
     sexo:'F'},

     {nome:"Luciano John Ivo",
     altura:1.72,
     sexo:'M'},


     {nome:"Ramirez Alex",
     altura:1.77,
     sexo:'M'},


     {nome:"Duda Reis",
     altura:1.06,
     sexo:'F'},


     {nome:"Jorge Alvarez",
     altura:1.84,
     sexo:'M'},


     {nome:"Carlos Alves",
     altura:1.76,
     sexo:'M'},


     {nome:"Karine Andrade",
     altura:1.60,
     sexo:'F'},

     {nome:"Aline Sanches",
     altura:1.68,
     sexo:'F'},


     {nome:"Alex Barreto",
     altura:1.65,
     sexo:'M'},

     {nome:"João Marcos",
     altura:1.98,
     sexo:'M'}

]

////////////////////////////////

const homens = pessoas.filter((pessoas) => {
    return pessoas.sexo === 'M'
});


const mulheres = pessoas.filter((pessoas) => {
    return pessoas.sexo === 'F'
});

////////////////////////////////
const totalAlturaHomens = homens.reduce((grupo, homens) => {
    return grupo + homens.altura;
}, 0);

const totalAlturaMulheres = mulheres.reduce((grupo, mulheres) => {
    return grupo + mulheres.altura;
}, 0);

////////////////////////////////
const maiorAltura =  






console.log(homens.length);
console.log(mulheres.length);


console.log('Média de altura dos homens é ' + (totalAlturaHomens / homens.length));
console.log('Média de altura das mulheres é ' + (totalAlturaHomens / mulheres.length));
