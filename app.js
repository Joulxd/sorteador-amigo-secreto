let amigos = [];

function obtenerElemento(id){
    return document.getElementById(id);
}

function obtenerTexto(id){
    return obtenerElemento(id).value;
}

function limpiarTexto(id){
    obtenerElemento(id).innerHTML = "";
}

function limpiarValor(id){
    obtenerElemento(id).value = "";
}

function llenarElementoTexto(elemento, texto){
    obtenerElemento(elemento).innerText = texto;
}

function agregarAmigo(){
    let nombre = obtenerTexto("amigo");
    if (nombre !== ""){
        amigos.push(nombre);
        limpiarValor("amigo");
        actualizarLista();
    }else{
        alert("El nombre no puede estar vacío");
    }
}

function crearElementoLista(lista, texto){
    let li = document.createElement("li");
    li.innerText = texto;
    lista.appendChild(li);
}

function actualizarLista(){
    let lista = obtenerElemento("listaAmigos");
    limpiarTexto("listaAmigos");
    for(let i = 0; i < amigos.length; i++){
        crearElementoLista(lista, amigos[i]);
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay amigos para sortear");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indice];
    llenarElementoTexto("resultado", amigoSeleccionado);

}




