window.footer = {
    create: () => {
        const footer = document.createElement('footer');
        
        getCategoriesQuantities();

        return footer;
    }
}

async function getCategoriesQuantities() {

    const quantities = await getCompanies(); 

    const category = await getCategory();

    console.log(quantities);

    quantities.forEach(category => {

        const trobj = document.createElement('tr');

        console.log(category.uid);

        Object.keys(category).forEach(key => {

            const categoryUid = category.uid

            if (category.uid = categoryUid) {
                console.log(category.iud)
            }
        })
    })
}

// const categories = await getCategories();

// categories.forEach(categoria => {

//     const trObj = document.createElement('tr');
//     Object.keys(categoria).forEach(key => {
//         if (key != "uid") {
//             let tdAtributosObj = document.createElement('td');
//             tdAtributosObj.innerText = categoria[key];
//             trObj.appendChild(tdAtributosObj);
//         }
//     })