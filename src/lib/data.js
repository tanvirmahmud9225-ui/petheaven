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











