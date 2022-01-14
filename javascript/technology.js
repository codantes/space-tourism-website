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

let names = document.querySelector(".tech-vehicle");
let image = document.querySelector(".tech-img");
let descript = document.querySelector(".tech-descript");
let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let btn3 = document.querySelector(".btn-3");

fetch('./data.json').then(function (resolve) {
    return resolve.json();
}).then((data) => {
    const info = data.technology;

    btn1.addEventListener("click", () =>{
        names.innerHTML =  info[0].name;
        image.innerHTML = `<img src="${info[0].images.landscape}">`;
        descript.innerHTML = info[0].description;
        btn1.className += " btn-active";
        btn2.className = "btn-2";
        btn3.className = "btn-3";
    });

    
    btn2.addEventListener("click", () =>{
        names.innerHTML =  info[1].name;
        image.innerHTML = `<img src="${info[1].images.landscape}"></img>`;
        descript.innerHTML = info[1].description;
        btn1.className = "btn-1";
        btn2.className += " btn-active";
        btn3.className = " btn-3";
    });

    
    btn3.addEventListener("click", () =>{
        names.innerHTML =  info[2].name;
        image.innerHTML = `<img src="${info[2].images.landscape}">`;
        descript.innerHTML = info[2].description;
        btn1.className = "btn-1";
        btn2.className = "btn-2";
        btn3.className += " btn-active";
    });
});