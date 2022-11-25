window.footer = {
    create: async () => {
        const footer = document.createElement('footer');

        const companies = await getCompanies();

        const category = await getCategories();

        const footCat = document.createElement('div');
        footCat.classList.add("footdiv")
        footer.appendChild(footCat);

        category.forEach(e => {

            let paragr = document.createElement('p');
            paragr.classList.add('footparag');

            footCat.appendChild(paragr);

            let count = 0;

            companies.forEach(key => {

                if (key.category.uid === e.uid) {
                    count++;
                }
            })

            paragr.textContent = `${e.name}: ${count}`

            paragr.addEventListener('click', () => {
                Page.estabPage(e.uid);
            })

        })

        return footer;
    }
}