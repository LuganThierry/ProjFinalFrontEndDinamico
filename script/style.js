
(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    * {
        margin: 0;
        padding: 0;
        font-family: 'Courier';
    }
    header {
        width: 100vw;
        height: 10vh;
        background: antiquewhite;
        //display: none;
    }
    nav {
        width: 100vw;
        height: 100%;
    }
    ul {
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style-type: none;
    }

    .main-section {
        width: 100vw;
        height: 90vh;
        background: aliceblue;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .btn-main {
        width: 15rem;
        height: 4rem;
        border: 1px black solid;
        border-radius: 5px;
        font-size: 1rem;
    }
    `

    document.body.appendChild(style)
})();