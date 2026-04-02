"use client"
import BotaoGenerico from "@/shared/components/BotaoGenerico";
import InputGenerico from "@/shared/components/InputGenerico";
import { useState } from "react";
import { registerUser } from "../services/postRegisterUser";
import { useRouter } from "next/navigation";
import Link from "next/link";
export  default function RegisterForm() {

    const router = useRouter();


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");


    const handleSubmit  = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const ageNumber = Number(age);
            if(isNaN(ageNumber) || ageNumber <= 0){
                throw new Error("Idade inválida. Por favor, insira um número positivo.");
            }
            const autenticacao = await registerUser(firstName, lastName, ageNumber);
            localStorage.setItem("autenticacao", JSON.stringify(autenticacao));


            setFirstName("");
            setLastName("");
            setAge("");
            router.push("/");
        } catch (error) {
            console.error("Erro ao registrar usuário:", error); 
        }
        finally{
            console.log("Processo de registro concluído.");
        }
    }

    return(
        <form onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center border border-borda rounded-2xl p-6 shadow-md gap-4 ">
            
            <h1 className="h1 font-bold bg-gradient-to-r from-hover to-cor-primaria bg-clip-text text-transparent">Registrar</h1>
            
            <div className="w-full flex flex-col gap-1">
            <label className="self-start text-lg font-medium text-cor-primaria">Nome: </label>

                <InputGenerico value={firstName} onChange={(e) => setFirstName(e.target.value)}
                type="text" placeholder="Digite seu nome" 
                className="h3 border border-borda rounded-md px-3 py-2 shadow-sm
                focus:outline-none focus:ring-2 focus:ring-cor-primaria" />
            </div>

            <div className="w-full flex flex-col gap-1">
            <label className="self-start text-lg font-medium text-cor-primaria">Sobrenome: </label>

            <InputGenerico value={lastName} onChange={(e) => setLastName(e.target.value)} 
            type="text" placeholder="Digite seu sobrenome" 
            className="h3 border border-borda rounded-md px-3 py-2 shadow-sm
                focus:outline-none focus:ring-2 focus:ring-cor-primaria" />
            </div>

            <div className="w-full flex flex-col gap-1">
                <label className="self-start text-lg font-medium text-cor-primaria">Idade: </label>
                    <InputGenerico value={age} onChange={(e) => setAge(e.target.value)} type="text" placeholder="Digite sua idade"
                    className="h3 border border-borda rounded-md px-3 py-2 shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-cor-primaria" />
            </div>

            <BotaoGenerico texto="Registrar"
                className="w-full h3 border border-borda text-cor-primaria rounded-lg px-3 py-2 shadow-sm
                 cursor-pointer active:scale-95
                 hover:bg-cor-primaria hover:text-destaque-suave" />

          
            <div className=" w-full flex justify-start ">
                <Link className="text-lg text-cor-primaria active:scale-95 hover:text-hover"
                href={"/login"}> ⬅ Voltar</Link>
            </div>
           
        </form>
    )
}