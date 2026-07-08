import { CarrinhoItem } from "@/features/carrinho/type";
import Image from "next/image";
import { RiDeleteBin5Fill } from "react-icons/ri";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Link from "next/link";
interface CardCarrinhoProps {
    carrinhoItem: CarrinhoItem;
    handleRemoverDoCarrinho?: (id: number) => void;
    handleIncrementarQuantidade?: (id: number) => void;
    handleDecrementarQuantidade?: (id: number) => void;
}
export default function CardCarrinho({ carrinhoItem, handleRemoverDoCarrinho, handleIncrementarQuantidade, handleDecrementarQuantidade }: CardCarrinhoProps){

    const precoTotal = carrinhoItem.price * carrinhoItem.quantity;

    return(
        <>
        
        <section className="flex gap-6 p-4 mb-4 rounded-xl shadow-md border border-borda ">
            <div className="shrink-0">
               <Link href={`/produto/${carrinhoItem.id}`}>
                    <Image src=
                    {carrinhoItem.thumbnail} 
                    alt={carrinhoItem.title}
                    width={200} height={100}
                    className="object-contain rounded-lg shadow-md hover:scale-95"/>
                </Link>
            </div>

            <div className="flex justify-between w-full items-start">
                <div className="flex flex-col  gap-2 ">
                    <h2 className="h2 text-left">{carrinhoItem.title}</h2>

                    <div className="flex items-center gap-2 bg-[#EDE5F4] rounded-full px-2 py-1 mt-2 w-fit">
                        <button  className="p-2 cursor-pointer " onClick={() =>
                             handleDecrementarQuantidade && handleDecrementarQuantidade(carrinhoItem.id)}>
                            <FaMinus className="text-[#1D1A24]" />
                        </button>

                        <p className="text-[#1D1A24]">{carrinhoItem.quantity}</p>

                        <button className="p-2 cursor-pointer " onClick={() => handleIncrementarQuantidade && handleIncrementarQuantidade(carrinhoItem.id)}>
                            <FaPlus className="text-[#1D1A24]" />
                        </button>
                    </div>
                </div>    
                <div className="flex flex-col items-end justify-between h-full gap-4  mt-4">
                    <RiDeleteBin5Fill className="cursor-pointer fill-[#7B7487] active:scale-110 transition" 
                    onClick={() => handleRemoverDoCarrinho && handleRemoverDoCarrinho(carrinhoItem.id)}/>
                    <div className="text-end mt-auto">

                        <h3 className="text-xs text-[#4A4455]">SUBTOTAL</h3>
                        <p className="text-lg  text-cor-primaria">R$ {precoTotal.toFixed(2)}</p>
                    </div>
                
                </div>
            </div>  
              
        </section>

        </>
    )
}