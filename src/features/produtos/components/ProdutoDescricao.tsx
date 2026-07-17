"use client"
import { ProdutoDetalhado } from "../type"

import { CiCircleCheck } from "react-icons/ci";

interface ProdutoDescricaoProps {
    descricao: string;
}

export default function ProdutoDescricao({descricao}: ProdutoDescricaoProps) {
    const beneficios = [
        "Frete grátis",
        "Produto original",
        "Duradouro",
        "Não testado em animais"
    ]
    return(
        <section className="flex flex-col gap-4">
           <p className="text-lg tracking-wider">{descricao}</p>
            <div className="grid grid-cols-2 gap-2 mt-2 ml-20 ">
                {beneficios.map((beneficio) => (
                    <div key={beneficio} className="flex items-center gap-2">
                        <CiCircleCheck arial-hidden="true" className="text-cor-primaria text-2xl" strokeWidth={1} />
                        <p className="text-[#1D1A24] text-sm">{beneficio}</p>
                    </div>
                ))}
            </div>
         

        </section> 
    )
}