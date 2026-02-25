import ListaCategoria from "@/features/categoria/components/ListaCategoria";
import { getCategoria } from "@/features/categoria/services/getCategoria";

export default async function Home() {
  const categorias = await getCategoria();

  return (
      <main>
        <ListaCategoria categorias={categorias} />
        
      </main>

  )
}
