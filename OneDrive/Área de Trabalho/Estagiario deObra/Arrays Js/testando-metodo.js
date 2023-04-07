const nomes = ["kalutinho", "saori", "mahauts"]

const primeiraLetra = nomes.map(nome => {
    return nome.charAt(0).toUpperCase() + nome.slice(1);
})
console.log(primeiraLetra)