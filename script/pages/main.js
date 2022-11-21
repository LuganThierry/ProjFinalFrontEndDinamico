
window.Page.mainPage = () => {

    main.innerHTML = '';

    const section = document.createElement('section');
    section.classList.add('main-section')
    main.appendChild(section);
    
    section.appendChild(
        btn.create({
            content: "Estabelecimentos",
            onClick: () => {
                Page.estabPage();
            },
            className: 'btn-main'
        })
    )

    section.appendChild(
        btn.create({
            content: "Categorias",
            onClick: () => {
                Page.categPage();
            },
            className: 'btn-main'
        })
    )

    section.appendChild(
        btn.create({
            content: "Grupo",
            onClick: () => {
                Page.groupPage();
            },
            className: 'btn-main'
        })
    )
};