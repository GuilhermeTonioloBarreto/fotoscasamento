// get os elementos do HTML
let div = document.getElementById("containerFotos");

// gerando nomes das fotos
let photoArray = [];
const imgNumber = 1443;

// cria um array com os nomes das imagens da pasta /img/
// estes nomes devem estar padronizados, modificando apenas o número deles no final
for(let i = 1; i < imgNumber; i++){
    photoArray.push("img/Casamento Larisa e Guilherme-" + i + ".jpg");
}

// criando um array de imagens nomeadas em photoArray
let imgArray = []
for(let i = 0; i < imgNumber; i++){
    imgArray[i] = document.createElement("img");
    imgArray[i].style.width = "300px";
    imgArray[i].style.margin = "5px";
    imgArray[i].src = photoArray[i];
    imgArray[i].alt = photoArray[i].substring(4);
    imgArray[i].className = "myImgClass";

    // quando a imagem é clicada, é invocada a função
    // que cria o modal
    imgArray[i].onclick = function(){
        createModal(imgArray[i], photoArray[i]);
    };

    // adicionando as imagens na DOM
    div.appendChild(imgArray[i]);
}

// --------------------------------------------

// ------------- exibindo o modal -------------

// Get os elementos do modal no HTML
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

// Get the download link
let downloadLink = document.getElementById("downloadLink");

// função que cria o modal
// img = image object
// imgLink = link of the image (inside /img/ folder)
function createModal(img, imgLink){
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    // Set href and download parameters of downloadLink
    downloadLink.href = imgLink;
    downloadLink.download = img.alt;
}

// Get the <span> element that closes the modal
let closeButton = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
  modal.style.display = "none";
} 

