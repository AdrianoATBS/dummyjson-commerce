import { Autenticacao } from "../type";
import { fetcher } from "@/lib/fetcher";


export async function loginUser (username: string, password: string): Promise<Autenticacao> {
    const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    });
    if (!response.ok) {
        throw new Error("Erro ao fazer login");
    }
    const data = await response.json();
    return data;
}