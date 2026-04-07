"use client";

import { CarrinhoItem } from "@/features/carrinho/type";
import { createContext, useState } from "react";

type CarrinhoContextType = {
    carrinho: CarrinhoItem[];
    adicionarAoCarrinho: (produto: CarrinhoItem) => void;
    removerDoCarrinho: (produtoId: number) => void;
}

export const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export function CarrinhoProvider({ children }: { children: React.ReactNode }) {
    const [carrinho, setCarrinho] = useState<CarrinhoItem[]>([]);

    const adicionarAoCarrinho = (produto: CarrinhoItem) => {
        setCarrinho((prevCarrinho) => {
            const itemExistente = prevCarrinho.find(item => item.id === produto.id);
            if(itemExistente){
                return prevCarrinho.map(item => 
                    item.id === produto.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCarrinho, produto];
        });
    };

    const removerDoCarrinho = (produtoId: number) => {
        setCarrinho((prevCarrinho) => {
            const itemExistente = prevCarrinho.find(item => item.id === produtoId);
            if(itemExistente){
                if(itemExistente.quantity > 1){
                    return prevCarrinho.map(item => 
                        item.id === produtoId ? { ...item, quantity: item.quantity - 1 } : item
                    );
                } else {
                    return prevCarrinho.filter(item => item.id !== produtoId);
                }
            }
            return prevCarrinho;
        });
    };

    return (
        <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
}