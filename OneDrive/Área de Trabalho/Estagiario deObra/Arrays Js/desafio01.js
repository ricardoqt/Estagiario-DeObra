var notas = [10,6,8,7];
let somaDasNotas = 0
for (let i=0; i < notas.length; i++){
   somaDasNotas += notas[i];
}
var media = somaDasNotas/notas.length
console.log(`A média do aluno é ${media}`);