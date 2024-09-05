import { menuShow} from './menuShow.js';
import {Carousel} from './Carrosel.js'

// Adicionando o evento de clique ao ícone do menu
document.getElementById('mobile-menu-icon').addEventListener('click', () => {
    // Instanciando a classe com o ID do elemento
    const mobileMenuToggle = new menuShow('#mobile-menu');
    mobileMenuToggle.init();
});


new Carousel('.carousel-item', '#prev', '#next');




