
window.Page.categPage = async () => {
    main.innerHTML = '';

    const headerContent = ["inicio", "estabelecimentos", "categorias", "grupo"];
    const hdr = header.create(headerContent)
    main.appendChild(hdr);
    
    const section = document.createElement('section');
    section.classList.add('section-list');
    main.appendChild(section);

    const headerTable = ["Codigo", "Nome", "Editar", "Deletar"];

    const categories = await getCategories();

    section.appendChild(
        tableDisplay.create(headerTable, categories)
    );

    const iconEdit = document.querySelectorAll('.icon-edit');

    iconEdit.forEach(icon => {
        icon.addEventListener('click', () => {
            Page.categEdit();
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
            content: "Cadastrar categoria",
            onClick: () => {
                Page.categRegister()
            },
            className: 'btn-register'
        })
    );

    main.appendChild(
        footer.create()
    );
}