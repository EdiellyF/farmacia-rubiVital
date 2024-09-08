import { menuShow} from './menuShow.js';
import {Carousel} from './Carrosel.js';
import { Remedio, Remedios, RemediosView } from './Remedio.js';


document.getElementById('mobile-menu-icon').addEventListener('click', () => {
    // Instanciando a classe com o ID do elemento
    const mobileMenuToggle = new menuShow('#mobile-menu');
    mobileMenuToggle.init();
});


new Carousel('.carousel-item', '#prev', '#next');

new Carousel('.carousel-text', '#anterior', '#proximo');


const remedios = new Remedios();



document.addEventListener('DOMContentLoaded', () => {
    // Adiciona evento ao botão de pesquisa desktop
    const botoesPesquisa = document.querySelectorAll('.pesquisar');
    botoesPesquisa.forEach(botao => {
        botao.addEventListener('click', () => {
            const valorCampoPesquisa = document.querySelector('#search-input').value;
            realizarPesquisa(valorCampoPesquisa);
            window.location.href = "#medicamentos"
           

            setTimeout(function() {
                location.reload();
              }, 70000); 

        });
    });

    // Adiciona evento ao botão de pesquisa mobile
    const botoesPesquisaMobile = document.querySelectorAll('.pesquisar-mobile');
    botoesPesquisaMobile.forEach(botao => {
        botao.addEventListener('click', () => {
            const valorCampoPesquisaMobile = document.querySelector('#search-input-mobile').value;
            realizarPesquisa(valorCampoPesquisaMobile);
            window.location.href = "#medicamentos"
        });
    });




    function realizarPesquisa(valor) {
        if (valor != undefined) {
            const viewRemedio = new RemediosView(remedios.getRemedio());
            viewRemedio.pesquisarRemedio(valor);
    
           
        } else {
           alert('Campo de pesquisa vazio');
        }



    
    }
   
    


});

    





async function loadMedicamentos (){
    return fetch("/data/earn.json").then(response => response.json())
    .then(data => data.medicamentos)
    
}




function processMedicamentoData(medicamentoData){
     const remedio = new Remedio(
                            medicamentoData.nome,
                            medicamentoData.img,
                            medicamentoData.preco,
                            medicamentoData.estoque,
                            medicamentoData.codigo_ean
                        );

        remedios.inserirRemedio(remedio.toObject())
}


function visualizarRemedios(){
    const viewRemedio = new RemediosView(remedios.getRemedio());
    viewRemedio.exibirRemedios(".produtos-container");
    
}


function medicamentoSectionJson(){
    loadMedicamentos()
       .then(medicamentos => {
            medicamentos.forEach(processMedicamentoData);
            visualizarRemedios()

       })
}

medicamentoSectionJson();


    