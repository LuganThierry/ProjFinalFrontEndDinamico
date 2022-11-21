
window.Page.categPage = () => {
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
            content: "Cadastrar categoria",
            onClick: () => {
                Page.categRegister();
            },
            className: 'btn-register'
        })
    )
    
    // const table = document.createElement('table');
    // section.appendChild(table);

    // const atributos = [];
    // getCategories().array.forEach(categoria => {

    //     const trObj = document.createElement('tr');
    //     Object.keys(categoria).forEach(key =>{
    //         let tdAtributosObj = document.createElement('td');
    //         tdAtributosObj.innerText = categoria[key];
    //         trObj.appendChild(tdAtributosObj);
    //     })

    //     table.appendChild(trObj);
    // });
}