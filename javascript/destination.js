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


fetch("./data.json").then(function(resolve){
    return resolve.json();
}).then((data) => {
    const info = data;
    console.log(info.destinations[0]);
    let moon = document.querySelector("#moon");
    let mars = document.querySelector("#mars");
    let europa = document.querySelector("#europa");
    let titan = document.querySelector("#titan");
    let imgDisplay = document.querySelector(".destination-image");
    let nameDisplay = document.querySelector(".destination-name");
    let infoDisplay = document.querySelector(".destination-descrpt");
    let distanceDisplay = document.querySelector(".destination-dist");
    let timeDispaly = document.querySelector(".destination-time");

    moon.addEventListener("click", () => {
        imgDisplay.innerHTML = 
        `<img src="${info.destinations[0].images.png}"></img>`;
        nameDisplay.innerHTML = info.destinations[0].name;
        infoDisplay.innerHTML =info.destinations[0].description;
        distanceDisplay.innerHTML = info.destinations[0].distance;
        timeDispaly.innerHTML = info.destinations[0].travel;
    });

    mars.addEventListener("click", () => {
        imgDisplay.innerHTML = 
        `<img src="${info.destinations[1].images.png}"></img>`;
        nameDisplay.innerHTML = info.destinations[1].name;
        infoDisplay.innerHTML =info.destinations[1].description;
        distanceDisplay.innerHTML = info.destinations[1].distance;
        timeDispaly.innerHTML = info.destinations[1].travel;
    });

    europa.addEventListener("click", () => {
        imgDisplay.innerHTML = 
        `<img src="${info.destinations[2].images.png}"></img>`;
        nameDisplay.innerHTML = info.destinations[2].name;
        infoDisplay.innerHTML =info.destinations[2].description;
        distanceDisplay.innerHTML = info.destinations[2].distance;
        timeDispaly.innerHTML = info.destinations[2].travel;
    });

    titan.addEventListener("click", () => {
        imgDisplay.innerHTML = 
        `<img src="${info.destinations[3].images.png}"></img>`;
        nameDisplay.innerHTML = info.destinations[3].name;
        infoDisplay.innerHTML =info.destinations[3].description;
        distanceDisplay.innerHTML = info.destinations[3].distance;
        timeDispaly.innerHTML = info.destinations[3].travel;
    });
})

