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

let role = document.querySelector(".crew-role");
let name = document.querySelector(".crew-name");
let bio = document.querySelector(".crew-bio");
let image = document.querySelector(".crew-img");
let crew1 = document.querySelector(".dot-1");
let crew2 = document.querySelector(".dot-2");
let crew3 = document.querySelector(".dot-3");
let crew4 = document.querySelector(".dot-4");


fetch('./data.json').then(function (resolve) {
    return resolve.json();
}).then((data) => {
    const info = data.crew;
    console.log(info[0].images)
    crew1.addEventListener("click", () => {
        role.innerHTML = info[0].role;
        name.innerHTML = info[0].name;
        bio.innerHTML = info[0].bio;
        image.innerHTML = `<img src="${info[0].images.png}" alt="">`;
        crew1.className += " btn-active";
        crew2.className = "dot-2";
        crew3.className = "dot-3";
        crew4.className = "dot-4";
    });

    
    crew2.addEventListener("click", () => {
        role.innerHTML = info[1].role;
        name.innerHTML = info[1].name;
        bio.innerHTML = info[1].bio;
        image.innerHTML = `<img src="${info[1].images.png}" alt="">`;
        crew1.className = "dot-1";
        crew2.className += " btn-active";
        crew3.className = "dot-3";
        crew4.className = "dot-4";
    });

    
    crew3.addEventListener("click", () => {
        role.innerHTML = info[2].role;
        name.innerHTML = info[2].name;
        bio.innerHTML = info[2].bio;
        image.innerHTML = `<img src="${info[2].images.png}" alt="">`;
        crew1.className = "dot-1";
        crew2.className = "dot-2";
        crew3.className += " btn-active";
        crew4.className = "dot-4";
    });
    
    crew4.addEventListener("click", () => {
        role.innerHTML = info[3].role;
        name.innerHTML = info[3].name;
        bio.innerHTML = info[3].bio;
        image.innerHTML = `<img src="${info[3].images.png}" alt="">`;
        crew1.className = "dot-1";
        crew2.className = "dot-2";
        crew3.className = "dot-3";
        crew4.className += " btn-active";
    });

});

