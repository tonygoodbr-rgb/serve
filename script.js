const mundo = document.getElementById('mundo');
let posX = 0;
let posY = 0;
let velocidade = 8; // Ajuste a velocidade aqui

// Objeto para controlar quais teclas estão pressionadas
const teclas = {
    w: false, s: false, a: false, d: false,
    ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false
};

// Função de atualização (Loop do Jogo)
function update() {
    if (teclas.w || teclas.ArrowUp) posY += velocidade;
    if (teclas.s || teclas.ArrowDown) posY -= velocidade;
    if (teclas.a || teclas.ArrowLeft) posX += velocidade;
    if (teclas.d || teclas.ArrowRight) posX -= velocidade;

    // Aplica o movimento no cenário
    mundo.style.backgroundPosition = `${posX}px ${posY}px`;

    // Chama o próximo frame (isso faz rodar liso a 144fps no RedMagic)
    requestAnimationFrame(update);
}

// Inicia o loop
requestAnimationFrame(update);

// --- ESCUTA DO TECLADO (PC) ---
document.addEventListener('keydown', (e) => {
    if (teclas.hasOwnProperty(e.key)) teclas[e.key] = true;
});

document.addEventListener('keyup', (e) => {
    if (teclas.hasOwnProperty(e.key)) teclas[e.key] = false;
});

// --- CONTROLES DE TOQUE (MOBILE) ---
function configurarBotao(id, teclaEquivalente) {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            teclas[teclaEquivalente] = true;
        });
        btn.addEventListener('touchend', () => {
            teclas[teclaEquivalente] = false;
        });
    }
}

configurarBotao('btn-up', 'w');
configurarBotao('btn-down', 's');
configurarBotao('btn-left', 'a');
configurarBotao('btn-right', 'd');