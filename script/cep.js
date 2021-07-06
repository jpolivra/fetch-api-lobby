export default function cepInformation() {
  
}


const btnBuscador = document.querySelector("#buscador");
const entradaCep = document.querySelector("#entradaCep");
let valorCep;
btnBuscador.addEventListener("click", (event) => {
  event.preventDefault();
  valorCep = entradaCep.value;
  let url = `https://viacep.com.br/ws/${valorCep}/json/`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.erro) {
        alert("O endereço CEP digitado está incorreto");
        return;
      }
      let rua = document.querySelector("#rua");
      let bairro = document.querySelector("#bairro");
      let localidade = document.querySelector("#localidade");
      let uf = document.querySelector("#uf");
      let ddd = document.querySelector("#ddd");

      rua.innerText = data.logradouro;
      bairro.innerText = data.bairro;
      localidade.innerText = data.localidade;
      uf.innerText = data.uf;
      ddd.innerText = data.ddd;

      let tabela = document.querySelector("#tabela");
      tabela.classList.remove("ativo");
    }); 
});

console.log('test');
