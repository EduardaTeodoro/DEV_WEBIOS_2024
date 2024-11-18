function calcularNovoSalario() {
    const salarioAtual = parseFloat(document.getElementById('salarioAtual').value);
  
    if (isNaN(salarioAtual) || salarioAtual <= 0) {
      alert("insira um salário ");
      return;
    }
  
    const aumento = salarioAtual * 0.17;
    const reajuste = 215;
    const novoSalario = salarioAtual + aumento + reajuste;
  
    document.getElementById('resultado').innerHTML = `Novo salário: R$ ${novoSalario.toFixed(2)}`;
  }
  