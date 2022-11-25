
window.Page.estabEdit = (uid) => {

    main.innerHTML = '';

    let uidNonEditable = uid;
    
    const section = document.createElement('section');
    section.classList.add('form-section')
    main.appendChild(section);

    const h1 = document.createElement('h1');
    section.appendChild(h1);
    h1.textContent = "Editar estabelecimento"

    const forms = form.create();
    section.appendChild(forms);

    let pUID = document.createElement('p')
    pUID.innerText = `UID: ${uidNonEditable}`;
    forms.appendChild(pUID);

    const formContent = ["Categoria", "Nome", "Endereco", "CEP", "Telefone", "Email"];

    for (let i = 0; i < formContent.length; i++) {
        forms.appendChild(
            field.create({
                label: formContent[i],
                input: document.createElement('input'),
                className: formContent[i],
            })
        )
    }

    const wrapBtn = document.createElement('div');
    wrapBtn.classList.add('wrapBtn');
    section.appendChild(wrapBtn);

    function edit(addressEdit, phoneEdit, nameEdit, categoryEdit, cepEdit, emailEdit ) {

        editCompany({ uid: uidNonEditable, address: addressEdit, phone: phoneEdit, name: nameEdit, category: categoryEdit, postal_code: cepEdit, email: emailEdit });

        window.alert('Estabelecimento editado');
    }


    wrapBtn.appendChild(
        btn.create({
            content: "Editar",
            className: 'btn-form',
            onClick: () => {
                const inputCategory = forms.querySelector('.Categoria');
                const inputName = forms.querySelector('.Nome');
                const inputEmail = forms.querySelector('.Email');
                const inputPhone = forms.querySelector('.Telefone');
                const inputCEP = forms.querySelector('.CEP');
                const inputAddress = forms.querySelector('.Endereco');

                if (inputCategory.value.length < 1) {
                    window.alert("Categoria inválida");
                } else if (inputName.value.length <= 1) {
                    window.alert("Nome inválido.");
                } else if (inputEmail.value.length <= 1) {
                    window.alert("E-mail inválido.");
                } else if (inputPhone.value.length <= 1) {
                    window.alert("Telefone inválido.");
                } else if (inputCEP.value.length <= 1) {
                    window.alert("CEP inválido.");
                } else if (inputAddress.value.length <= 1) {
                    window.alert("Endereço inválido.");
                } else {
                    edit(inputAddress.value, inputPhone.value, inputName.value, inputCategory.value, inputCEP.value, inputEmail.value);
                    inputCategory.value = "";
                    inputName.value = "";
                    inputEmail.value = "";
                    inputPhone.value = "";
                    inputCEP.value = "";
                    inputAddress.value = "";

                    Page.estabPage();
                }
            }
        })


    );

    wrapBtn.appendChild(
        btn.create({
            content: "Voltar",
            onClick: () => {
                Page.estabPage();
            },
            className: 'btn-form'
        })
    )


}