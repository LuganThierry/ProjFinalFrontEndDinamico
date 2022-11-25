
window.Page.groupPage = () => {
    main.innerHTML = '';

    const headerContent = ["Início", "Estabelecimentos", "Categorias", "Grupo"];
    const hdr =  header.create(headerContent)
    main.appendChild(hdr)
    hdr.addEventListener('scroll', () => {
        
    })


    const titulo = document.createElement('h1');
    titulo.textContent = 'RIP - Alunos falecem após passar mais de 12 horas por dia fazendo projeto';
    titulo.classList.add('tituloGrupo');
    main.appendChild(titulo);


    const section = document.createElement('section');
    section.setAttribute('class', 'ripSection');
    main.appendChild(section);

    const lucasrip = document.createElement('img');
    lucasrip.setAttribute('src', './img/lucasrip.png');
    lucasrip.classList.add('ripimg');
    section.appendChild(lucasrip);

    const luganrip = document.createElement('img');
    luganrip.setAttribute('src', './img/luganrip.png');
    luganrip.classList.add('ripimg');
    section.appendChild(luganrip);

    const marcusrip = document.createElement('img');
    marcusrip.setAttribute('src', './img/marcusrip.png');
    marcusrip.classList.add('ripimg');
    section.appendChild(marcusrip); 

    const maririp = document.createElement('img');
    maririp.setAttribute('src', './img/maririp.png');
    maririp.classList.add('ripimg');
    section.appendChild(maririp);

    const natirip = document.createElement('img');
    natirip.setAttribute('src', './img/natirip.png');
    natirip.classList.add('ripimg');
    section.appendChild(natirip)

    let rodape = document.createElement('div');
    rodape.classList.add('rodape');
    main.appendChild(rodape);

    const p1 = document.createElement('p');
    p1.textContent = '* Nenhum aluno foi ferido fisicamente na produção desse projeto.';
    rodape.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = 'Imagens meramente ilustrativas.'
    rodape.appendChild(p2);

    const p3 = document.createElement('p');
    p3.textContent = 'Qualquer semelhança com a realidade é mera coincidência.';
    rodape.appendChild(p3);

    const p4 = document.createElement('p');
    p4.textContent = 'Hope Everyone Likes Pancakes';
    rodape.appendChild(p4);



}