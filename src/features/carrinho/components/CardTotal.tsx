"use client";
import { CarrinhoItem } from "@/features/carrinho/type";
import BotaoGenerico from "@/shared/components/BotaoGenerico";
import { useState } from "react";
import { useRouter } from "next/navigation";
interface CardTotalProps {
    carrinho: CarrinhoItem[];
    limparCarrinho: () => void;
   
}

export default function CardTotal({ carrinho, limparCarrinho }: CardTotalProps  ){
    const router = useRouter();
    const subtotal = carrinho.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    const [taxaEnvio] = useState(() => {
        return Math.random() * (20 - 5) + 5; 
    })

    const total = subtotal + taxaEnvio;
    const handleFinalizarCompra = () => {
        alert("Compra finalizada com sucesso!");
        limparCarrinho();
        router.push("/");
    }
    return(
        <section className="w-full max-w-md bg-[#EDE5F4] p-4 rounded-2xl shadow-md">
            <h2 className="text-[#4A4455] text-md">Resumo do Pedido</h2>
            <div className="w-full flex flex-col gap-2 mt-4 justify-between text-[#1D1A24]">
                <div className="flex justify-between">
                    <p className="text-[#4A4455] text-md">Subtotal</p>
                    <span className="text-[#1D1A24] ">{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                    <p className="text-[#4A4455] text-md">Taxa estimada</p>
                    <span className="text-[#1D1A24]" >{taxaEnvio.toFixed(2)}</span>
                </div>

                <div className="flex justify-between border-t border-[#CCC3D8]/30 pt-2 mt-2">
                    <p className="text-[#1D1A24] text-lg">Total</p>
                    <span className="text-[#630ED4] text-3xl">{total.toFixed(2)}</span>
                </div>

            </div>
            <div className="flex flex-col gap-2 mt-4">
               <BotaoGenerico texto="Finalizar Compra" onClick={() => handleFinalizarCompra() } 
               className="w-full mt-4 text-fundo-primario bg-cor-primaria p-3 rounded-2xl
               cursor-pointer hover:bg-hover"/>

                <BotaoGenerico  texto="Continuar Comprando" onClick={() => router.push("/")}
                className="w-full mt-4 text-cor-primaria bg-fundo-secundario p-3 rounded-2xl
                cursor-pointer "/>
            </div>
        </section>
    )
}

