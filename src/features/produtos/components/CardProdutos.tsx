import { ProdutoDetalhado } from "../type"
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useMemo } from "react";
interface CardProdutosProps {
    produto: ProdutoDetalhado ; 
   
}


export default function CardProdutos({ produto }: CardProdutosProps){
    const precoFinal = useMemo(() => {
        const calculoDesconto = produto.price * (produto.discountPercentage / 100);
        console.log("Preço final calculado:", produto.price - calculoDesconto);
        return produto.price - calculoDesconto;
        
    }, [produto.price, produto.discountPercentage])

    return(
        <article className="flex flex-col justify-center items-center 
        rounded-lg p-4 w-full h-full hover:scale-105">
          
            <div className="flex flex-col w-72 h-72 items-center gap-2 bg-black  p-4
            overflow-hidden relative rounded-tl-2xl rounded-tr-2xl">
                <Image src={produto.thumbnail} alt={produto.title} 
                fill
              
                className="rounded-lg object-cover" />
            </div>   
            <div className="flex flex-col items-start gap-1 bg-fundo-secundario p-4 w-72 h-48
            rounded-bl-2xl rounded-br-2xl relative">
                    
                    <div className="w-full flex justify-between items-end gap-1 ">
                        <h2 className="h2 text-cor-primaria">{produto.category}</h2>
                        
                        <div className="flex justify-center items-center gap-2">
                            <FaStar className="text-cor-primaria" />
                            <p className="text-cor-primaria"> {produto.rating}</p>
                        </div>
                    
                    </div>
                    <h2 className="h2 line-clamp-2 font-light text-[#1D1A24] ">{produto.title}</h2>
                    
                    <p className="text-xl font-bold text-[#1D1A24]"> ${precoFinal.toFixed(2)}</p>
                    <div className="flex justify-start items-center gap-2">
                        {produto.discountPercentage > 0 && (
                            <p className="text-[#1D1A24] line-through"> ${produto.price.toFixed(2)}</p>
                        )}
                        {produto.discountPercentage > 0 && (
                            <p>({produto.discountPercentage.toFixed(0)}% de desconto)</p>                      
                        )}
                    </div>
                        
                    <div className="flex justify-center items-center gap-2 absolute top-27 right-2 
                    bg-[#EDE5F4] p-3 rounded-full   ">
                        <button className="cursor-pointer">
                            <FaPlus className="text-black" />
                        </button>
                    </div>
            </div>
            
        </article>
    )
}