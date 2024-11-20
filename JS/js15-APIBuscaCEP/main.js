let URL = "https://viacep.com.br/ws/01001000/json/"
let cep = document.getElementById('cep')

async function BuscaCEP(){
   let resp = await fetch(URL).then((response) => {
    // transformar JSON em OBJ
    return response.json();
   }).then((response) => {
    document.getElementById('cep').value = response.cep;
    document.getElementById('logradouro').value = response.logradouro;
    document.getElementById('complemento').value = response.complemento;
    document.getElementById('bairro').value = response.bairro;
    document.getElementById('estado').value = response.estado;

   })

   let exemplo = resp.json();
   console.log(exemplo);
}

BuscaCEP();