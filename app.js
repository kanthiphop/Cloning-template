window.addEventListener("scroll", function(){
    var header = this.document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 50)
})

var NavBar =  document.getElementById("NavBar")

function showMenu(){
    NavBar.style.left = "-20px";
}

function hideMenu(){
    NavBar.style.left = "-300px";
}
