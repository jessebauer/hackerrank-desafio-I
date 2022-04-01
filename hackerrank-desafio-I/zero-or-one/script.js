const pessoas = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]


function solucao(jogadores) {
    let valorSomado = 0
    for (let jogador of jogadores) {
        valorSomado += jogador.jogada
    }
    if (valorSomado === 1) {
        for (let jogador of jogadores) {
            if (jogador.jogada === 1) {
                console.log(jogador.nome)
            }
        }



    } else if (valorSomado == jogadores.length - 1) {
        for (let jogador of jogadores) {
            if (jogador.jogada == 0) {
                console.log(jogador.nome)
            }
        }
    } else {
        console.log('NINGUEM')
    }

}
solucao(pessoas)