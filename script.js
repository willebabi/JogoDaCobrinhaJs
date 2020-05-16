let vplano = document.getElementById("plano");
let vctx   = vplano.getContext("2d");
let vbox = 32;
let vcobra = [];
vcobra[0] = {
    x: 8 * vbox,
    y: 8 * vbox
}
function criarBG () {
    vctx.fillStyle = "lightgreen";
    vctx.fillRect(0,0,16 * vbox,16 * vbox);
}

function criaCobra () {
    for (i=0; i < vcobra.length; i++) {
        vctx.fillStyle = "green";
        vctx.fillRect(vcobra[i].x,vcobra[i].y,vbox,vbox);
    }
}

criarBG();