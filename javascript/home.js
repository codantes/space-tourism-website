let navIcons = document.querySelectorAll(".nav-icons");
let menu = document.querySelector(".main-menu");
let menuBtn =document.querySelector(".menu-icon")
let closeBtn = document.querySelector(".close-icon"); 

navIcons[0].addEventListener("click", () =>{
        menu.className += " responsive";
        menuBtn.className += " inactive";
        closeBtn.className += "  responsive";
});


navIcons[1].addEventListener("click", () => {
    menu.className = "main-menu";
    menuBtn.className = "nav-icons menu-icons";
});

