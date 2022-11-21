
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

    const formContent = ["Categoria", "Nome", "Endereço", "CEP", "Telefone", "Email"];

    for (let i = 0; i < formContent.length; i++) {
        forms.appendChild(
            field.create({
                label: formContent[i],
                input: document.createElement('input')
            })
        )
    }

    const wrapBtn = document.createElement('div');
    wrapBtn.classList.add('wrapBtn');
    section.appendChild(wrapBtn);

    wrapBtn.appendChild(
        btn.create({
            content: "Cadastrar",
            className: 'btn-form'
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