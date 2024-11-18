class ContaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
      this.nome = nome;
      this.idade = idade;
      this.salario = salario;
      this.sexo = sexo;
      this.agencia = agencia;
      this.conta = conta;
      this.numeroConta = numeroConta;
    }
  
    
    contaPoupanca() {
      this.salario -= this.salario * 1.5 / 100;
      console.log(`Conta Poupança: salário após taxa R$ ${this.salario.toFixed(2)}`);
    }
  
    contaCorrente() {
      this.salario -= this.salario * 3.6 / 100;
      console.log(`Conta Corrente: salário após taxa R$ ${this.salario.toFixed(2)}`);
    }
  
    contaEstudante() {
      this.salario -= this.salario * 1.2 / 100;
      console.log(`Conta Estudante: salário após taxa R$ ${this.salario.toFixed(2)}`);
    }

    exibirInformacoes() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Idade: ${this.idade}`);
      console.log(`Sexo: ${this.sexo}`);
      console.log(`Agência: ${this.agencia}`);
      console.log(`Conta: ${this.conta}`);
      console.log(`Número da Conta: ${this.numeroConta}`);
      console.log(`Salário Atual: R$ ${this.salario.toFixed(2)}`);
    }
  }
  
  
  let contaPoupanca = new ContaBancaria("Alessandra", 40, 2500, "Feminino", "2706", "Poupança", "19714803");
  contaPoupanca.exibirInformacoes();
  contaPoupanca.contaPoupanca();
  
 
  let contaCorrente = new ContaBancaria("Eduarda", 20, 3000, "Feminino", "0401", "Estudante", "09427939");
  contaCorrente.exibirInformacoes();
  contaCorrente.contaCorrente();
  

  let contaEstudante = new ContaBancaria("Mauricio", 62, 5000, "Masculino", "4321", "Corrente", "1122334455");
  contaEstudante.exibirInformacoes();
  contaEstudante.contaEstudante();
  