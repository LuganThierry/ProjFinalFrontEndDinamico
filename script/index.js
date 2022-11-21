
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
        'pages/main',
        'pages/estab',
        'pages/categ',
        'pages/grupo',
        'pages/estabForm',
        'pages/categForm',

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