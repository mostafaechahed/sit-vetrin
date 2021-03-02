function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide();

////Slider
let array=["We guarantee personalized attention to and the application",
 "together with the hygiene standards, to safety.",
 "DO YOU KNOW WHAT THE ADVANTAGES OF DENTAL IMPLANTS ARE?",
 "DENTAL IMPLANTS ARE CHANGING THE WAY PEOPLE LIVE."];

 let array1=["ARE YOU READY FOR A SMILE MAKEOVER?.",
 "together with the hygiene standards, to safety.",
 "Clinica Dental Tenerife of an international team ",
 "We guarantee to and the application"];
 let pos=0;
function next(){
    if(pos<array.length-1){
         pos++;
         document.getElementById('sd1').innerHTML=array[pos];
         document.getElementById('sd2').innerHTML=array1[pos];
     }
 }
 function previous(){
    if(pos>0){
        pos--;
        document.getElementById('sd1').innerHTML=array[pos];
        document.getElementById('sd2').innerHTML=array1[pos];
    }
 }
 ///Email validation

