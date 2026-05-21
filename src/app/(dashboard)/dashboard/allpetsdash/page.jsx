import { getAllPets } from '@/lib/data';
import AllPetsCardDash from '@/components/AllPetsCardDash';

const AllPetsOfDashborad = async () => {
    const pets = await getAllPets();

    return (
        <div>
            <h1 className='text-5xl font-bold my-10'>All pets hera </h1>

            <div className='grid grid-cols-3 w-11/12 mx-auto gap-5'>
                {
                    pets.map(pet => <AllPetsCardDash key={pet._id} pet={pet} />)
                }
            </div>
        </div>
    );
};

export default AllPetsOfDashborad;