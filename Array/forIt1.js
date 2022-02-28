const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach((nome, indice) => console.log(indice + 1))

const callBack = (nome, indice) => console.log(`${indice + 1} ${nome}`)
aprovados.forEach(callBack)

