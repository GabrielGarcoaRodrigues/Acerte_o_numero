const maiorValor = 1000
const menorValor = 1

const numeroSecreto = sorteio()

const elementoMenorValor = document.querySelector("#menor-valor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector("#maior-valor")
elementoMaiorValor.innerHTML = maiorValor

function sorteio (){
    return parseInt(Math.random() * maiorValor + 1)
}

console.log("Número Secreto:", numeroSecreto)


 