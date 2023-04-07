const notas = [10, 9.5, 8, 7, 6]

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1 // operador ternário: Se a nota foi >= a 10 a condição é verdadeira e continua 10
})                                        // caso a condição seja falsa, a nota vai somar + 1


console.log(notasAtualizadas)