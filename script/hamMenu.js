export default function hamMenu() {
    
}
const hamBtn = document.querySelector("#hamburguerBtn");
const navBar = document.querySelector("#navBar");
console.log(navBar)
function troggleMenu() {
    navBar.classList.toggle('ativo')
    hamBtn.classList.toggle('ativo')
}
hamBtn.addEventListener('click', troggleMenu);







