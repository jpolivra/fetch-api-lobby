const texto = document.querySelector("#texto");
const botao = document.querySelector("#randomize");
console.log(texto);

function swipeText(data) {
  texto.innerText = data.value;
}

function randomQuote() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => swipeText(data));
}

randomQuote();

botao.addEventListener("click", randomQuote);
