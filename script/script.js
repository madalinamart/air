const languageMenu = document.querySelector(".language__menu");
const language = document.querySelector("#language");


const showLanguage = () => {
    languageMenu.classList.toggle("active");
};

language.addEventListener("click", showLanguage);

const bookFlight = document.querySelectorAll(".flight");
const bookNow = document.querySelectorAll(".book");

const showBookFlight = () => { 
    bookNow.forEach( bookNow => bookNow.classList.add("activia") );      
};

const hideBookFlight = () => {
    bookNow.forEach( bookNow => bookNow.classList.remove("activia") ); 
}

bookFlight.forEach(function(e){
    e.addEventListener("mouseenter",showBookFlight);
});
   
bookFlight.forEach(function(e){
    e.addEventListener("mouseleave", hideBookFlight);
});
   




    


