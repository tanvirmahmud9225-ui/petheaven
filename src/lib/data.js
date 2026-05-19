export const getAllPets = async () => {
    const res = await fetch('http://localhost:8000/allpets');
    const data = await res.json();
    return data;
}



export const getPetById = async (petId) => {
    const res = await fetch(`http://localhost:8000/allpets/${petId}`)
    const data = await res.json();
    return data;
}











