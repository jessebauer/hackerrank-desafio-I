function solucao(lista) {
    let menorIdade = 0
    for (idade of lista) {
        if (idade >= 18) {
            if (menorIdade > idade || menorIdade === 0) {
                menorIdade = idade;
            }
        }
    }
    if (menorIdade != 0) {
        console.log(menorIdade)
    } else if (menorIdade === 0) {
        console.log('CRESCA E APARECA')


    }

}
solucao([1, 2, 4, 19, 20])