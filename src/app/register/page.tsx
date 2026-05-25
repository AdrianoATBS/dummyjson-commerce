import RegisterForm from "@/features/autenticacao/components/RegisterForm";
import HeaderLoginRegistro from "@/shared/components/HeaderLoginRegistro";
export default function Register() {
    return(
        <main className="min-h-screen w-full flex flex-col justify-between items-center">
            <HeaderLoginRegistro />
            <div className="w-full flex items-center justify-center flex-1 mb-12">

                <RegisterForm />
            </div>
        </main>
    )
}