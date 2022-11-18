const header = document.createElement('header');
document.body.appendChild(header);

const main = document.createElement("main");
document.body.appendChild(main);

const footer = document.createElement('footer');
document.body.appendChild(footer);

const firstDiv = document.createElement('div');
main.appendChild(firstDiv);

const titulo = document.createElement("h1");
const btnDiv = document.createElement("div");
const btnEstab = document.createElement("button");
const btnCateg = document.createElement("button");
const btnGrupo = document.createElement("button");

firstDiv.appendChild(titulo);
firstDiv.appendChild(btnDiv);
btnDiv.appendChild(btnEstab);
btnDiv.appendChild(btnCateg);
btnDiv.appendChild(btnGrupo);

titulo.textContent = "Buscador de Estabelecimentos";
btnEstab.textContent = "Estabelecimentos";
btnCateg.textContent = "Categorias";
btnGrupo.textContent = "Grupos"; 

const pagEstab = document.createElement("div");
const pagCateg = document.createElement("div");
const pagGrupo = document.createElement("div");
pagEstab.classList.add("pagEstab");
pagCateg.classList.add("pagCateg");
pagGrupo.classList.add("pagGrupo");
firstDiv.appendChild(pagEstab);
firstDiv.appendChild(pagCateg);
firstDiv.appendChild(pagGrupo);



const lblEstab = document.createElement("h2");
lblEstab.textContent = "Estabelecimentos cadastrados";
pagEstab.appendChild("lblEstab");

// window.addEventListener('scroll', () => {
//     const $window = $(window);
//     const nav = $('.header');

//     $window.scroll(function() {
//         if ($window.scrollTop() >= '100vh'){
//             header.style.display = "none";
//             footer.style.display = "none";
//         }
//         else{
//             header.style.display = "block";
//             footer.style.display = "block";   
//         }
//     })

// })


window.onscroll = function() {scrollTop()};
let sticky = header.offsetTop;

function scrollTop() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
}

