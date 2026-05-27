import AddPet from "@/components/AddPet";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const AddPetPage = async () => {


    const { token } = await auth?.api.getToken({
        headers: await headers()
    })



    return (
        <div className=''>
            <AddPet token={token} />
        </div>
    );
};

export default AddPetPage;