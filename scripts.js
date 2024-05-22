// Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// Depois de criada a lista:

// - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
// - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.


const estudantes = [
{   
    nome: "João",
    notaUm: 7,
    notaDois: 5,
},
{   
    nome: "Pedro",
    notaUm: 8,
    notaDois: 3,
},
{   
    nome: "Lucas",
    notaUm: 9,
    notaDois: 9,
},
{   
    nome: "Joaquim",
    notaUm: 8,
    notaDois: 7,
},
]

function media(notaUm, notaDois) {
    return ((notaUm + notaDois) / 2)
}

function medEstudante(estudante) {
   let aprovado = media(estudante.notaUm, estudante.notaDois)

    if (aprovado >= 7) {
    return `O estudante ${estudante.nome} possui a média ${aprovado} e foi aprovado
    `
    } 
    else {
        return `O estudante ${estudante.nome} possui a média ${aprovado} e não foi aprovado`
    }
}

for (let estudante of estudantes) {
    let mensagem = medEstudante(estudante)
    alert (mensagem)
}