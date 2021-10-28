const eachHeight = () => {
    let windowHeight = window.innerHeight;
    document.getElementById("wraper").style.height = String(windowHeight) + "px";
    console.log()
}
eachHeight()

window.addEventListener("resize",function(){
    eachHeight()
});