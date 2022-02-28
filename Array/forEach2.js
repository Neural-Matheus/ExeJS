Array.prototype.forEach2 = function (calback) {
    for(i = 0; i < this.length; i++) {
        callback(`${i + 1} ${this[i]}`)
    } 
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']



aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1} ${nome}`)
})