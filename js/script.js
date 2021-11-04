/*const eachHeight = () => {
    let windowHeight = window.innerHeight;
    document.getElementById("wraper").style.height = String(windowHeight) + "px";
    console.log()
}
eachHeight()

window.addEventListener("resize",function(){
    eachHeight()
});*/

/*flip card effect*/
const cards = document.querySelectorAll(".cardsingle");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard))