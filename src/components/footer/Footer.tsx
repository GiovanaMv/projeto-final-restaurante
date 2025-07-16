import Logo from "../assets/logo.png"
import { Section } from "./styled"

export function Footer() {
    return (
        <Section>
            <img className="logo" src={Logo} alt="Logo-EFOOD" />
            <span><i className="bi bi-whatsapp"></i><i className="bi bi-instagram ms-3 me-3"></i><i className="bi bi-facebook"></i></span>
            <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
        </Section>
    )
}