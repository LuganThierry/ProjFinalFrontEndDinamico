

window.Page.categEdit = (uid, code) => {
    main.innerHTML = '';
    
    let uidNonEditable = uid;
    let codeNonEditable = code;

    const section = document.createElement('section');
    section.classList.add('form-section')
    main.appendChild(section);

    const h1 = document.createElement('h1');
    section.appendChild(h1);
    h1.textContent = "Editar categoria"

    const forms = form.create();
    section.appendChild(forms);

    let pUID = document.createElement('p')
    pUID.innerText = `UID: ${uidNonEditable}`;
    forms.appendChild(pUID);
        
    let pCode = document.createElement('p')
    pCode.innerText = `Código: ${codeNonEditable}`
    forms.appendChild(pCode);
    
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

    function edit(nameEdit) {
        
        editCategory({ uid: uidNonEditable, code: codeNonEditable, name: nameEdit });
        
        window.alert('Categoria editada');
        
    }

    wrapBtn.appendChild(
        btn.create({
            content: "Editar",
            className: 'btn-form',
            onClick: () => {
                const nameInput = forms.querySelector('.Nome');

                if (nameInput.value.length < 1) {
                    window.alert('Preenchimento obrigatório')
                }
                else {
                    edit(nameInput.value);
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