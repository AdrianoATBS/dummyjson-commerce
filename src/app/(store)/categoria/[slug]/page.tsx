import getProdutosPorCategoria from "@/features/categoria/services/getProdutosPorCategoria";
import ProdutoCategoriaGrid from "@/features/produtos/components/ProdutoCategoriaGrid";
import ProdutoCategoriaBanner from "@/features/produtos/components/ProdutoCategoriaBanner";
import Breadcrumb from "@/shared/components/Breadcrumb";
export default async function Categoria({params}: {params: {slug: string}}) {
    const slug = await params;
    const produtos = await getProdutosPorCategoria(slug.slug);

    const breadcrumbItems = [
        {label: "Inicio", href: "/"},
        {label: slug.slug, href: `/categoria/${slug.slug}`},
    ]

    return(
       <main className="w-full min-h-screen p-4">
            <Breadcrumb items={breadcrumbItems} />
            <ProdutoCategoriaBanner  />
            <ProdutoCategoriaGrid produtos={produtos} />
       </main>
    )
}