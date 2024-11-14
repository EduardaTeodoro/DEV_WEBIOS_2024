
// pega o elemento no html utilizando o id
let valor = document.getElementById('recebeValor');
// pega o elemento que mostrará o resultado utilizando o id
let resultado = document.getElementById('Tabuada');

const Tabuada = () => {
    // value serve para guardar o valor que está sendo digitado
    let guardaValor = valor.value;
    resultado.innerHTML = ''
    resultado.style.color ="black"

    if(guardaValor == ''){
        resultado.innerHTML = "insira um valor valido"
        resultado.style.color ="red"
    }
    resultado.innerHTML = ''; // Limpa o resultado anterior
    for (let i = 0; i <= 10; i++) {
        let resultadoTabuada = guardaValor * i;
        resultado.innerHTML += `${guardaValor} x ${i} = ${resultadoTabuada} <br>`;
    }
}

const Limpar = () => {
    resultado.innerHTML = '';
    valor.value = '';
    
}

