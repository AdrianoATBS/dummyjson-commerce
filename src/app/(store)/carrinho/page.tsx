"use client";
import CardCarrinho from "@/features/carrinho/components/CardCarrinho";
import CardTotal from "@/features/carrinho/components/CardTotal";
import { useCarrinho } from "@/shared/hooks/useCarrinho";
import { useEffect } from "react";

export default function Carrinho() {
    const {carrinho} = useCarrinho();
    const { removerDoCarrinho } = useCarrinho();
    const { incrementarQuantidade } = useCarrinho();
    const { decrementarQuantidade } = useCarrinho();
    const { limparCarrinho } = useCarrinho();
    const handleRemoverDoCarrinho = (id: number) => {
        removerDoCarrinho(id)
    }
    
    const handleIncrementarQuantidade = (id: number) => {
        incrementarQuantidade(id)
    }
    const handleDecrementarQuantidade = (id: number) => {
        decrementarQuantidade(id)
    }
    
    
  
    
    return(
        <main className="flex gap-4 p-4 ">
            <div className="flex-1 flex flex-col gap-4">

                {carrinho.map((item) => {
                    return <CardCarrinho key={item.id} carrinhoItem={item} 
                    handleRemoverDoCarrinho={handleRemoverDoCarrinho} 
                    handleIncrementarQuantidade={handleIncrementarQuantidade}
                    handleDecrementarQuantidade={handleDecrementarQuantidade}/>
                })}
            </div>
            <div className="flex-1 flex items-start justify-end">

                <CardTotal carrinho={carrinho} limparCarrinho={limparCarrinho}/>
            </div>
        </main>
    )
}