document.addEventListener("DOMContentLoaded", function (){

    const menubtn = document.querySelector("#mopenicon");
    const sidebar = document.querySelector(".sidebar");

    menubtn.addEventListener("click", function (){

        sidebar.classList.add("active");
        menubtn.style.visibility = "hidden";
    })
    const closebtn = document.querySelector("#mclose");

    closebtn.addEventListener("click", function (){

        sidebar.classList.remove("active");
        menubtn.style.visibility = "visible";

    })

    
})

// .................user-review..............







  