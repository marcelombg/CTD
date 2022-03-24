//Grupo 6
//Marcelo Garofalo
//Clayton Alexandre Barbosa Pereira
//Fabiana Nunes Rodrigues
//Rodolfo Alves
//Tawan Silva Souza

var contadorRodada = 0;
var userScore = 0;
var machiScore = 0;

function jogo(){
  if (contadorRodada < 3 && userScore < 3 && machiScore < 3 || contadorRodada == 3 && userScore==machiScore )
  {
  userSelection()
  }
  else {
   alert("Partida finalizada - O placar é: " + " " + "Você - " + " " + userScore + " | " + "Máquina - " + " " + machiScore)
  }
}

function userSelection()
{
  let User = parseInt(prompt("Pedra(1), Papel(2) e Tesoura(3)"))
  let Maq  = parseInt(Math.random() *3 +1);
  
  switch (User)
  {

  case 1:
      switch (Maq)
        {
        case 1:
          alert("Rodada empatada.")
          userScore++
          machiScore++
          alert ("Sua escolha: Pedra" + " | " + "Escolha da máquina: Pedra")
          alert("Máquina:" + " " +  machiScore + " " + "|" + " " + "Você:" + " " + userScore)
          contadorRodada++
          break

        case 2:
          alert("Ponto para a máquina!")
          machiScore ++
          alert ("Sua escolha: Pedra" + " | " + "Escolha da máquina: Papel")        
          alert("Máquina:" + " " +  machiScore + " " + "|" + " " + "Você:" + " " + userScore)
          contadorRodada++
          break

        case 3:
          alert("Ponto para você!")
          userScore ++
          alert ("Sua escolha: Pedra" + " | " + "Escolha da máquina: Tesoura")
          alert("Máquina:" + " " +  machiScore + " " + "|" + " " + "Você:" + " " + userScore)
          contadorRodada++
          break
        }
  jogo()
  break;

  case 2:
      switch (Maq)
        {
        case 1:
          alert("Ponto para você!");
          userScore ++
          alert ("Sua escolha: Papel" + " | " + "Escolha da máquina: Pedra")
          alert("Máquina:" + " " +  machiScore + " " + "|" + " " + "Você:" + " " + userScore)
          contadorRodada++
          break

        case 2:
          alert("Rodada empatada!");
          userScore++
          machiScore++
          alert ("Sua escolha: Papel" + " | " + "Escolha da máquina: Papel")
          alert("Máquina:" + " " +  machiScore + " " + "|" + " " + "Você:" + " " + userScore)
          contadorRodada++
          break

        case 3:
          alert("Ponto para a máquina!");
          machiScore ++
          alert ("Sua escolha: Papel" + " | " + "Escolha da máquina: Tesoura")
          alert("Máquina:" + " " +  machiScore + " " + "|" + " " + "Você:" + " " + userScore)
          contadorRodada++
          break
        }
  jogo()
  break;
     
  case 3:
      switch (Maq)
        {
        case 1:
          alert("Ponto para a máquina!")
          machiScore ++
          alert ("Sua escolha: Tesoura" + " | " + "Escolha da máquina: Pedra")
          alert("Máquina:" + " " +  machiScore + " " + "|" + " " + "Você:" + " " + userScore)          
          contadorRodada++
          break

        case 2:
          alert("Ponto para você!")
          userScore ++
          alert ("Sua escolha: Tesoura" + " | " + "Escolha da máquina: Papel")
          alert("Máquina:" + " " +  machiScore + " " + "|" + " " + "Você:" + " " + userScore)          
          contadorRodada++
          break

        case 3:
          alert("Rodada empatada!");
          userScore++
          machiScore++
          alert ("Sua escolha: Tesoura" + " | " + "Escolha da máquina: Tesoura")
          alert("Máquina:" + " " +  machiScore + " " + "|" + " " + "Você:" + " " + userScore)
          contadorRodada++
          break
        }
  jogo();
  break;

  default: 
    alert("DIGITE (1) PARA PEDRA , (2) PARA PAPEL E (3) PARA TESOURA")
    jogo()
  }
}

jogo()