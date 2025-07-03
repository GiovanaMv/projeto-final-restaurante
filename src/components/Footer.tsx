import styled from "styled-components";
import Logo from "../assets/logo.png"


const Section = styled.footer`
    background-color:#FFEBD9;
    padding: 16px;
    color: #E66767;
    text-align: center;

    .logo {
    display: flex; 
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 16px;
}
    i {
        cursor: pointer;
    }
    p {
    font-size: 10px;
    width: 650px;
    display: flex; 
    margin: 32px auto 0px;
    }
`;
export function Footer() {
    return (
        <Section>
            <img className="logo" src={Logo} alt="Logo-EFOOD" />
            <span><i className="bi bi-whatsapp"></i><i className="bi bi-instagram ms-3 me-3"></i><i className="bi bi-facebook"></i></span>
            <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
        </Section>
    )
}