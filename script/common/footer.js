window.footer = {
    create: () => {
        const footer = document.createElement('footer');
        
        getCategoriesQuantities();

        return footer;
    }
}

async function getCategoriesQuantities() {

    const companies = await getCompanies(); 

    const category = await getCategories();

    console.log(companies);

    quantities.forEach(e => {

        const trobj = document.createElement('tr');

        let count = 0;

        console.log(e.name);

        Object.keys(e).forEach(key => {

            if (key.category.uid === e.uid) {
                count++; 
            }

        })

        console.log(`${(e.name) + count}`)
    })
}