function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}


console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))


function notas (nota1, nota2, nota3, nota4) {
    const soma = nota1 + nota2 + nota3 + nota4 / 4
    if (soma >= 7) {
        console.log("Aprovado")
    }
    else {
        console.log("Reprovado")
    }
    return soma
}

console.log(notas(7, 7, 7, 7))