const btnBuscador = document.querySelector("#buscador");
const entradaCep = document.querySelector("#entradaCep");
let valorCep;
const rua = btnBuscador.addEventListener("click", (event) => {
  event.preventDefault();
  valorCep = entradaCep.value;
  console.log(valorCep);
  let url = `https://viacep.com.br/ws/${valorCep}/json/`;
  console.log(url);
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.erro) {
        alert("O endereço CEP digitado está incorreto");
        return;
      }
      let cep = document.querySelector("#cep");
      let rua = document.querySelector("#rua");
      let complemento = document.querySelector("#complemento");
      let bairro = document.querySelector("#bairro");
      let localidade = document.querySelector("#localidade");
      let uf = document.querySelector("#uf");
      let ddd = document.querySelector("#ddd");

      cep.innerText = "Cep: " + data.cep;
      rua.innerText = "Rua: " + data.logradouro;
      complemento.innerText = "Complemento: " + data.complemento;
      bairro.innerText = "Bairro: " + data.bairro;
      localidade.innerText = "Localidade: " + data.localidade;
      uf.innerText = "UF: " + data.uf;
      ddd.innerText = "DDD: " + data.ddd;

      let tabela = document.querySelector("#tabela");
      tabela.classList.add("ativo");
    });
});
