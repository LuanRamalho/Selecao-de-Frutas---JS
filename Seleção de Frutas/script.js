// script.js

const frutasImagens = {
    "Uva": "https://img.freepik.com/vetores-premium/icone-de-desenho-animado-de-uva-ilustracao-de-desenho-grafico-plano_1319591-80.jpg?semt=ais_hybrid",
    "Morango": "https://i.pinimg.com/736x/2a/dc/0c/2adc0ccdcc48c2a308a71a060e486953.jpg",
    "Banana": "https://thumbs.dreamstime.com/b/bananas-dos-desenhos-animados-76537191.jpg",
    "Manga": "https://static.vecteezy.com/ti/vetor-gratis/p1/1735917-manga-fresca-madura-fruta-exotica-vetor.jpg",
    "Abacaxi": "https://thumbs.dreamstime.com/b/abacaxi-55526274.jpg",
    "Maçã": "https://i.pinimg.com/originals/e9/38/a2/e938a2a3cf6cd84e0c6b01f9689133d9.png",
    "Laranja": "https://img.freepik.com/vetores-premium/laranjas-em-um-fundo-branco-projeto-de-desenho-animado-de-frutas-maduras_530689-1117.jpg",
    "Melancia": "https://www.desenhar.org/wp-content/uploads/2023/10/Como-desenhar-melancia-Passo-8.jpg",
    "Pera": "https://img.freepik.com/vetores-gratis/desenho-de-pera-verde-isolado_1308-126377.jpg",
    "Limão": "https://i.pinimg.com/736x/5a/11/bb/5a11bb57e62d9a80198f86fe2cfc2ca3.jpg",
    "Abacate": "https://i.pinimg.com/736x/da/8a/bd/da8abdc2eccb2b9adf2ddd78cd057082.jpg",
    "Goiaba": "https://i.pinimg.com/736x/98/f8/a6/98f8a63d26ace1c95cbd0ba3247e4a1f.jpg",
    "Kiwi": "https://i.pinimg.com/736x/a1/0e/be/a10ebe094a5ddafd5abe9944aedfaf09.jpg",
    "Mamão": "https://i.pinimg.com/736x/69/86/96/69869657764d03ad16b9b4d6e63cfa04.jpg",
    "Tomate": "https://i.pinimg.com/736x/a3/11/31/a31131fc34461f5f85ab36e5861d8d33.jpg",
    "Melão": "https://img.freepik.com/vetores-premium/ilustracao-em-vetor-brilhante-de-metade-colorida-fatia-e-todo-o-melao-de-suco-vegetal-fresco-dos-desenhos-animados-isolado-no-fundo-branco_126520-732.jpg",
    "Jaca": "https://media.istockphoto.com/id/2159021731/pt/vetorial/jackfruit-flat-design-tree-fruit-illustration.jpg?s=612x612&w=0&k=20&c=_A1jGH5KEDED76z5BcW5PJxKxaedZ9KXTxWoTWSuJwo="
};

// Preencher a lista de seleção
const selectElement = document.getElementById("fruit-select");
Object.keys(frutasImagens).forEach(fruta => {
    const option = document.createElement("option");
    option.value = fruta;
    option.textContent = fruta;
    selectElement.appendChild(option);
});

// Exibir a imagem
const button = document.getElementById("show-image-btn");
const imageContainer = document.getElementById("image-container");
const fruitImage = document.getElementById("fruit-image");
const errorText = document.getElementById("image-error");

button.addEventListener("click", () => {
    const selectedFruit = selectElement.value;

    if (frutasImagens[selectedFruit]) {
        fruitImage.src = frutasImagens[selectedFruit];
        fruitImage.classList.remove("hidden");
        errorText.classList.add("hidden");
    } else {
        fruitImage.classList.add("hidden");
        errorText.classList.remove("hidden");
    }
});
