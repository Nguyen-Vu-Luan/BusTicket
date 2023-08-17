const  toTop = document.querySelector(" .totop");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 300){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})

function loadIndex() {
    fetch("data/index.json").then(res => res.json()).then(data => {
        let d = document.getElementById("route");
        let re ="";
        for (let c of data)
        re += `<div class="name-route">${c.name}</div>
        <div class="flex  border">
            <img class="item" src="imgs/Vé Xe Khách.png" alt="An Giang">
            <div>
                <div class="info">Thời Gian dự kiến: ${c.time}. </div>
                <div class="info">Khoảng cách: ${c.distance}.</div>
                <button class="oder">Tiến hành đặt vé</button>
            </div>
        </div>`
        d.innerHTML += re;
    })
}

window.onload = () => {
    loadIndex();
}
