// Afficher / Masquer le menu
let menuBtn = document.getElementById('menuToggle');
let mainNav = document.querySelector('.mainNav');
menuBtn.addEventListener('click', ()=>{
    mainNav.classList.toggle('mainNav-view');
}, false);

let mainNavLinks = document.querySelectorAll('.mainNav a');
mainNavLinks.forEach((field)=>{
    field.addEventListener('click', ()=>{
        mainNav.classList.remove('mainNav-view');
    }, false);
});
