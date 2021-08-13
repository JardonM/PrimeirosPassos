var contador = 0;
var temporizador;

function contar() {
    contador++;
    var elementoContador = document.getElementById("contador");
    elementoContador.innerHTML = contador;
}

function clicouInicia() {
    if (temporizador == undefined) {
        temporizador = window.setInterval(contar, 1000);
    }
    var elementoInicia = document.getElementById("inicia");
    elementoInicia.addEventListener("click", clicouInicia);

}

function clicouPara() {
    window.clearInterval(temporizador);
    temporizador = undefined;
}