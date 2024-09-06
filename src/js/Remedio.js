class Remedio {
    #nome;
    #img;
    #preco;
    #codigo_ean;
    #estoque;

    constructor(nome, imagem, preco, estoque, codigo_earn){
        this.#nome = nome;
        this.#img = imagem;
        this.#preco = preco;
        this.#estoque = estoque;
        this.#codigo_ean = codigo_earn;
    }



    toObject(){
        return {
            nome: this.#nome,
            img: this.#img,
            preco: this.#preco,
            estoque: this.#estoque,
            codigo_earn: this.#codigo_ean

        };
    }
}

class Remedios {
    #remedios;

     constructor(){
         this.#remedios = [];
     }
 
     inserirRemedio(remedio){
         this.#remedios.push(remedio);
     }

     getRemedio(){
        return this.#remedios;
     }
 
 }


 class RemediosView{

    constructor(remedio){
        this.remedio = remedio;
    }

    exibirRemedios(id){
        const container = document.querySelector(id);
        container.innerHTML = "";

        for (const med of this.remedio) {
            const produto = document.createElement('div'); 
            produto.classList.add("produto-card");
            produto.innerHTML = `
              <img src="${med.img}" alt="${med.nome}">
                       <h2>${med.nome}</h2>
                       <p>Preço: R$${med.preco}</p>  
            `;

            produto.appendChild(this.criarBotaoComprar())
            container.appendChild(produto);
    }

    
 }

   criarBotaoComprar(){
            const botao = document.createElement('button');
            botao.innerHTML = 'comprar'
            return botao;    
   }


}


export {Remedio, Remedios, RemediosView}