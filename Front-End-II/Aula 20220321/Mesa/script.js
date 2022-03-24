//EQUIPE 4
//Marcelo Garofalo
//Michel Picozzi
//Ángel Antonio Ontiveros Porras
//Tiago Guerreiro
//Murillo Paulino Zuffo
//Manuel Jose Pinero

const btn = document.getElementById("send")
btn.addEventListener("click", function(e){
e.preventDefault();

var name = document.getElementById("name");
var textName = name.value;

var lastName = document.getElementById("lastName");
var textLastName = lastName.value;

document.getElementById("dados").innerHTML += 
`
<p>${textName.toUpperCase()}</p>
<p>${textName.toLowerCase()}</p>
<p>${textName.trim()}</p>
<p>${textName.concat(" ", textLastName)}</p>
<p>${textName.replaceAll("a", "@").replaceAll("e", "3")}</p>

`
document.getElementById("dados").innerHTML += 
`
<p>${textLastName.toUpperCase()}</p>
<p>${textLastName.toLowerCase()}</p>
<p>${textLastName.trim()}</p>
<p>${textLastName.concat(" ", textName)}</p>
<p>${textLastName.replaceAll("a", "@").replaceAll("e", "3")}</p>
`
}
)





