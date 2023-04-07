const nomes = ["Ricardo", "Hélio", "Leonardo"]

nomes.forEach(function(nome){
    console.log(nome)
})

// arrow function: método mais usado no mercado para declarar uma função callback
nomes.forEach((nome) => {
    console.log(nome)
})