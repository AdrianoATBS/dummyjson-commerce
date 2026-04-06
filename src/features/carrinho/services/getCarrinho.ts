import { CarrinhoItem } from "@/features/carrinho/type";
import fetcher from "@/lib/fetcher";

type CarrinhoAPIResponse = {
    carts: {
        products: {
            id: number;
            title: string;
            price: number;
            quantity: number;
            thumbnail: string;
        }[];
    }[];         
}
export default async function getCarrinho(): Promise<CarrinhoItem[]> {
    const carrinho = await fetcher<CarrinhoAPIResponse>(`/carts`);
    return carrinho.carts[0].products;
}