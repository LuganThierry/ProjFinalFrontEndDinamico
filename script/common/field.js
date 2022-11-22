
window.field = {
    create: ({ label, tipo = 'text', input = 'hidden', className }) => {

        const field = document.createElement('div');
        field.classList.add('campo');
        const txtLabel = document.createElement('label');
        txtLabel.textContent = label;
        input.setAttribute('type', tipo);
        input.classList.add(`${className}`);
        field.appendChild(txtLabel);
        field.appendChild(input);

        return field;
    }
}