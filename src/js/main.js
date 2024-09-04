import { menuShow} from './menuShow.js';

// Adicionando o evento de clique ao ícone do menu
document.getElementById('mobile-menu-icon').addEventListener('click', () => {
    // Instanciando a classe com o ID do elemento
    const mobileMenuToggle = new menuShow('#mobile-menu');
    mobileMenuToggle.init();
});

const items = document.querySelectorAll('.carousel-item');
let currentItem = 0;

document.getElementById('next').addEventListener('click', () => {
    items[currentItem].classList.remove('active');
    currentItem = (currentItem + 1) % items.length;
    items[currentItem].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
    items[currentItem].classList.remove('active');
    currentItem = (currentItem - 1 + items.length) % items.length;
    items[currentItem].classList.add('active');
});