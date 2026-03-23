"use client"
import BotaoGenerico from "@/shared/components/BotaoGenerico";
import InputGenerico from "@/shared/components/InputGenerico";
import Link from "next/link";
import { useState } from "react";
import { loginUser } from "../services/loginUser";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();
        try{
            const autenticacao = await loginUser(userName, password);
            localStorage.setItem("autenticacao", JSON.stringify(autenticacao));
            router.push("/");
        }catch(error){
            console.error("Erro ao fazer login:", error);

        }finally{
            setUsername("");
            setPassword("");
        }
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center
         border border-borda rounded-2xl p-6 shadow-md gap-4">
                <h1 className="h1 font-bold bg-gradient-to-r from-hover to-cor-primaria bg-clip-text text-transparent">Login</h1>
                
                <div className="w-full flex flex-col gap-1">
                <label className="self-start text-lg font-medium text-cor-primaria">Usuario: </label>

                    <InputGenerico type="text" placeholder="Digite Seu Usuario"
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                    className="h3 border border-borda rounded-md px-3 py-2 shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-cor-primaria "/>
                </div>
                
                <div className="w-full flex flex-col gap-1">
                    <label className="self-start text-lg font-medium text-cor-primaria">Senha: </label>

                    <InputGenerico type="password" placeholder="Digite Sua Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h3 border border-borda rounded-md px-3 py-2 shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-cor-primaria" />
                </div>
                
                <BotaoGenerico texto="Entrar" 
                    className="w-full h3 border border-borda text-cor-primaria rounded-lg px-3 py-2 shadow-sm
                     cursor-pointer active:scale-95
                     hover:bg-cor-primaria hover:text-destaque-suave" />
                
                <p className="text-cor-primaria">
                    Não tem uma conta? <Link 
                    href="/register" className="text-lg text-cor-primaria hover:text-hover hover:underline">Cadastre-se</Link>
                </p>
        </form>
    )
}