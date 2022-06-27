// get os elementos do HTML
let containerFotos = document.getElementById("containerFotos");

const folderDivision = [
    1, 179, 585, 698, 760, 908, 1101, 1210, 1417, 1444  
];
const imgNumber = 1443;

// gerando nomes das fotos
let photoArray = new Array(folderDivision.length);
for (let i = 0; i < photoArray.length; i++){
    photoArray[i] = new Array();
}

// cria um array com os nomes das imagens da pasta /img/1/, /img/2/ ... /img/9/ 
for(let i = 0; i < folderDivision.length; i++){
    for(let j = folderDivision[i]; j < folderDivision[i+1]; j++){
        photoArray[i].push("img/" + (i) +  "/Casamento Larisa e Guilherme-" + (j) + ".jpg");
    }    
}

// seleciona o array de nome de imagens correto
let links_navbar = document.getElementsByClassName("links-navbar");
for(let i = 0; i < links_navbar.length; i++){
    links_navbar[i].onclick = function(){
        gerarImagens(photoArray[i]);
    }
}

// exibe as imagens no site
function gerarImagens(definedPhotoArray){
    // deleta todos os elementos dentro de containerFotos
    while (containerFotos.firstChild) {
        containerFotos.removeChild(containerFotos.lastChild);
    }

    // gerar imagens
    let imgArray = []
    for(let i = 0; i < definedPhotoArray.length; i++){
        imgArray[i] = document.createElement("img");
        imgArray[i].style.width = "300px";
        imgArray[i].style.margin = "5px";
        imgArray[i].src = definedPhotoArray[i];
        imgArray[i].alt = definedPhotoArray[i].substring(6);
        imgArray[i].className = "myImgClass";
    
        // quando a imagem é clicada, é invocada a função
        // que cria o modal
        imgArray[i].onclick = function(){
            createModal(imgArray[i], photoArray[i]);
        };
    
        // adicionando as imagens na DOM
        containerFotos.appendChild(imgArray[i]);
    }
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

// --------------------------------------------