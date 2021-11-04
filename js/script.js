let windowHeight = window.innerHeight;

const eachHeight = () => {
    document.getElementById("wraper").style.height = String(windowHeight) + "px";
}
eachHeight()

const innerHeight = () => {
    const gnb = document.querySelector(".gnb").clientHeight
    document.querySelector(".main_title").style.height = String(windowHeight)-gnb + "px";
}
innerHeight()

window.addEventListener("resize",function(){
    eachHeight()
    innerHeight()
});

/*flip card effect*/
const cards = document.querySelectorAll(".cardsingle");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard))