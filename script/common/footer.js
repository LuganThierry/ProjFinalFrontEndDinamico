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

    category.forEach(e => {

        const trobj = document.createElement('tr');

        let count = 0;

        companies.forEach(key => {

            if (key.category.uid === e.uid) {
                count++; 
            }

        })

        console.log(`${(e.name) +" "+ count}`)
    })
}