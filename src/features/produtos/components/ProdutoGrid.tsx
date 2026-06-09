"use client";
import { ProdutoResumo } from "../type";
import CardProdutos from "./CardProdutos";
import Link from "next/link";
import { ProdutoDetalhado } from "../type";
interface ProdutoGridProps {
    products: ProdutoDetalhado[];
   
}

export default function ProdutoGrid({ products }: ProdutoGridProps){ 

  return (
    <>
      <div className="grid grid-cols-1 gap-4 pt-4 pb-4 sm:grid-cols-2 md:grid-cols-3">
        {products.map((produto) => (
            <Link href={`/produto/${produto.id}`} key={produto.id}>
            <CardProdutos produto={produto} />
            </Link>
        ))}
    </div>
    
    </>
  );
}