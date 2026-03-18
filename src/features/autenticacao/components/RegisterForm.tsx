"use client"
import BotaoGenerico from "@/shared/components/BotaoGenerico";
import InputGenerico from "@/shared/components/InputGenerico";

export default function RegisterForm() {
    return(
        <form className="flex flex-col justify-center items-center border border-borda rounded-2xl p-6 shadow-md gap-4 ">
            
            <h1 className="h1 font-bold bg-gradient-to-r from-hover to-cor-primaria bg-clip-text text-transparent">Registrar</h1>
            
            <div className="w-full flex flex-col gap-1">

            <label className="self-start text-lg font-medium text-cor-primaria">Nome: </label>

                <InputGenerico type="text" placeholder="Digite seu nome" 
                className="h3 border border-borda rounded-md px-3 py-2 shadow-sm
                focus:outline-none focus:ring-2 focus:ring-cor-primaria" />
            </div>
            
            <div className="w-full flex flex-col gap-1">
            <label className="self-start text-lg font-medium text-cor-primaria">Sobrenome: </label>

                <InputGenerico type="text" placeholder="Digite seu sobrenome" 
                className="h3 border border-borda rounded-md px-3 py-2 shadow-sm
                focus:outline-none focus:ring-2 focus:ring-cor-primaria" />
            </div>

            <div className="w-full flex flex-col gap-1">
            <label className="self-start text-lg font-medium text-cor-primaria">Email: </label>

            <InputGenerico type="email" placeholder="Digite seu email" 
            className="h3 border border-borda rounded-md px-3 py-2 shadow-sm
                focus:outline-none focus:ring-2 focus:ring-cor-primaria" />
            </div>

            <div className="w-full flex flex-col gap-1">

            <label className="self-start text-lg font-medium text-cor-primaria">Senha: </label>
            <InputGenerico  type="password" placeholder="Digite sua senha" 
            className="h3 border border-borda rounded-md px-3 py-2 shadow-sm
                focus:outline-none focus:ring-2 focus:ring-cor-primaria" />  
            </div>

            <div className="w-full flex flex-col gap-1">
            <label className="self-start text-lg font-medium text-cor-primaria">Confirme sua senha: </label>    
            <InputGenerico type="password" placeholder="Confirme sua senha" 
            className="h3 border border-borda rounded-md px-3 py-2 shadow-sm
                focus:outline-none focus:ring-2 focus:ring-cor-primaria" />
            </div>
            <div className="flex justify-center items-center gap-20 pt-4">
    
                <label>
                    <input type="radio" name="genero" value="masculino" />
                    Masculino
                </label>

                <label >
                    <input type="radio" name="genero" value="feminino"/>
                    Feminino
                </label>
            </div>

            <BotaoGenerico texto="Registrar" onClick={() => console.log("Registrar clicado")} 
                className="w-full h3 border border-borda rounded-lg px-3 py-2 shadow-sm
                 cursor-pointer active:scale-95
                 hover:bg-cor-primaria hover:text-destaque-suave" />

        </form>
    )
}