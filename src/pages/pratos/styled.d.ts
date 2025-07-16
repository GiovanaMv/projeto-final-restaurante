import styled from "styled-components";

const Banner = styled.div`
    position: relative;
    height: 280px;
    width: 100%;
    background-image: url(${PizzaIndividual});
    background-size: cover;
    background-position: center;

    &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);  // 50% opacidade
    z-index: 0;
    }
    h2 {
    position: relative;
    z-index: 1;
    margin-left: 124px;
    font-size: 32px;
    }
    .primeiro-texto {
    color: silver;
    padding-top: 24px;
    font-weight: 100;
    }
    .segundo-texto {
    color: white;
    margin-top: 142px;
    font-weight: 900;
    }
`;
const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(3,350px);
    margin-left: 124px;
    margin-bottom: 82px;
    margin-top: 52px;
    gap: 24px;
`;
const Card = styled.div`
    width: 320px;
    height: 338px;
    text-align: center;
    background-color:#E66767;
    color: white;
    padding: 6px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
    transform: scale(1.05);
    }
    
    img {
        width:  304px;
        height: 167px;
        object-fit: cover;
    }
    h3 {
        margin-top: 3px;
        font-size: 16px;
        font-weight: 900;
        letter-spacing: 1px;
        text-align: start;
    }
    p {
        margin: 0 auto; 
        width: 304px;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        text-align: start;
    }
    
    button {
        background-color: #FFEBD9;
        border: none;
        width: 304px;
        color: #E66767;
        font-weight: bold;
        margin-top: 12px;
        z-index: 1;
    }
`;
const Modal = styled.div`
    position: fixed;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 980px;
    height: 324px;
    background-color: #E66767;
    padding: 32px;
    color: white;
    display : grid;
    grid-template-columns: 272px 656px;
    font-size: 14px;
    z-index: 9999;
    
    img{
    width: 280px;
    height:280px;
    object-fit: cover;
    border-radius: 2px;
    }

    h3 {
    font-size: 18px;
    margin-top: -24px;
    }

    p {
    width: 600px;
    text-align: start;
    }

    div {
    margin-left: 24px;
    }

    .infos {
    margin-left: 0px;

    span {
    display: block;
    margin-bottom: 18px;
    }
}
    button {
    color: white;
    background-color: transparent;
    border: none;
    margin-left: 624px;
    }

    .add-carrinho {
    background-color: white;
    border-radius: 2px;
    color: #E66767;
    font-weight: bold;
    margin-left: 0px;
    padding: 3px;
    }

`;
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 0;
`;