//Grupo 6
//Marcelo Garofalo
//Clayton Alexandre Barbosa Pereira
//Fabiana Nunes Rodrigues
//Rodolfo Alves
//Tawan Silva Souza

let maoUsuario = parseInt(prompt("Pedra(1), Papel (2) e Tesoura(3)"));
let random = parseInt(Math.random() * 3 +1);

let maoMaquina = random;

let maquina = 0;
let usuario = 0;

let resultado = "Sem calculo";

console.log(maoUsuario);
console.log(maoMaquina);

const jokenPo = () => {

	if(usuario >= 2) {

	   alert(`maoUsuario venceu`);

	} else if(maquina >= 2) {

	   alert(`maoMaquina venceu`);

	}

	while(usuario < 2 && maquina < 2) {

		jokenPo();

	}
}

switch (maoUsuario) {
	case 1:
		if (maoMaquina == 1){
			resultado = 'que merda'
		}
		else if (maoMaquina == 2){
			resultado = 'perdeuuu'
		}
		else {
			resultado = 'ganhouuu'
		}
			break;
	
	case 2:
		if (maoMaquina == 1){
			resultado = 'ganhouuu'
		}
		else if (maoMaquina == 2){
			resultado = 'que merda'
		}
		else {
			resultado = 'perdeuuu'
		}
			break;
	
	case 3:
		if (maoMaquina == 1){
			resultado = 'perdeuuu'
		}
		else if (maoMaquina == 2){
			resultado = 'ganhouuu'
		}
		else {
			resultado = 'que merda'
		}
		break;
	default: 
		resultado = 'valor inválido'
		break;
}

alert(resultado);

jokenPo();

