import BotaoGenerico from "@/shared/components/BotaoGenerico";
import { ProdutoDetalhado } from "../type";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
interface CardProdutoDestaqueProps {
    produtoDestaque: ProdutoDetalhado;
}

export default function CardProdutoDestaque({ produtoDestaque }: CardProdutoDestaqueProps){
    const calculoDesconto = produtoDestaque.price * (produtoDestaque.discountPercentage / 100);
    const precoComDesconto = produtoDestaque.price - calculoDesconto;
   
    return(
        <div className="w-full h-full flex flex-row bg-fundo-primario shadow-lg p-4 rounded-xl">
            <div className="max-w-2xl flex flex-col w-2/5  h-72 items-center gap-2 bg-black  p-4
            overflow-hidden relative rounded-lg  ">
                <Image src={produtoDestaque.thumbnail} alt={produtoDestaque.title}
                fill
                className="object-cover" />
            </div>

            <div className="w-3/5 flex flex-col gap-4 ml-6">
                <div className="flex justify-between items-start gap-1 mt-4">
                    <p className="text-lg font-bold text-[#301400] bg-[#FFDCC6] 
                    rounded-xl p-3">Exclusive Selection</p>

                    <div className="flex justify-center items-center gap-2">
                        <FaStar className="text-cor-primaria" />
                        <p className="text-cor-primaria"> {produtoDestaque.rating}</p>
                    </div>
                </div>
                <h2 className="text-2xl font-medium text-[#1D1A24]">{produtoDestaque.title}</h2>
                <p className="text-[#1D1A24]">{produtoDestaque.description}</p>

                <div className="flex items-center gap-7">
                    <p className="text-3xl font-bold text-cor-primaria">
                        ${precoComDesconto.toFixed(2)}
                    </p>
                    {produtoDestaque.discountPercentage > 0 && (
                        <p className="text-md text-[#4A4455] line-through">
                            ${produtoDestaque.price.toFixed(2)}
                        </p>
                    )}
                </div>
                <BotaoGenerico texto="Adicionar à coleção" onClick={() =>
                     {}} className="w-4/5 px-4 py-3 bg-black text-white rounded-lg  cursor-pointer
                     active:scale-95 hover:bg-gray-700" />
            </div>
        </div>
    )
}