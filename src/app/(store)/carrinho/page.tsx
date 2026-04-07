"use client";
import CardCarrinho from "@/features/carrinho/components/CardCarrinho";

import { useCarrinho } from "@/shared/hooks/useCarrinho";

export default function Carrinho() {
    const {carrinho} = useCarrinho();

    

    return(
        <>
            {carrinho.map((item) => {
                return <CardCarrinho key={item.id} carrinhoItem={item}/>
            })}
        </>
    )
}