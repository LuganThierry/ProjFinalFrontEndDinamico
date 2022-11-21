

window.Page.categEdit = () => {
    main.innerHTML = '';

    const section = document.createElement('section');
    section.classList.add('form-section')
    main.appendChild(section);

    const h1 = document.createElement('h1');
    section.appendChild(h1);
    h1.textContent = "Editar categoria"

    const forms = form.create();
    section.appendChild(forms);

    const formContent = ["Codigo", "Nome"];

    for (let i = 0; i < formContent.length; i++) {
        forms.appendChild(
            field.create({
                label: formContent[i],
                input: document.createElement('input'),
                className: formContent[i]
            })
        )
    }

    const wrapBtn = document.createElement('div');
    wrapBtn.classList.add('wrapBtn');
    section.appendChild(wrapBtn);

    function edit(uidReg, idReg, nameReg) {
        const object = { uid: uidReg, id: idReg, name: nameReg };

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
                    edit(idInput.value, nameInput.value);
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