const fabricantes = ['Audi', 'Mercedes', 'BMW']

function imprimir (nome, indice) {
    console.log(`${indice + 1} ${nome} `)
}

fabricantes.forEach(imprimir)

for (let a = 0; a < 100; a++) {
    console.log(a++)
}