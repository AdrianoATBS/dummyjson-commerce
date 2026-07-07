"use client";
import CardCarrinho from "@/features/carrinho/components/CardCarrinho";
import CardTotal from "@/features/carrinho/components/CardTotal";
import { useCarrinho } from "@/shared/hooks/useCarrinho";

export default function Carrinho() {
    const {carrinho} = useCarrinho();
    
    
    return(
        <main className="flex gap-4 p-4 ">
            <div className="flex-1 flex flex-col gap-4">

                {carrinho.map((item) => {
                    return <CardCarrinho key={item.id} carrinhoItem={item}/>
                })}
            </div>
            <div className="flex-1 flex items-start justify-end">

                <CardTotal carrinho={carrinho}/>
            </div>
        </main>
    )
}