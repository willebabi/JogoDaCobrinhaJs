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
        vctx.fillStyle = "blue";
        vctx.fillRect(vcobra[i].x,vcobra[i].y,vbox,vbox);
    }
}


function iniciarJogo () {
    if (vcobra[0].x > 15 * vbox && vdirect == 'right') vcobra[0].x = 0;
    if (vcobra[0].x < 0 && vdirect == 'left') vcobra[0].x = 16 * vbox;
    if (vcobra[0].y > 15 * vbox && vdirect == 'down') vcobra[0].y = 0;
    if (vcobra[0].y < 0 && vdirect == 'up') vcobra[0].y = 16 * vbox;

    criarBG();
    criaCobra();

    let vcobrax = vcobra[0].x;
    let vcobray = vcobra[0].y;

    if (vdirect == 'right') vcobrax += vbox;
    if (vdirect == 'left') vcobrax -= vbox;
    if (vdirect == 'up') vcobray -= vbox;
    if (vdirect == 'down') vcobray += vbox;

    vcobra.pop();

    let novohead = {
        x:vcobrax,
        y:vcobray
    }

    vcobra.unshift(novohead);
}

function atualiza (e) {
    if (e.keyCode == 37 && vdirect != "right") {
        vdirect = "left";
    }
    if (e.keyCode == 38 && vdirect != "down") {
        vdirect = "up";
    }
    if (e.keyCode == 39 && vdirect != "left") {
        vdirect = "right";
    }
    if (e.keyCode == 40 && vdirect != "up") {
        vdirect = "down";
    }
}

document.addEventListener("keydown",atualiza);

let jogo = setInterval(iniciarJogo,100);