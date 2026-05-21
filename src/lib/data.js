import { headers } from "next/headers";
import { auth } from "./auth";

export const getAllPets = async () => {
    const res = await fetch('http://localhost:8000/allpets');
    const data = await res.json();
    return data;
}



export const getPetById = async (petId, token) => {
    const res = await fetch(`http://localhost:8000/allpets/${petId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res?.json();
    return data;
}



export const getPetRequest = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })



    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`http://localhost:8000/petrequest/${session?.user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();
    return data;
}








