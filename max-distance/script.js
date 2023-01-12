function processData(input) {


    const linhas = input.trim().split("\n")


    let distanciaTotal = 0;
    let maiorDistancia = 0;
    const n = linhas[0];
    const coordenadas = [];
    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(' ');
        coordenadas.push({
            x: parseFloat(coord[0], 10),
            y: parseFloat(coord[1], 10)
        })

        for (let i = 0; i < coordenadas.length; i++) {
            for (let j = 1; j < coordenadas.length; j++) {
                distanciaTotal = Math.pow(coordenadas[i].x - coordenadas[j].x, 2) + Math.pow(coordenadas[i].y - coordenadas[j].y, 2)
                if (distanciaTotal > maiorDistancia) {

                    maiorDistancia = distanciaTotal

                }
            }
        }
    }
    console.log(Math.pow(maiorDistancia, 0.5))

}

processData('5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7')