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

//sticky menu
var logoPos = $(".logo").offset().left; // lưu vị trí ban đầu

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) { // thay đổi số này để điều chỉnh thời điểm cố định nội dung
        $(".logo").css({"position": "fixed", "top": "0", "left": logoPos + "px", "z-index": "9999", "background-color": "#20b2aa", "border-bottom-left-radius": "10px", "border-bottom-right-radius": "10px",});
    } else {
        $(".logo").css({"position": "relative", "left": "auto", "background-color": "transparent", "width": "100%"});
    }
});

