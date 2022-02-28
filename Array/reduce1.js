const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {none: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function (aculumulador, atual) {
    console.log(aculumulador, atual) 
    return aculumulador + atual
})