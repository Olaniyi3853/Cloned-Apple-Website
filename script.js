
// Toggling for Mobile

let mobile_menus = document.querySelectorAll(".mobile_menus");

mobile_menus.forEach((menus)=>{
    menus.addEventListener("click", function(){
        menus.classList.toggle("active");
    })
});


//disabling of strolling while on mobile 



let showMenu1 = document.querySelector(".showMenu1");

let menu1 = document.querySelector(".mobile_sub-menu_1");
let body = document.querySelector("body");



showMenu1.addEventListener("click", function (){
    menu1.style.right = "0";
    body.classList.add("hidden"); 
});



let closeMenu = document.querySelector(".cancel");

closeMenu.addEventListener("click", function(){
    menu1.style.right = "-100%"
    body.classList.remove("hidden"); 
});

//




let showMenu2 = document.querySelector(".showMenu2");

let menu2 = document.querySelector(".mobile_sub-menu_2");




showMenu2.addEventListener("click", function (){
    menu2.style.right = "0";
    body.classList.add("hidden"); 
});



let closeMenu2 = document.querySelector(".cancel2");

closeMenu2.addEventListener("click", function(){
    menu2.style.right = "-100%"
    body.classList.remove("hidden"); 
});



//

let showMenu3 = document.querySelector(".showMenu3");

let menu3 = document.querySelector(".mobile_sub-menu_3");



showMenu3.addEventListener("click", function (){
    menu3.style.right = "0";
    body.classList.add("hidden"); 
});



let closeMenu3 = document.querySelector(".cancel3");

closeMenu3.addEventListener("click", function(){
    menu3.style.right = "-100%"
    body.classList.remove("hidden"); 
});