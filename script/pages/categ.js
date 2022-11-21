
window.Page.categPage = async async => {
    main.innerHTML = '';

    const headerContent = ["inicio", "estabelecimentos", "categorias", "grupo"];
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

    const headerTable = ["Código", "Nome", "Editar", "Deletar"];

    for (let i = 0; headerTable.length; i++) {
        const th = document.createElement('th');
        th.textContent = headerTable[i];

        thead.appendChild(th);
    }

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