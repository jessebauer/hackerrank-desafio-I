function processData(input) {
    const senhaESenhaDigitada = input.split('\n')
    const senhaCorreta = senhaESenhaDigitada[0]
    const senhaDigitada = senhaESenhaDigitada[1]
    let verificador = 0
    for (let letra of senhaDigitada) {
        if (letra == senhaCorreta[verificador]) {
            verificador++
        }
    }
    verificador == senhaCorreta.length ? console.log('SIM') : console.log('NAO')
}
processData('cubos\newvelrabsocaeln')    