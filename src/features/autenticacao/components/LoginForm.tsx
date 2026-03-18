"use client"
import BotaoGenerico from "@/shared/components/BotaoGenerico";
import InputGenerico from "@/shared/components/InputGenerico";
import Link from "next/link";
export default function LoginForm() {
    return(
        <form className="flex flex-col items-center justify-center
         border border-borda rounded-2xl p-6 shadow-md gap-4">
                <h1 className="h1 font-bold bg-gradient-to-r from-hover to-cor-primaria bg-clip-text text-transparent">Login</h1>
                
                <div className="w-full flex flex-col gap-1">
                <label className="self-start text-lg font-medium text-cor-primaria">Usuario: </label>

                    <InputGenerico type="text" placeholder="Digite Seu Usuario"
                    className="h3 border border-borda rounded-md px-3 py-2 shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-cor-primaria "/>
                </div>
                
                <div className="w-full flex flex-col gap-1">
                    <label className="self-start text-lg font-medium text-cor-primaria">Senha: </label>

                    <InputGenerico type="password" placeholder="Digite Sua Senha"
                    className="h3 border border-borda rounded-md px-3 py-2 shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-cor-primaria" />
                </div>
                
                <BotaoGenerico texto="Entrar" onClick={() => console.log("Login clicado")} 
                    className="w-full h3 border border-borda rounded-lg px-3 py-2 shadow-sm
                     cursor-pointer active:scale-95
                     hover:bg-cor-primaria hover:text-destaque-suave" />
                
                <p className="text-cor-primaria">
                    Não tem uma conta? <Link 
                    href="/register" className="text-lg text-cor-primaria hover:text-hover hover:underline">Cadastre-se</Link>
                </p>
        </form>
    )
}