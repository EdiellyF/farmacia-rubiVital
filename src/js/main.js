import { menuShow} from './menuShow.js';
import {Carousel} from './Carrosel.js'

// Adicionando o evento de clique ao ícone do menu
document.getElementById('mobile-menu-icon').addEventListener('click', () => {
    // Instanciando a classe com o ID do elemento
    const mobileMenuToggle = new menuShow('#mobile-menu');
    mobileMenuToggle.init();
});


new Carousel('.carousel-item', '#prev', '#next');


const med = document.querySelector(".produtos-container")


 fetch("/data/earn.json").then((response) => {
    response.json().then((medicine) => {
        medicine.medicamentos.map((remedio) => {
            const produto = document.createElement('div');
            produto.classList.add('produto-card')
           
           

            produto.innerHTML = `
            <img src="${remedio.img}" alt="${remedio.nome}">
            <h2>${remedio.nome}</h2>
            <p>Preço: R$${remedio.preco}</p>
        `; 


            med.appendChild(produto)
        })
   
        })
 })


