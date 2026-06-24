"use client"
import { ProdutoDetalhado } from "../type"

import { CiCircleCheck } from "react-icons/ci";

interface ProdutoDescricaoProps {
    produto: ProdutoDetalhado;
}

export default function ProdutoDescricao({produto}: ProdutoDescricaoProps) {
    
    return(
        <section className="flex flex-col gap-4">
           <p className="text-lg tracking-wider">{produto.description}</p>
            <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col items-start gap-2">

                    <div className="flex items-center gap-2">
                        <CiCircleCheck className="text-cor-primaria text-2xl " strokeWidth={1} />
                        <p className="text-[#1D1A24] text-sm">Frete grátis</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                    <CiCircleCheck className="text-cor-primaria text-2xl" strokeWidth={1}  />
                    <p className="text-[#1D1A24] text-sm">Produto original</p>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-2">
                        <CiCircleCheck className="text-cor-primaria text-2xl" strokeWidth={1} />
                        <p className="text-[#1D1A24] text-sm">Duradorou</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <CiCircleCheck className="text-cor-primaria text-2xl" strokeWidth={1} />
                        <p className="text-[#1D1A24] text-sm">Não testado em animais</p>
                    </div>
                </div>
                
            </div>
          

        
               
            
        </section> 
    )
}