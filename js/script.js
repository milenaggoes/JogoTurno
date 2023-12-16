console.log("=== Jogo de Turno ===")

const jogador1 = new Jogador("Tieta", 100, 20);
const jogador2 = new Jogador("Tião", 100, 20);

const partida = new Partida(jogador1, jogador2);

function iniciar() {
    partida.iniciarPartida()
}