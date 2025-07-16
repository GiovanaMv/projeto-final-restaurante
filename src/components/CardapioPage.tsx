import { useState } from "react";
import { Header } from "./header/Header";
import { Cardapio } from "../pages/pratos/Cardapio";
import { Cart } from "./Cart";

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