const gumb = document.querySelector(".hamburger");
const izbornik = document.querySelector("header nav ul");

gumb.addEventListener("click", ()=>{
    izbornik.classList.toggle("otvoreno");
    if(izbornik.classList.contains("otvoreno"))
    {
        gumb.textContent = "✕";
    }
    else{
        gumb.textContent = "☰"
    }
});