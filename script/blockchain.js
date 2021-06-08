const valorAtual = document.querySelector("#valorAtual");
const valorAnterior = document.querySelector("#valorAnterior");

function atribuirDados(data) {
  valorAtual.innerText = data.BRL.buy;
  valorAnterior.innerText = data.BRL.last;
}

fetch("https://blockchain.info/ticker")
  .then((response) => {
    return response.json;
  })
  .then((data) => console.log(data));
