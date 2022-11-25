(() => {
  const style = document.createElement("style");
  style.innerHTML = `
    * { 
        
        margin: 0;
        padding: 0;
        font-family: 'Courier';
    }

    body {
        overflow-x: hidden;
    }

    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 10vh;
        background: linear-gradient(to top, #023e7d 33%, #002855 66%, #001845 100%) no-repeat;
        text-transform: uppercase;
    }
    footer {
        position: absolute;
        left: 0;
        width: 100%;
        height: 10vh;
        background: linear-gradient(to bottom, #023e7d 33%, #002855 66%, #001845 100%) no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footerCat {
        bottom: 0;
    }

    .footdiv {
        display: flex;
        justify-content: space-around; 
        align-items: center;
        width: 100%;
    }

    .footparag {
        cursor: pointer;
        border: 0.1rem solid white;
        border-radius: 0.50rem;
        padding: 0.5rem;
        color: white;
        font-size: 1.3rem;
        letter-spacing: 0.1rem;
    }

    .footparag:hover {
        background-color: aliceblue;
        color: black
    }

    nav {
        width: 100%;
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
        letter-spacing: 0.2rem;
        color: white;
        font-size: 1.3rem;
    }

    .main-section {
        width: 100vw;
        height: 100vh;
        background: aliceblue;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    
    .section-pages {
        display: flex;
        flex-direction: column;
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
        margin-top:15vh;
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

    .tituloGrupo {
        padding: 10rem 5rem 10rem 5rem;
        font-size: 1.75rem;
        text-align: center;
    }
    
    .ripSection {
        display: flex;
        justify-content: space-evenly;
        width: 100vw;
    }

    .ripimg {
        width: 15vw;
        height: 20vh;
        cursor: default;
    }

    .rodape {
        width: 100vw;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 4rem;
    }
    img {
        cursor: pointer;
        margin-top: 1.6rem;
    }

    table {
        text-align: center;
        width: 100%;
        margin-top: 3rem;
    }

    th {
        font-size: 1.2rem;
        font-weight: bold;
        padding: 2rem 0 0.8rem 0;
        
    }
    td {
        padding-bottom: 0.8rem;
    }

    @media(max-width: 900px) {


        ul {
            flex-direction: column;
            height: auto;
        }

        li {
            padding: 0.15rem;
        }

        a {
            font-size:1rem;
        }

        footer {
            position: static;
            height: auto;
            padding:1rem 0;
        }

        .footparag {
            font-size: 0.8rem;
            margin:0.5rem 0;
        }

        .footdiv {
            flex-direction: column;
        }

        main {
            width: 100%;
        }

        table {
            width: 100vw;
            display: flex;
            justify-content: center;  
        }

        tr {
            display: flex;
            flex-direction: column;
            padding-top: 3rem;
            border-top: 1px solid black;
        }

        thead {
            display: none;
        }
    }
    
   @media(max-width: 720px) {
    .main-section {
        display: flex;
        flex-direction: column;
    }
   }
   
    
    `;
  document.body.appendChild(style);
})();
