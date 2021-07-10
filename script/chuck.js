export default function gerarFrase() {

}

const texto = document.querySelector("#chuckText");
const botao = document.querySelector("#gerador");

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
