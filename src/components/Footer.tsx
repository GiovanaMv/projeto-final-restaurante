import styled from "styled-components";

const Section = styled.footer`
    background-color:rgb(254, 207, 176);
    padding: 16px;
    color: #cf0909;
    text-align: center;

    .logo {
    display: flex; 
    justify-content: center;
    margin-bottom: 16px;

    h1 {
    display: flex; 
    border: 3px solid  #cf0909;
    border-radius: 12px;
    width: 112px;
    padding: 6px;
    margin: 3px;
    background-color: white;
    font-family: "Lora", serif;
    font-size: 1.5rem;
    }
}
    i {
        cursor: pointer;
    }
    p {
    font-size: 1rem;
    width: 650px;
    display: flex; 
    margin: 18px auto 0px;
    }
`;
export function Footer() {
    return (
        <Section>
            <div className="logo"><h1>Efood<i className="bi bi-fork-knife ms-2"></i></h1></div>
            <span><i className="bi bi-whatsapp"></i><i className="bi bi-instagram ms-3 me-3"></i><i className="bi bi-facebook"></i></span>
            <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
        </Section>
    )
}