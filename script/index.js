
(() => {
    window.Page = {};


    for (const file of [
        'style',
        'common/header',
        'common/form',
        'common/container',
        'common/button',
        'common/field',
        'common/services',
        'common/table',
        'common/footer',
        'pages/main',
        'pages/estab',
        'pages/categ',
        'pages/group',
        'pages/estabForm',
        'pages/categForm',
        'pages/categEdit',
        'pages/estabEdit',
    ]) {
        const script = document.createElement('script');
        script.setAttribute('src', `script/${file}.js`)
        document.body.appendChild(script)
    }

    window.addEventListener('load', () => {

        window.main = document.createElement('main');
        document.body.appendChild(main);

        Page.mainPage();


    })

})();