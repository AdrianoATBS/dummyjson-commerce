import LoginForm from "@/features/autenticacao/components/LoginForm";
import HeaderLoginRegistro from "@/shared/components/HeaderLoginRegistro";
export default function Login() {
    return(
        <main className="min-h-screen w-full flex flex-col justify-between items-center">
            <HeaderLoginRegistro />

            <div className="w-full flex items-center justify-center flex-1 my-6">
                <LoginForm />
            </div>

            <div className="hidden md:block h-10"></div>
        </main>

    )
}