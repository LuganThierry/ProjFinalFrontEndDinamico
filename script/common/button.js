
window.btn = {
    create: ({type = 'button', content, onClick = () => {}, className}) => {
        const button = document.createElement('button');
        button.setAttribute('type', `${type}`);
        button.textContent = content;
        button.addEventListener('click', onClick);
        button.classList.add(`${className}`)

        return button;
    }
}