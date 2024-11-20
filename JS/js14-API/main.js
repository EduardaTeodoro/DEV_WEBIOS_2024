let URL = 'https://dog.ceo/api/breeds/image/random'

const DogApi = async () =>{
    // faço a consulta na API e retorno o JSON na variavel resp
 await fetch(URL).then((response) => {
  //transformar JSON recebido pelo FETCH em obj
  return response.json();
 }).then((response) => {
  // apresentar as informações para o usuario
  document.getElementById('mostraJSON').innerText = JSON.stringify(response);

  let image = `
    <img src="${response.message}" alt="">
    `

    document.getElementById('mostraIMG').innerHTML = image
 })
  
  // pegar o retorno em JSON e trnsformar ele em um OBJETO
  
// let exemplo = resp.json()
// console.log(exemplo);
}


