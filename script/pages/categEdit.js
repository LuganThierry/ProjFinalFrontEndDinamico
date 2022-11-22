

window.Page.categEdit = (uid, code, name) => {
    main.innerHTML = '';
    
    let uidEdit = uid;
    let codeEdit = code;
    let nameEdit = name;

    const section = document.createElement('section');
    section.classList.add('form-section')
    main.appendChild(section);

    const h1 = document.createElement('h1');
    section.appendChild(h1);
    h1.textContent = "Editar categoria"

    const forms = form.create();
    section.appendChild(forms);


    forms.appendChild(
        field.create({
            label: `UID: ${uid}`,
            input: document.createElement('input'),
            className: 'Uid',
        })
    )

    document.getElementsByClassName('Uid');
    

    forms.appendChild(
        field.create({
            label: 'Nome',
            input: document.createElement('input'),
            className: 'Nome',
        })
    )
    const wrapBtn = document.createElement('div');
    wrapBtn.classList.add('wrapBtn');
    section.appendChild(wrapBtn);

    function edit(uidEdit, codeEdit, nameReg) {
        const object = { uid: uidEdit, code: codeEdit, name: nameReg };

        editCategory(object);
        window.alert('Categoria editada');
    }


    wrapBtn.appendChild(
        btn.create({
            content: "Editar",
            className: 'btn-form',
            onClick: () => {
                const idInput = forms.querySelector('.Codigo');
                const nameInput = forms.querySelector('.Nome');

                if (idInput.value.length < 1 || nameInput.value.length < 1) {
                    window.alert('Preenchimento obrigatório')
                }
                else {
                    edit(uidEdit, codeEdit, nameInput.value);
                    idInput.value = "";
                    nameInput.value = "";
                }
            }
        })


    );

    wrapBtn.appendChild(
        btn.create({
            content: "Voltar",
            onClick: () => {
                Page.categPage();
            },
            className: 'btn-form'
        })
    )



}