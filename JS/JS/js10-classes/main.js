class Aluno{
    constructor(nome, ano, altura, isCracha, iscamisa, cor){
        this.nome = nome,
        this.ano = ano,
        this.altura = altura,
        this.isCracha = isCracha,
        this.iscamisa = iscamisa,
        this.cor = cor;

    }
    retornaIdade(){
        let dataCompleta = new Date();
        let pegaAno = dataCompleta.getFullYear
        ()
        return 2024 - this.ano 
    }
 }

let Aluno1 = new Aluno("eduarda", 2004, 1.69, true, true, "branca")


let Aluno2 = new Aluno("cleiton", 1982, 1.52, false, true, "amarelo")

console.log(Aluno1)
console.log(`a idade da eduarda é ${Aluno1.retornaIdade()}`)
// console.log(Aluno2.nome)