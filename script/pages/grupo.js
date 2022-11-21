
window.Page.groupPage = () => {
    main.innerHTML = '';

    const headerContent = ["inicio", "estabelecimentos", "categorias", "grupo"];
    const hdr =  header.create(headerContent)
    main.appendChild(hdr)
    hdr.addEventListener('scroll', () => {
        
    })

    const section = document.createElement('section');
    main.appendChild(section);

    section.appendChild(
        btn.create({
            content: "Cadastrar grupo",
            onClick: () => {
                Page.mainPage();
            },
            className: 'btn-register'
        })
    )
    
}