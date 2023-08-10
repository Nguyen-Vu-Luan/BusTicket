const  toTop = document.querySelector(" .totop");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 300){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})