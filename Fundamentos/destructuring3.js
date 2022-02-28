function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {min: 40, max: 50}
console.log(rand(obj))
console.log(rand({max: 966 }))
console.log(rand({}))
//console.log(rand({min: 50, max: 40}))