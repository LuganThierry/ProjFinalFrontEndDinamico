const main = document.createElement("main");
document.body.appendChild(main);

const titulo = document.createElement("h1");
const btnDiv = document.createElement("div");
const btnEstab = document.createElement("button");
const btnCateg = document.createElement("button");
const btnGrupo = document.createElement("button");

main.appendChild(titulo);
main.appendChild(btnDiv);
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

main.appendChild(pagEstab);
main.appendChild(pagCateg);
main.appendChild(pagGrupo);








