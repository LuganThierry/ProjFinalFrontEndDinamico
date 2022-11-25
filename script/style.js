
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
    }
    footer {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100vw;
        height: 10vh;
        background: antiquewhite;
        display: flex;
        justify-content: space-around;
        align-items: center;
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

    a {
        cursor: pointer;
    }

    .main-section {
        width: 100vw;
        height: 100vh;
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
        cursor: pointer;
    }

    .btn-register {
        width: 18rem;
        height: 3rem;
        border: 1px black solid;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
    }

    .form-section {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 1rem 0;
    }

    form {
        width: 40%;
    }

    .campo {
        display: flex;
        flex-direction: column;
    }

    .campo label {
        margin: 0.75rem 0 0.5rem 0;
    }

    .wrapBtn {
        width: 100vw;
        display: flex;
        justify-content: space-evenly;
    }

    .btn-form {
        width: 10rem;
        height: 2rem;
        border: 1px black solid;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
    }

    img {
        cursor: pointer;
    }

    table {
        border: 1px black solid;
        text-align: center;
    }
    `
    document.body.appendChild(style)
})();