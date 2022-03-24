//Regras 
//Nome completo
//Deve conter pelo menos duas palavras.
//Cada nome ou sobrenome deve ter mais de 1 letra.
//O campo não pode exceder 150 caracteres.
//O campo é obrigatório.
//Não deve conter números.

formulario.addEventListener("submit" , function(e){
e.preventDefault()

        function contar(){
            var texto = document.getElementById("nome").value;
            console.log(texto);

    }
}
    

//Hobbies
//Um máximo de 4 hobbies devem ser selecionados.

//Países
//O campo é obrigatório.
//Se Brasil for selecionado, o formulário mostra uma exceção: