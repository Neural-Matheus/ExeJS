const notas = [9.2, 7.6, 5.3, 2.3, 8.4, 1.9]

//sem callback
const notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

const notasMenorQ7 = notas => notas < 7
notasBaixas4 = notas.filter(notasMenorQ7)
console.log(notasBaixas4)