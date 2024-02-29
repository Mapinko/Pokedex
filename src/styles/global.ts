import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 


    body {
        //background: linear-gradient(135deg, #FF5151, #B30000);

        scroll-behavior: smooth;
    }

    /* Estilizando a barra de rolagem no Chrome e Safari */
    body::-webkit-scrollbar {
        width: 6px;
    }

    body::-webkit-scrollbar-thumb {
        background-color: black;
    }

    /* Estilizando a barra de rolagem no Firefox */
    body {
        scrollbar-width: thin;
        scrollbar-color: black;
    }

    button {
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul, ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    li {
        list-style: 0;
    }

    img{
        max-width: 100%;
    }

    h1 {
        font-family: 'Press Start 2P', cursive;
    }
`

export const ColorsTheme = {
    colors: {
        vermelho: '#EE1C23',
        amarelo: '#FFCB05',
        azul: '#007ACC',
        verde: '#77CC55',
        preto: '#000000',
        branco:' #FFFFFF',
        laranja:' #FFA81C',
        marrom: '#8B5E3C'
    }
}