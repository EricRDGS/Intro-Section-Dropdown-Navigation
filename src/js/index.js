let spans = document.querySelectorAll("span");
let icons = document.querySelectorAll("i");
let menuItens = document.querySelectorAll("ul[class='to-hold']");
let menuMobile = document.getElementById("bars");
let navigation = document.getElementById("navigation");

function toggleMenu(index){
    spans[index].classList.toggle("actived");
    icons[index].classList.toggle("fa-angle-up");
    menuItens[index].classList.toggle("show");
};

spans.forEach((span, index) => {
    span.addEventListener("click", () => {
        toggleMenu(index);
    });
});

bars.addEventListener("click", () => {
    bars.classList.toggle("fa-x");
    navigation.classList.toggle("to-hold");
});