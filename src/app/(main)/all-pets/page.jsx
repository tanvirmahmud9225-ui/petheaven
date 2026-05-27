import AllPetsCard from '@/components/AllPetsCard';
import { getAllPets } from '@/lib/data';

import SearchFilter from '@/components/SearchFilter';

const AllPetsPage = async ({ searchParams }) => {

    const sParams = await searchParams

    // const searchPets = getAllPetSearch(sParams.searchTearm || "")


    const pets = await getAllPets(sParams.searchTearm || "");



    return (
        <div className=' lg:w-7xl w-[90%] mx-auto'>
            <div className='md:my-10 my-5 space-y-3 md:space-y-5'>
                <h1 className='md:text-7xl text-5xl font-bold  '>Browse All Pets </h1>
                <p className='text-lg'>{pets.length} pets available for adoption</p>
            </div>

            <div className=' bg-slate-100 rounded-2xl p-5 mb-10'>
                <SearchFilter />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    pets.map(pet => <AllPetsCard key={pet._id} pet={pet} />)
                }
            </div>
        </div>
    );
};

export default AllPetsPage;