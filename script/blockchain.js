export default function bitcoinInfo() {
  const valorDeCompra = document.querySelector("#valorCompra");
  const valorDeVenda = document.querySelector("#valorVenda");

  function test() {
    console.log(valorDeCompra, valorDeVenda)
  }

  function atribuirDados(data) {
    valorDeCompra.innerText = data.BRL.buy;
    valorDeVenda.innerText = data.BRL.sell;
  }
  
  function fetchBtc() {
    fetch("https://blockchain.info/ticker")
      .then((response) => response.json())
      .then((data) => {
        atribuirDados(data);
      });
  }
  
  fetchBtc();
  //test();
}






