let vplano = document.getElementById("plano");
let vctx   = vplano.getContext("2d");
let vbox = 32;

function criarBG () {
    vctx.fillStyle = "lightgreen";
    vctx.fillRect(0,0,16 * vbox,16 * vbox);
}

criarBG();