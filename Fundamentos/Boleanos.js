let IsAtivo = false
console.log(IsAtivo)

IsAtivo = true
console.log(IsAtivo)


IsAtivo = 1
console.log(!!IsAtivo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(IsAtivo = true))

console.log('Os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(IsAtivo = false))

console.log("Pra finalizar...")
console.log(!!('' || null || 0 || ' '))


let nome = ''

console.log(nome || "Desconhecido")

let nome2 = "Lucas"

console.log(nome || "Desconhecido")