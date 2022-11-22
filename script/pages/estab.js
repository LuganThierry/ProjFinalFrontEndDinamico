
window.Page.estabPage = async () => {
    main.innerHTML = '';

    const headerContent = ["inicio", "estabelecimentos", "categorias", "grupo"];
    const hdr =  header.create(headerContent)
    main.appendChild(hdr)
    
    const section = document.createElement('section');
    section.classList.add('section-list');
    main.appendChild(section);

    const headerTable = ["Endereco", "Telefone", "Nome", "Categoria", "CEP", "Email"];

    const companies = await getCompanies();

    section.appendChild(
        tableDisplay.create(headerTable, companies)
    );

    const iconEdit = document.querySelectorAll('.icon-edit');

    iconEdit.forEach(icon => {
        icon.addEventListener('click', () => {
            Page.estabEdit();
        });
    
    })

    const iconDelete = document.querySelectorAll('.icon-delete');
    iconDelete.forEach(icon => {
        icon.addEventListener('click', () => {
            Page.mainPage();
        });
    
    })

    const tfoot = document.querySelector('.table-footer');
    tfoot.appendChild(
        btn.create({
            content: "Cadastrar estabelecimento",
            onClick: () => {
                Page.estabRegister()
            },
            className: 'btn-register'
        })
    );

    main.appendChild(
        footer.create()
    );

}