import fetcher from "@/lib/fetcher";
import { AutenticacaoResumo } from "../type";


export async function loginUser (username: string, password: string, ): Promise<AutenticacaoResumo> {
    return await fetcher<AutenticacaoResumo>('/auth/login', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }
    );
}