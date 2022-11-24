
window.Page.categPage = async async => {
    main.innerHTML = '';


    const headerContent = ["Inicio", "Estabelecimentos", "Categorias", "Grupo"];
    const hdr = header.create(headerContent)
    main.appendChild(hdr)
    hdr.addEventListener('scroll', () => {

    })

    const section = document.createElement('section');
    main.appendChild(section);

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const tfoot = document.createElement('tfoot');

    table.appendChild(thead);
    table.appendChild(tbody);
    table.appendChild(tfoot);

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
        
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');

        const icon1 = document.createElement('img');
        const icon2 = document.createElement('img');
        icon1.setAttribute('src', './img/edit.png');
        icon2.setAttribute('src', './img/delete.png');

        icon1.addEventListener('click', () => {
            //rIndex = icon1.closest('tr').rowIndex;
            Page.categEdit(categoria.uid, categoria.code);
        })

        icon2.addEventListener('click', () => {

            if (confirm('Essa ação não poderá ser revertida. Você tem certeza?') === true){
                console.log('chegou aq');
                deleteCategory(categoria.uid)
                Page.categPage();
            }
        })

        td1.appendChild(icon1);
        td2.appendChild(icon2);

        trObj.appendChild(td1);
        trObj.appendChild(td2);

        

        tbody.appendChild(trObj);
    });

    tfoot.appendChild(
        btn.create({
            content: "Cadastrar categoria",
            onClick: () => {
                Page.categRegister();
            },
            className: 'btn-register'
        })
    )
}