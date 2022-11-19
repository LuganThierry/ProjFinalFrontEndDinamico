
window.container = {
    create: ({idName}) => {
        const div = document.createElement('div');
        div.setAttribute('id', `${idName}`);

        return div;
    }
}