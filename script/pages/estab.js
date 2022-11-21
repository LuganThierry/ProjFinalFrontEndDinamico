
window.Page.estabPage = () => {
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
            content: "Cadastrar estabelecimento",
            onClick: () => {
                Page.estabRegister();
            },
            className: 'btn-register'
        })
    )
}