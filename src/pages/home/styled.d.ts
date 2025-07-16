import styled from "styled-components";

const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 52px;
    margin-bottom: 52px;
    margin-left: 120px;
    justify-content: center; 
    gap: 32px;
`;
const Card = styled.div`
    position: relative;
    border-radius: 3px;
    color: #E66767;
    max-width:472px;
    height: 400px;
        
    img {
        width: 472px;
        height: 217px;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }
    .layout {
    display: block;
    margin-left: 0px;
    margin-top: 0px;
    height: 176px;
    border: 1px solid #E66767;
    border-top: none;
    background-color: #FFFFFF;
    }
    .label {
        position: absolute;
        right: 10px;
        background-color:  #E66767;
        color: white;
        padding: 4px 8px;
        font-size: 12px;
        letter-spacing: 1px;
        margin-top: 12px;
    }
    p {
        width: 420px;
        text-align: start;
        margin-left: 6px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 22px;
    }
    button {
        background-color:#E66767;
        border: none;
        color:  #FFEBD9;
        padding: 3px;
        font-family: Roboto;
        margin-left: 6px;
        margin-top: 8px;
    }
    div {
        display: flex;
        margin-left: 6px;
        gap: 318px; 
    h3 {
        font-size: 18px;    
        font-weight: 700;
        margin-top: 12px;
    }
    span {
    margin-top: 12px;
    }
}
.destaques {
    position: absolute;
    right: 10px;
    display: flex;
    color: white;
    font-size: 12px;
    letter-spacing: 1px;
    margin-top: 12px;
    gap: 12px;

    .destaque, .first {
    background-color:  #E66767;
    padding: 4px 8px;
    }
}
`;


