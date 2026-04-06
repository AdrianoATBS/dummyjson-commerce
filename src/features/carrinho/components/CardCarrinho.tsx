import { CarrinhoItem } from "@/features/carrinho/type";
import BotaoGenerico from "@/shared/components/BotaoGenerico";
import Image from "next/image";
import { RiDeleteBin5Fill } from "react-icons/ri";

interface CardCarrinhoProps {
    carrinhoItem: CarrinhoItem;
}
export default function CardCarrinho({ carrinhoItem }: CardCarrinhoProps){
    return(
        <section className="flex gap-6 p-4 mb-4 rounded-xl shadow-md border border-borda ">
            <div className="flex-shrink-0">
                <Image src=
                {carrinhoItem.thumbnail} 
                alt={carrinhoItem.title}
                width={200} height={100}
                className="object-contain rounded-lg shadow-md hover:scale-95"/>
            </div>

            <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col gap-2">
                    <h2 className="h2">{carrinhoItem.title}</h2>
                    <p className="destaque-preco">Preço: R${carrinhoItem.price.toLocaleString('pt-BR',
                        {minimumFractionDigits: 2, maximumFractionDigits: 2}
                    )}</p>
                    <p className="texto-secundario">Quantidade: {carrinhoItem.quantity}</p>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                    <RiDeleteBin5Fill className="cursor-pointer fill-cor-primaria active:scale-110 transition"/>
                    <BotaoGenerico texto="Comprar" 
                    className="border border-cor-primaria rounded-lg text-cor-primaria px-4 py-2
                    cursor-pointer hover:bg-cor-primaria hover:text-white active:scale-95"/>

                </div>
                
                
            </div>
        </section>
    )
}