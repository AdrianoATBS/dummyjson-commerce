
export interface ProdutoResumo{
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    rating: number;
    thumbnail: string;
}

export interface ProdutoDetalhado extends ProdutoResumo{
    description: string;
    stock: number;
    brand: string;
    category: string;
    images: string[];
}