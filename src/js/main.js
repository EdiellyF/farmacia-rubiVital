import { menuShow} from './menuShow.js';
import {Carousel} from './Carrosel.js';
import { Remedio, Remedios, RemediosView } from './Remedio.js';


document.getElementById('mobile-menu-icon').addEventListener('click', () => {
    // Instanciando a classe com o ID do elemento
    const mobileMenuToggle = new menuShow('#mobile-menu');
    mobileMenuToggle.init();
});


new Carousel('.carousel-item', '#prev', '#next');

const remedios = new Remedios();

function medicamentoSectionJson(){
    fetch("/data/earn.json").then((response) => {
        response.json().then((data) => {
            data.medicamentos.map((medicamentoData) => {
              const remedio =   new Remedio(
                    medicamentoData.nome,
                    medicamentoData.img,
                    medicamentoData.preco,
                    medicamentoData.estoque,
                    medicamentoData.codigo_ean
                );
               remedios.inserirRemedio(remedio.toObject());
               const viewRemedio = new RemediosView(remedios.getRemedio());
               viewRemedio.exibirRemedios(".produtos-container")

               console.log()
               

            })
        });
    })

}





medicamentoSectionJson();

