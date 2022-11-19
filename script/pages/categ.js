
window.Page.categPage = () => {
    main.innerHTML = '';

    const headerContent = ["inicio", "estabelecimentos", "categorias", "grupo"];
    const hdr =  header.create(headerContent)
    main.appendChild(hdr)
    hdr.addEventListener('scroll', () => {
        
    })

    const section = document.createElement('section');
    main.appendChild(section);
    
}