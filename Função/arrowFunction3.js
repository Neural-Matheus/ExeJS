let compararThis = function (param) {
    console.log(this === param)
}

compararThis(global)

const obj = {}
compararThis = compararThis.bind(obj)
compararThis(global)

compararThisArrow = (param2) => console.log(this === param2)
compararThisArrow(global)
compararThisArrow(module.exports)

compararThisArrow = compararThisArrow.bind(obj)
compararThisArrow(obj)
compararThisArrow(module.exports)