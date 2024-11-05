

// array de objetos
// let aluno = {
//     nome: 'eduarda',
//     idade: 20,
//     altura: 1.69,
//     isCracha: true,
//     isCamisa: false,
//     isChora: true,
//     cor: 'branca',
//     notas: [10,8,9,7,8.5]

// }
// // retornar o objeto
// console.log(aluno)

// // retornar o nome
// console.log(`o nome do aluno(a) é ${aluno.nome}`)

// // retorna apenas o campo isChora
// console.log(aluno.isChora)

console.clear()
let IOS = [
    {
        nome: 'eduarda',
        idade: 20,
        altura: 1.69,
        isCracha: true,
        isCamisa: false,
        isChora: true,
        cor: 'branca',
        notas: [10,8,9,7,8.5]
      
    },

    {
        nome: 'marcia',
        idade: 63,
        altura: 1.53,
        isCracha: false,
        isCamisa: false,
        isChora: true,
        cor: 'branca',
        notas: [8,5,9,7,6]
      
    },
    {
        nome: 'maria',
        idade: 27,
        altura: 1.165,
        isCracha: true,
        isCamisa: true,
        isChora: true,
        cor: 'amarela',
        notas: [2,5,9,10,6]
    }
]
  console.log(IOS)

// idade e nome do obj 1 e se o obj 2 tem cracha lembrando que a contagem inicia do 0
  console.log(IOS[1].idade, IOS[1].nome, IOS[2].isCracha)

//   for(i= 0; i <IOS.length; i++){
//     let login = ios[i]
//     if(login.isCracha == true){
//         console.log("O aluno tem cracha")
//         console.log(login.isCracha)
//     }else{
//         console.log("aluno não tem cracha")
//     }
//   }

console.clear()


let aluno = {
    nome: 'eduarda',
    idade: 20,
    altura: 1.69,
    isCracha: true,
    isCamisa: false,
    isChora: true,
    cor: 'branca',
    notas: [10,8,9,7,8.5]

}

// transformar o objeto em JSON
console.log(aluno)

console.log(JSON.stringify(aluno))

let Jsonito '{"nome":"eduarda","idade":20,"altura":1.69,"isCracha":true,"isCamisa":false,"isChora":true,"cor":"branca","notas":[10,8,9,7,8.5]}'
// JSON em objeto
console.log(JSON.parse(Jsonito))