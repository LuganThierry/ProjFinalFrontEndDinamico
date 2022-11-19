
window.divList = {
    create: () => {
        const div = document.createElement('div');
        const subdiv1 = document.createElement('div');
        const subdiv2 = document.createElement('div');

        div.appendChild(subdiv1);
        div.appendChild(subdiv2);
        return div;
    }
}