const alunos = [
    { nome: 'Ana', idade: 17, nota: 8, ano: '2°B' },
    { nome: 'Bruno', idade: 16, nota: 6, ano: '2°C' },
    { nome: 'Veronica', idade: 16, nota: 6, ano: '2°C' },
    { nome: 'Marta', idade: 15, nota: 5, ano: '3°C' },
    { nome: 'Brenno', idade: 19, nota: 6, ano: '3°C' },
    { nome: 'Maria', idade: 14, nota: 4, ano: '1°F' }
  ];
  
  console.log("Array completo de alunos:");
  console.log(alunos);
  
  const alunoBruno = alunos.find(aluno => aluno.nome === 'Bruno');
  console.log("\nInformações do aluno Bruno:");
  console.log(alunoBruno);
  
  const notaMaria = alunos.find(aluno => aluno.nome === 'Maria').nota;
  console.log("\nNota da Maria:");
  console.log(notaMaria);
  
  console.log("\nArray de alunos em formato JSON:");
  console.log(JSON.stringify(alunos, null, 2));
  