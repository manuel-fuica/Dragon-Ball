

// let menuToggle = document.getElementById("menu-toggle");
// let navbar = document.getElementById("navbar");

// function toggleMenu(){
//     navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'block' : 'none';
// }

// menuToggle.addEventListener('click', toggleMenu);

// Mostrar el botón al hacer scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
    } else {
    document.getElementById("myBtn").style.display = "none";
    }
}

// Subir al principio de la página
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}