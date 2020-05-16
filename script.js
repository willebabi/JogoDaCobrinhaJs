let vplano = document.getElementById("plano");
let vctx   = vplano.getContext("2d");
let vbox = 32;
let vcobra = [];
vcobra[0] = {
    x: 8 * vbox,
    y: 8 * vbox
}
let vdirect = "right";
let vcomida = {
    x: Math.floor(Math.random() * 15 + 1) * vbox,
    y: Math.floor(Math.random() * 15 + 1) * vbox
};

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

    for (i=1; i < vcobra.length; i++) {
        if (vcobra[0].x == vcobra[i].x && vcobra[0].y == vcobra[i].y) {
            clearInterval(jogo);
            alert("Game OVER! :(");
        }
    }

    criarBG();
    criaCobra();
    ponto();

    let vcobrax = vcobra[0].x;
    let vcobray = vcobra[0].y;

    if (vdirect == 'right') vcobrax += vbox;
    if (vdirect == 'left') vcobrax -= vbox;
    if (vdirect == 'up') vcobray -= vbox;
    if (vdirect == 'down') vcobray += vbox;

    if (vcobrax != vcomida.x || vcobray != vcomida.y) {
        vcobra.pop();
    } else {
        vcomida.x = Math.floor(Math.random() * 15 + 1) * vbox;
        vcomida.y = Math.floor(Math.random() * 15 + 1) * vbox;
    }

    let novohead = {
        x:vcobrax,
        y:vcobray
    }

    vcobra.unshift(novohead);
}

function ponto () {
    vctx.fillStyle = "red";
    vctx.fillRect(vcomida.x,vcomida.y,vbox,vbox);
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

let jogo = setInterval(iniciarJogo,300);