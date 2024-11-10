let numeros = [17, 43, 8, 4, 97, 56, 29, 95 ]

function ImparPar(valor) {
    if (valor % 2 === 0) {
        console.log(valor + " é par");
      } else {
        console.log(valor + " é ímpar");
      }
    }
    numeros.forEach(ImparPar);

