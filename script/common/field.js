
window.field = {
    create: ({ label, tipo = 'text', input }) => {

        const field = document.createElement('div');
        field.classList.add('campo');
        const txtLabel = document.createElement('label');
        txtLabel.textContent = label;
        input.setAttribute('type', tipo);
        field.appendChild(txtLabel);
        field.appendChild(input);

        return field;
    }
}