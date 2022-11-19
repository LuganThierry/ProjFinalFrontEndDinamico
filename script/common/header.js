
window.header = {
    create: (headerContent) => {
        const header = document.createElement('header');
        const nav = document.createElement('nav');
        const navList = document.createElement('ul');
        header.appendChild(nav);
        nav.appendChild(navList);

        for (let i = 0; i < headerContent.length; i++) {
            const li = document.createElement('li')
            const a = document.createElement('a')
            li.classList.add('lista-links')
            a.textContent = headerContent[i]
            a.classList.add('links-nav')
            navList.appendChild(li)
            li.appendChild(a)
        }

        return header;
    }
}