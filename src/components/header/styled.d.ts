import styled from "styled-components";
import Fundo from "../../assets/fundo.png"

const Container = styled.header`
color: #E66767;
text-align: center;

button {
    background-color: transparent;
    border: none;
    color: #E66767;
    font-weight: bold;
}

.logo {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 42px;
    width: 6%;
    }

.one-page {
    position: relative;
    height: 200px;
    width: 100%;
    background-image: url(${Fundo});
    background-size: cover;
    background-position: center;
    z-index: 0;

    h2 {
    font-size: 1.9rem;
    font-family: Roboto;
    font-weight: bold;
    width: 500px;
    margin-left: 428px;
    }
}
    .third-page {
    position: relative;
    width: 100%;
    background-image: url(${Fundo});
    background-size: cover;
    background-position: center;
    z-index: 0;
    display: grid;
    grid-template-columns: 100px 1fr;

    .logo {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 518px;
    width: 8%;
    }
    }
`;
const Banner = styled.div`
    width: 100%;
    padding: 6px;
    background-image: url(${Fundo});
    background-position: center;
    z-index: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .logo {
    width: 100px;
    }
`;
