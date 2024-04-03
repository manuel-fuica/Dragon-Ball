

let menuToggle = document.getElementById("menu-toggle");
let navbar = document.getElementById("navbar");

function toggleMenu(){
    navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'block' : 'none';
}

menuToggle.addEventListener('click', toggleMenu);