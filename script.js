let navMenu = document.querySelector(".menu-navbar");
let navBanner = document.querySelector(".banner");

function nav(){
    if(navMenu.style.display === "flex"){
        navMenu.style.display = "none";
        navBanner.style.top = "0px";
    }else{
        navMenu.style.display = "flex"; 
        navBanner.style.top = "70px";
    }
}