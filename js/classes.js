class Partida {
    #jogador1;
    #jogador2;

    constructor(jogador1, jogador2) {
        this.#jogador1 = jogador1;
        this.#jogador2 = jogador2;
    }

    iniciarPartida() {
        do {
            let acao = prompt(`${this.#jogador1.nome} escolha sua ação\n1. Atacar \n2. Curar`);
            this.executarAcao(this.#jogador1, this.#jogador2, acao);
            this.placar();
            this.verificarProximoJogador();

        } while (this.verificarAndamento())
    }

    verificarProximoJogador() {
        let aux = this.#jogador1
        this.#jogador1 = this.#jogador2
        this.#jogador2 = aux
    }

    executarAcao(jogador, alvo, acao) {
        if (acao == "1") {
            jogador.atacar(alvo)
        } else if (acao == "2") {
            jogador.curar()
        }
    }

    verificarAndamento() {
        if (this.#jogador1.vida <= 0 || this.#jogador2.vida <= 0)
            return false
        else
            return true
    }

    placar(){-
        console.log(`------- Placar -------`)
        console.log(`${this.#jogador1.nome} ${this.#jogador1.vida}  X  ${this.#jogador2.nome} ${this.#jogador2.vida}`)
    }
}

class Jogador {
    #nome; 
    #vida;
    #ataque;

    constructor(nome, vida, ataque) {
        this.#nome = nome;
        this.#vida = vida;
        this.#ataque = ataque;

    }

    get nome() {
        return this.#nome;
    }
    get vida() {
        return this.#vida;
    }
    get ataque() {
        return this.#ataque;
    }

    curar() {
        let cura = 0.10 * this.vida
        this.#vida = this.#vida + cura
        console.log(`${this.#nome} curou ${cura} e agora tem ${this.#vida} de vida`)
    }

    atacar(alvo) {
        console.log(`${this.#nome} Atacou ${alvo.nome}`)
        alvo.receberDano(this.#ataque)
        console.log(`${alvo.nome} sofreu ${this.#ataque} de dano`)
       
    }

    receberDano(dano) {
        this.#vida -= dano
    }

}
