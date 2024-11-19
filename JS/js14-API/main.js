let URL = 'https://dog.ceo/api/breeds/image/random'

const DogApi = async () =>{
    // faço a consulta na API e retorno o JSON na variavel resp
  let resp = await fetch(URL);
  
  // pegar o retorno em JSON e trnsformar ele em um OBJETO
  
let exemplo = resp.json()
console.log(exemplo);
}

console.log(DogApi());
