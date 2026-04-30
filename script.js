const mundo = document.getElementById('mundo');
const vel = 8;
const teclas = {};

// Variáveis para controlar a posição do fundo
let fundoX = 0;
let fundoY = 0;

window.onkeydown = (e) => teclas[e.key.toLowerCase()] = true;
window.onkeyup = (e) => teclas[e.key.toLowerCase()] = false;

function loop() {
    // Se andar para direita, o fundo vai para esquerda
    if (teclas.w || teclas.arrowup) fundoY += vel;
    if (teclas.s || teclas.arrowdown) fundoY -= vel;
    if (teclas.a || teclas.arrowleft) fundoX += vel;
    if (teclas.d || teclas.arrowright) fundoX -= vel;
    
    // Aplica o movimento apenas no fundo da imagem
    // Isso faz a grama "correr" infinitamente
    mundo.style.backgroundPosition = `${fundoX}px ${fundoY}px`;
    
    requestAnimationFrame(loop);
}

loop();