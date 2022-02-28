const cali = 232093.2323 
const amo = -56543.4434
const soma = cali * cali

console.log(Number.isInteger(cali))
console.log(Number.isInteger(amo))
console.log(soma.toFixed(2))
console.log(soma.toString(2))

const mylove = "Eu adoro comer"

console.log(mylove.charAt(1))
console.log(mylove.charCodeAt(0))
console.log(mylove.indexOf('E'))
console.log(mylove.substring(0))
console.log(mylove.substring(1, 7))
console.log("Sou foda " .concat(mylove) .concat("!"))
console.log(`Sou foda ${mylove}`) 


const teste = `
    Gosto
    de
    ${mylove}`

console.log(teste)

const teste2 = `Sou foda pakarai e ${mylove}`
console.log(teste2)

let Isfoda = true

console.log(Isfoda)

Isfoda = false

console.log(Isfoda)

const numero = 300

console.log(!!numero)
//Exclamação é uma negação

const erick = ""
console.log(erick || "Não existe")

let array = [1.2, 9.4, 6.8, 2.2]
console.log(array)
console.log(array[0], array[3])

array[4] = 10


let testearray = [1.2, 23.23, 22992.23, 230290.2232]
console.log(testearray[2])

testearray[5] = 1203023
console.log(testearray)

testearray.push(1123, 203203, 2392392)
console.log(testearray)
console.log(testearray.pop())
delete teste[2]

console.log(array)

const objeto = {

    nome: "Sou foda",
    preco: 91023.2,
    desconto: 0.23

}

const objeto2 = {}
objeto2.nome = "Sou foda"
objeto.preco = 120320.2