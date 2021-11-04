const eachHeight = () => {
    let windowHeight = window.innerHeight;
    document.getElementById("wraper").style.height = String(windowHeight) + "px";
    console.log()
}
eachHeight()

window.addEventListener("resize",function(){
    eachHeight()
});

/*flip card effect*/
const card = document.querySelectorAll(".card");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard))