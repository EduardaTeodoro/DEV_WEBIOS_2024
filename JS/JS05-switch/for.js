// let grupoAlunos = ['nicolas','andrew','pasti','caio']
// for (let contador = 0; contador <=5 ; contador++) {
//     console.log(`valor: ${contador}`);
// }

let a = 0, b = 1, proximo;

console.log("Sequência :");

while (a <= 34) {
    console.log(a);
    proximo = a + b; 
    a = b; 
    b = proximo; 
}
