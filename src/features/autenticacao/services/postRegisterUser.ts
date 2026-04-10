import fetcher from "../../../lib/fetcher";
import { RegisterUsers } from "../type";

export async function registerUser (firstName: string, 
    lastName: string, age: number): Promise<RegisterUsers> {

        const data = await fetcher<RegisterUsers>('/users/add', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName, lastName, age })
        })
        if(!data || !data.id){
            throw new Error('Resposta inválida do servidor');
        }
        return data;
}