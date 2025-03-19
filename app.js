const ingresaAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ListaAmigosF = document.getElementById("listaAmigos");
const ResultadoF = document.getElementById("resultado");

function agregarAmigo(){
    
    if(ingresaAmigo.value == ""){
        alert("El campo de nombre esta vacio")
    }else{
    listaAmigos.push(ingresaAmigo.value);
    ListaAmigosF.innerHTML += `<li>${ingresaAmigo.value}</li>`;
    
    }  
};
function sortearAmigo(){
    const random = Math.floor(Math.random()*listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ResultadoF.innerHTML = `<li>${amigoSecreto}</li>`;
};

