const profissoes = ["Pedreiro", "pintor", "Gesseiro", "Carpinteiro", "Ajudante"]

const profissoesComP = profissoes.reduceRight((acumulador, profissao) => {
  if (profissao.toLowerCase().startsWith("p")) {
    acumulador.push(profissao)
  }
  return acumulador
}, [])

console.log(profissoesComP.reverse())
console.log(profissoes)