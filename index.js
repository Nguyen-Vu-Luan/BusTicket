const  toTop = document.querySelector(" .totop");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 300){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})

//chỉnh ngày hiện tại
var Date = new Date();
      
    // Ngày hiện tại
    var curDay = curDate.getDate();
 
    // Tháng hiện tại
    var curMonth = curDate.getMonth() + 1;
      
    // Năm hiện tại
    var curYear = curDate.getFullYear();
 
    // Gán vào thẻ HTML
    document.getElementById('date').innerHTML = curDay + "/" + curMonth + "/" + curYear;