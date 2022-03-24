const formulario = document.querySelector("form");

formulario.addEventListener("submit" , function(e){
e.preventDefault()

const name = document.querySelector(".name");

if(name.value == ""){
    alert("Campos em branco!")
}

});