import CardCarrinho from "@/features/carrinho/components/CardCarrinho";
import getCarrinho from "@/features/carrinho/services/getCarrinho";

export default async function Carrinho() {
    const carrinhoAPI = await getCarrinho();

    return(
        <>
            {carrinhoAPI.map((item) => {
                return <CardCarrinho key={item.id} carrinhoItem={item}/>
            })}
        </>
    )
}