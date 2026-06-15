import getProdutosPorCategoria from "@/features/categoria/services/getProdutosPorCategoria";
import ProdutoCategoriaGrid from "@/features/produtos/components/ProdutoCategoriaGrid";
import ProdutoCategoriaBanner from "@/features/produtos/components/ProdutoCategoriaBanner";
export default async function Categoria({params}: {params: {slug: string}}) {
    const slug = await params;

    const produtos = await getProdutosPorCategoria(slug.slug);

    return(
       <main className="w-full min-h-screen p-4">
            <ProdutoCategoriaBanner  />
            <ProdutoCategoriaGrid products={produtos} />
       </main>
    )
}