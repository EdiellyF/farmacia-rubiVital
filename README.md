# RubiVital

## Descrição

**RubiVital** é um site desenvolvido para uma farmácia, com uma interface moderna e responsiva. O site oferece uma experiência visual agradável com um carrossel de imagens, uma seção para produtos e medicamentos, e um rodapé informativo sobre os serviços da farmácia.

## Estrutura do Projeto

- **`index.html`**: Página principal do site.
- **`src/css/`**: Diretório contendo arquivos de estilo.
  - **`index.css`**: Estilos principais do site.
  - **`output.css`**: Arquivo CSS gerado com Tailwind CSS.
- **`src/imgs/`**: Diretório contendo as imagens utilizadas no site.
- **`src/js/`**: Diretório contendo os arquivos JavaScript.
  - **`main.js`**: Arquivo JavaScript principal para funcionalidades interativas.

## Funcionalidades

- **Cabeçalho**:
  - Logotipo da farmácia e nome "RubiVital".
  - Barra de pesquisa para produtos.
  - Botão de login.
  - Menu responsivo para dispositivos móveis.

- **Carrossel de Imagens**:
  - Exibição de imagens destacadas com botões de navegação.

- **Seção de Produtos**:
  - Galeria de produtos com imagens.

- **Rodapé**:
  - Informações sobre os serviços oferecidos, incluindo atendimento farmacêutico, programas de saúde e testes rápidos.

## Classes JavaScript

- **`Carrossel`**:
  - Gerencia a exibição e navegação das imagens no carrossel.

- **`Remedio`**:
  - Representa um medicamento com atributos como nome, descrição e preço.

- **`Remedios`**:
  - Gerencia uma coleção de objetos `Remedio`, permitindo operações como adição, remoção e busca de medicamentos.

- **`RemedioView`**:
  - Responsável por exibir informações de um objeto `Remedio` em uma interface de usuário.

## Tecnologias Utilizadas

- **HTML5**: Estruturação do conteúdo da página.
- **CSS3**: Estilização do site.
- **Tailwind CSS**: Framework para estilos responsivos.
- **JavaScript**: Funcionalidades interativas.

