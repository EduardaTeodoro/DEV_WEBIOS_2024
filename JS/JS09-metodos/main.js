// let frutas = ["banana", "morango", "melancia", "uva", "kiwi", "maracuja", "maça", "pera" ]

// frutas.forEach((valor, indice) => {
//     console.log(valor);
//     console.log(indice)

// })

// frutas.forEach(percorrer)
// //                conteudo  indice
// function percorrer(valor, indice){
//     console.log(valor);
//     console.log(indice)

// }

// for(i = 0; i <= frutas.length ; i++){
// console.log(frutas[i]); //valor da posição
// console.log(i) //numero da posição
// }

console.clear

// array de marcas de celulares com 6 posiçoes > numeros
let numeros = [4, 18, 44, 56, 36, 25,  ]

//trazer a raiz quadrada de cada numero
let numerosDois = numeros.map(Math.sqrt)
let menorNumero = Math.min.apply(Math, numeros)
// console.log(numeros)
// console.log(numerosDois)
console.log(menorNumero)

let filtraNumero = numeros.filter((valor) =>{
    return valor >= 25
})

console.log(filtraNumero)

console.clear

let tarefa = [
    {
        tarefa: "dormir",
        isFeita: true 
    },
    {
        tarefa: "limpar",
        isFeita: false
    },
    {
        tarefa: "torcer",
        isFeita: true
    }
]   

let retornaTrue = tarefa.find((item) => {
    return item.isFeita === true

})
console.log(retornaTrue)