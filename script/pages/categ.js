
window.Page.categPage = async async => {
    main.innerHTML = '';

    const headerContent = ["Início", "Estabelecimentos", "Categorias", "Grupo"];
    const hdr = header.create(headerContent)
    main.appendChild(hdr)
    hdr.addEventListener('scroll', () => {

    })

    const section = document.createElement('section');
    section.classList.add('section-pages');
    main.appendChild(section);

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const tfoot = document.createElement('tfoot');

    table.appendChild(thead);
    table.appendChild(tbody);
    table.appendChild(tfoot);

    section.appendChild(
        btn.create({
            content: "Cadastrar categoria",
            onClick: () => {
                Page.categRegister();
            },
            className: 'btn-register'
        })
    );
    section.appendChild(table);

    const headerTable = ["Codigo", "Nome", "Editar", "Deletar"];

    headerTable.forEach(e => {
        const th = document.createElement('th');
        th.textContent = e;
        thead.appendChild(th)
    })

    const categories = await getCategories();

    categories.forEach(categoria => {

        const trObj = document.createElement('tr');
        Object.keys(categoria).forEach(key => {
            if (key != "uid") {
                let tdAtributosObj = document.createElement('td');
                tdAtributosObj.innerText = categoria[key];
                trObj.appendChild(tdAtributosObj);
            }
        })

        const editTd = document.createElement('td');
        const deleteTd = document.createElement('td');

        const editIcon = document.createElement('img');
        const deleteIcon = document.createElement('img');
        editIcon.setAttribute('src', './img/edit.png');
        deleteIcon.setAttribute('src', './img/delete.png');

        editIcon.addEventListener('click', () => {
            Page.categEdit(categoria.uid, categoria.code);
        })

        deleteIcon.addEventListener('click', () => {

            if (confirm('Essa ação não poderá ser revertida. Você tem certeza?') === true) {
                deleteCategory(categoria.uid)
                Page.categPage();
            }
        })

        editTd.appendChild(editIcon);
        deleteTd.appendChild(deleteIcon);

        trObj.appendChild(editTd);
        trObj.appendChild(deleteTd);



        tbody.appendChild(trObj);
    });

    


    const ftr = await footer.create();
    ftr.setAttribute('class', 'footerCat');
    main.appendChild(ftr);
}