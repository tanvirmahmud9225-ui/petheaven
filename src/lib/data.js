
export const getAllPets = async (searchTearm) => {
    const res = await fetch(`http://localhost:8000/allpets?search=${searchTearm}`);
    const data = await res.json();
    return data;
}
export const getAllPetsByDash = async () => {
    const res = await fetch('http://localhost:8000/allpets');
    const data = await res.json();
    return data;
}


// export const getAllPetSearch = async(searchTearm = "") => {
//     const res = await fetch(`http://localhost:8000/allpets?search={searchTearm}`);
//     const data = await res.json();
//     return data || [];
// }


export const getHomepagePets = async () => {
    const res = await fetch('http://localhost:8000/homepagepets');
    const data = await res.json();
    return data;
}

// My Listing
export const getPetsMyListing = async (userId) => {
    const res = await fetch(`http://localhost:8000/mylisting/${userId}`);
    const data = await res.json();
    return data
}


// My Listing By Id
// export const getPetsMyListingByPetId = async (petId) => {
//     const res = await fetch(`http://localhost:8000/petrequestbyid/${petId}`);
//     const data = await res.json();
//     return data
// }
export const getPetsMyListingByPetId = async (petId) => {
    try {
        const res = await fetch(
            `http://localhost:8000/petrequestbyid/${petId}`,
            { cache: "no-store" }
        );

        const text = await res.text();
        if (!text) return null;

        return JSON.parse(text);
    } catch (error) {
        console.error(error);
        return null;
    }
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



export const getPetRequest = async (id, token) => {

    const res = await fetch(`http://localhost:8000/petrequest/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();
    return data;
}








