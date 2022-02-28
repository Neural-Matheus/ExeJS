function tratarErroLancar (erro) {
    //throw new Error("Deu erro")
    //trow 10
    //trow true
    
}

function imprimirNomeGritado (obj) {
    try {
    console.log(obj.name.toUpperCase())
    }

    catch (e) {
        tratarErroLancar(e)
    }

}

const obj = {nome: "Roberto"}
imprimirNomeGritado(obj)