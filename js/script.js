const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const footer = document.querySelector('footer');
const header = document.querySelector('header');
const main = document.querySelector('main');
const sobre = document.getElementById('sobre');
const icons = document.querySelectorAll('.bi');
const maps = document.getElementById('maps');
const html = document.documentElement;
const body = document.getElementById('corpo');
const logo = document.getElementById('logo');
const logodark = document.getElementById('logodark');
const copy = document.getElementById('copy');

function toggleIcons() {
    if (moonIcon.style.display === "none") {
        // Modo claro
        copy.style.color = "black";

        moonIcon.style.display = "inline";
        sunIcon.style.display = "none";
        logodark.style.display = "none";
        logo.style.display = "inline";
        icons.forEach(icon => icon.style.color = "black");
        footer.style.backgroundColor = "white";
        footer.style.borderTop = "none";
        header.style.backgroundColor = "white";
        header.style.borderBottom = "1px solid black";
        main.style.backgroundColor = "#003ea8";
        html.style.backgroundColor = "#003ea8";
        maps.style.border = "solid black 2px";

    } else {
        // Modo escuro
        icons.forEach(icon => icon.style.color = "white");
        sunIcon.style.color = "yellow";
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline";
        logodark.style.display = "inline";
        footer.style.backgroundColor = "black";
        footer.style.borderTop = "1px solid white";
        main.style.backgroundColor = "#050a30";
        header.style.backgroundColor = "black";
        header.style.borderBottom = "1px solid white";
        copy.style.color = "white";
        html.style.backgroundColor = "#050a30";
        logo.style.display = "none";
        maps.style.border = "solid white 2px";
    }
}
function menu() {
    const menu = document.getElementById('menu');


    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        if (moonIcon.style.display === "none") {
            menu.style.display = 'block';
            menu.style.backgroundColor = '#050a30';
        }
        else {
            menu.style.display = 'block';
            menu.style.backgroundColor = '#12229d';
        }
    }
}
function changeImage() {
    const image = document.getElementById('myImage'); // Seleciona a imagem pelo ID
    
    // Verifica a largura da janela
    if (window.innerWidth <= 500) {
        image.src = './img/small-image.png'; // Altera para a imagem pequena
    } else {
        image.src = './img/large-image.png'; // Altera para a imagem maior
    }
}

// Chama a função quando a página carrega
window.onload = function() {
    changeImage(); // Muda a imagem ao carregar a página
};

// Chama a função sempre que a janela for redimensionada
window.onresize = function() {
    changeImage(); // Atualiza a imagem ao redimensionar a janela
};
