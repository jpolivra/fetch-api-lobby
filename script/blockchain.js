const valorAtual = document.querySelector("#valorAtual");
const valorAnterior = document.querySelector("#valorAnterior");

function atribuirDados(data) {
  valorAtual.innerText = "R$ " + data.BRL.buy;
  valorAnterior.innerText = "R$ " + data.BRL.last;
}

function fetchBtc() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      atribuirDados(data);
    });
}

fetchBtc();

setInterval(fetchBtc, 30000);
