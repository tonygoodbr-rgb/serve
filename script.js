const mundo = document.getElementById('mundo');
const teclas = {};
let fX = 0, fY = 0, vel = 8;

// Controle de Teclado (PC)
window.onkeydown = (e) => teclas[e.key.toLowerCase()] = true;
window.onkeyup = (e) => teclas[e.key.toLowerCase()] = false;

// Controle de Toque (Celular/Tablet)
function addTouch(id, t) {
    const b = document.getElementById(id);
    if(!b) return;
    b.ontouchstart = (e) => { e.preventDefault(); teclas[t] = true; };
    b.ontouchend = () => teclas[t] = false;
    b.onmousedown = () => teclas[t] = true;
    b.onmouseup = () => teclas[t] = false;
}

addTouch('btn-up', 'w');
addTouch('btn-down', 's');
addTouch('btn-left', 'a');
addTouch('btn-right', 'd');

function loop() {
    if (teclas.w || teclas.arrowup) fY += vel;
    if (teclas.s || teclas.arrowdown) fY -= vel;
    if (teclas.a || teclas.arrowleft) fX += vel;
    if (teclas.d || teclas.arrowright) fX -= vel;

    mundo.style.backgroundPosition = `${fX}px ${fY}px`;
    requestAnimationFrame(loop);
}
loop();