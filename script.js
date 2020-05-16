let vplano = document.getElementById("plano");
let vctx   = vplano.getContext("2d");
let vbox = 32;
let vcobra = [];
vcobra[0] = {
    x: 8 * vbox,
    y: 8 * vbox
}
let vdirect = "right";

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

function iniciarJogo () {
    criarBG();
    criaCobra();

    let vcobrax = vcobra[0].x;
    let vcobray = vcobra[0].y;

    if (vdirect == 'right') vcobrax += vbox;
    if (vdirect == 'left') vcobrax -= vbox;
    if (vdirect == 'up') vcobray -= vbox;
    if (vdirect == 'down') vcobray += vbox;

    vcobrax.pop();

    let novohead = {
        x:vcobrax,
        y:vcobray
    }

    vcobra.unshift(novohead);
}

let jogo = setInterval(iniciarJogo,100);