import ListaCategoria from "@/features/categoria/components/ListaCategoria";
import { getCategoria } from "@/features/categoria/services/getCategoria";
import ProdutoGrid from "@/features/produtos/components/ProdutoGrid";
import { getProdutos } from "@/features/produtos/services/getProdutos";

export default async function Home() {
  const categorias = await getCategoria();
  const produtos = await getProdutos();

  return (
      <main className="max-w-7xl mx-auto px-5 ">
        <ListaCategoria categorias={categorias} />
        <ProdutoGrid produtos={produtos} />
      </main>

  )
}
