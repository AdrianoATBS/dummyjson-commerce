"use client";
import { ProdutoResumo } from "../type";
import CardProdutos from "./CardProdutos";
import Link from "next/link";
interface ProdutoGridProps {
    products: ProdutoResumo[];
}

export default function ProdutoGrid({ products }: ProdutoGridProps){ 

  return (
    <>
      <section className="grid grid-cols-1 gap-4 pt-4 pb-4 sm:grid-cols-2 md:grid-cols-3">
        {products.map((produto) => (
            <Link href={`/produto/${produto.id}`} key={produto.id}>
            <CardProdutos produto={produto} />
            </Link>
        ))}
    </section>
    
    </>
  );
}