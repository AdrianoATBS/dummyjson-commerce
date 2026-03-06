"use client"
import { ProdutoDetalhado } from "../type"
import { useState } from "react";
interface ProdutoDescricaoProps {
    produto: ProdutoDetalhado;
}

export default function ProdutoDescricao({produto}: ProdutoDescricaoProps) {
    const [abrirDescricao, setAbrirDescricao] = useState(false);
    
    function handleToggleDescricao() {
        setAbrirDescricao(!abrirDescricao);
    }
    return(
        <section className="max-w-2xl mt-10 ">

            <h2 className="h2 flex">Descrição do produto</h2>
            <button onClick={handleToggleDescricao} 
            className="text-sm text-texto-secundario flex items-center gap-1 hover:text-cor-primaria
            cursor-pointer transition-all duration-300 ease-in-out active:scale-95">
                {abrirDescricao ? "Descrição ▼" : "Descrição ▲"}
            </button>
            {abrirDescricao && <p className="text-texto-secundario leading-relaxed">{produto.description}</p>}
       
        </section> 
    )
}