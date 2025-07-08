import { useState } from "react";
import { Header } from "../components/Header";
import { Cardapio } from "../pages/Cardapio";
import { Cart } from "../components/Cart";

export function CardapioPage() {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <>
            <Header setCartOpen={setCartOpen} />
            <Cardapio />
            {cartOpen && <Cart onClose={() => setCartOpen(false)} />}
        </>
    );
}