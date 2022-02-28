//Exemplo de callback no browser 
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu')
}

document.getElementsByTagName('body')[0].onmouseover = function (a) {
    console.log('Você passou o mouse')
}