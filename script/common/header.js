
window.header = {
    create: (headerContent) => {
        const header = document.createElement('header');
        const nav = document.createElement('nav');
        const navList = document.createElement('ul');
        header.appendChild(nav);
        nav.appendChild(navList);

        const navigators = [];

        for (let i = 0; i < headerContent.length; i++) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            li.classList.add('lista-links');
            a.textContent = headerContent[i];
            a.classList.add('links-nav');
            navList.appendChild(li);
            li.appendChild(a);
            navigators.push(a);
        }

        navigators[0].addEventListener('click', () => {
            Page.mainPage();
        })

        navigators[1].addEventListener('click', () => {
            Page.estabPage();
        })

        navigators[2].addEventListener('click', () => {
            Page.categPage();
        })

        navigators[3].addEventListener('click', () => {
            Page.groupPage();
        })

        return header;
    }
}