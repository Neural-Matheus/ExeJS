Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produto = [
    {nome: 'Notebook', 'preco': 2499, 'fragil': true},
    {nome: 'Ipad Pro', 'preco': 4199, 'fragil': true},
    {nome: 'Copo de Vidro', 'preco': 12.49, 'fragil': true},
    {nome: 'Copo de Plástico', 'preco': 18.99, 'fragil': false}
]


const callBack1 = (p) => p.preco >= 500
const callback2 = (p) => p.fragil = true
console.log(produto.filter2(callBack1).filter2(callback2))


