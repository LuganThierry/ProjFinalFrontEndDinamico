
window.tableDisplay = {
    create: (header, content) => {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const tfoot = document.createElement('tfoot');

        table.appendChild(thead);
        table.appendChild(tbody);
        table.appendChild(tfoot);
        tfoot.classList.add('table-footer');

        header.forEach(e => {
            const th = document.createElement('th');
            th.textContent = e;
            thead.appendChild(th)
        });

        content.forEach(category => {

            const trObj = document.createElement('tr');
            Object.keys(category).forEach(key => {
                if (key != "uid") {
                    const tdAtributosObj = document.createElement('td');
                    tdAtributosObj.innerText = category[key];
                    trObj.appendChild(tdAtributosObj);
                }
            })

            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const icon1 = document.createElement('img');
            const icon2 = document.createElement('img');

            icon1.setAttribute('src', './img/edit.png');
            icon2.setAttribute('src', './img/delete.png');
            icon1.classList.add("icon-edit");
            icon2.classList.add("icon-delete");

            td1.appendChild(icon1);
            td2.appendChild(icon2);
            trObj.appendChild(td1);
            trObj.appendChild(td2);
            tbody.appendChild(trObj);
        });

        return table;
    }
}