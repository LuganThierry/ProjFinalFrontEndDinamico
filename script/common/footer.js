window.footer = {
    create: async () => {
        const footer = document.createElement('footer');

        const companies = await getCompanies();

        const category = await getCategories();

        category.forEach(e => {

            let paragr = document.createElement('p');

            footer.appendChild(paragr);

            let count = 0;

            companies.forEach(key => {

                if (key.category.uid === e.uid) {
                    count++;
                }
            })

            paragr.textContent = `${e.name} ${count}`

            paragr.addEventListener('click', () => {
                Page.estabPage(e.uid);
            })

        })

        return footer;
    }
}