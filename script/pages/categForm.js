

window.Page.categRegister = () => {
    main.innerHTML = '';

    const section = document.createElement('section');
    section.classList.add('form-section')
    main.appendChild(section);

    const h1 = document.createElement('h1');
    section.appendChild(h1);
    h1.textContent = "Cadastro de categorias"

    const forms = form.create();
    section.appendChild(forms);

    const formContent = ["Código", "Nome"];

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
                Page.categPage();
            },
            className: 'btn-form'
        })
    )



}