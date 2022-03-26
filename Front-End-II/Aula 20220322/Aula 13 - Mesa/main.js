//Função para checar parâmetros dos hobbies.
function checkedHobbies() {
  let countHobbies = 0
  document.getElementsByName('hobbies').forEach(element => {
      if(element.checked) {
        countHobbies++
      }     
  })
  return countHobbies <= 4
}

//Função para checar parâmetros dos nomes.
function check(nome) {
  let teste = /^[A-Z a-z]+$/;
  let name = document.getElementById("nome").value;
  let arrayNomeCompleto = name.split(' ');
  let brasil = document.getElementById("nacionalidadeBrasileira")

  // IF para verificar verificar se no nome contém números.
  if (!nome.value.match(teste)) {
    alert("Não deve conter números.");
  }

  // IF para verificar o nome, que deve conter pelo menos duas palavras.
  if (!(arrayNomeCompleto.length >= 2)) {  
    alert('Insira seu nome e sobrenome')
  }

  // IF para verificar o campo nome que não pode exceder 150 caracteres.
  if (!(name.length <= 150)) {
  alert("O campo não pode exceder 150 caracteres.")
  }
  
  // IF para verificar se nome ou sobrenome tem mais de 1 letra.
  arrayNomeCompleto.forEach((element) => {
  if(!(element.length > 1)) {
  alert ('Seu nome ou sobrenome deve ter mais de uma letra')
  }
  })

  // IF para verificar a seleção máxima de 4 hobbies.
  if (!checkedHobbies()) {
    alert('Tem mais do que 4 hobbies marcados.')
  }

  // IF para verificar a foi selecionado Brasil como País.
  if (brasil.checked){
    alert("Desculpe, ainda não estamos recrutando bruxos no Brasil, mas chegaremos em breve")
  }
}



