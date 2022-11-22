
window.Page.estabRegister = () => {
    main.innerHTML = '';

    const section = document.createElement('section');
    section.classList.add('form-section')
    main.appendChild(section);

    const h1 = document.createElement('h1');
    section.appendChild(h1);
    h1.textContent = "Cadastro de estabelecimentos"

    const forms = form.create();
    section.appendChild(forms);

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

    function register(inputCategory, inputName, inputEmail, inputPhone, inputZipCode, inputAddress) {
        const newObj = { category: inputCategory, name: inputName, email: inputEmail, phone: inputPhone, cep: inputZipCode, address: inputAddress };
        PostCompany(newObj);

        window.alert('Estabelecimento registrado!');
      }

    wrapBtn.appendChild(
        btn.create({
            content: "Cadastrar",
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
                    register(inputCategory.value, inputName.value, inputEmail.value, inputPhone.value, inputCEP.value, inputAddress.value);
                    inputCategory.value = "";
                    inputName.value = "";
                    inputEmail.value = "";
                    inputPhone.value = "";
                    inputCEP.value = "";
                    inputAddress.value = "";
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