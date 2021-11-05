let windowHeight = window.innerHeight;

const eachHeight = () => {
  document.getElementById("wraper").style.height = String(windowHeight) + "px";
};
eachHeight();

const innerHeight = () => {
  const gnb = document.querySelector(".gnb").clientHeight;
  document.querySelector(".main_title").style.height =
    String(windowHeight) - gnb + "px";
};
innerHeight();

window.addEventListener("resize", function () {
  eachHeight();
  innerHeight();
});

/*flip card effect*/
const cards = document.querySelectorAll(".cardsingle");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

var ml4 = {};
ml4.opacityIn = [0, 1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime
  .timeline({ loop: true })
  .add({
    targets: ".main-letter-1",
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: ".main-letter-1",
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay,
  })
  .add({
    targets: ".main-letter-2",
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: ".main-letter-2",
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay,
  })
  .add({
    targets: ".main-letter-3",
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: ".main-letter-3",
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay,
  })
  .add({
    targets: "main_txt",
    opacity: 0,
    duration: 500,
    delay: 500,
  });
