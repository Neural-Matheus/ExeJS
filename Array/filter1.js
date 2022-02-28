const produto = [
    {nome: 'Notebook', 'preco': 2499, 'fragil': true},
    {nome: 'Ipad Pro', 'preco': 4199, 'fragil': true},
    {nome: 'Copo de Vidro', 'preco': 12.49, 'fragil': true},
    {nome: 'Copo de Plástico', 'preco': 18.99, 'fragil': false}
]


const callBack1 = (p) => p.preco >= 500
const callback2 = (p) => p.fragil = true
console.log(produto.filter(callBack1).filter(callback2))


console.log(produto.filter((p) => {
    return p.fragil = true && p.preco > 500
}))

