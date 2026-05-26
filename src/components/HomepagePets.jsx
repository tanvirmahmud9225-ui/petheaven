import { getHomepagePets } from '@/lib/data';
import AllPetsCard from '@/components/AllPetsCard';
import SearchFilter from '@/components/SearchFilter';
import Link from 'next/link';
import { BiRightArrow } from 'react-icons/bi';

const HomepagePets = async () => {

    const pets = await getHomepagePets();


    return (
        <div className='bg-[#fbf9f5] py-30'>

            <div className=' lg:w-7xl w-[95%]  mx-auto'>
                <div className='my-10 text-center space-y-4'>
                    <h1 className='text-7xl font-bold '>Meet Our Friends </h1>
                    <p className='text-gray-500 text-xl'>These adorable pets are waiting for their forever homes. Each One has a unique <br /> personality and endless love to give.</p>
                </div>

                <div className='grid col-end-1 lg:grid-cols-3 gap-5'>
                    {
                        pets.map(pet => <AllPetsCard key={pet._id} pet={pet} />)
                    }
                </div>
                <div className='mt-5 w-50 text-right'>
                    <Link href={'/all-pets'} className='btn block flex items-center w-full group'>View All Pets <BiRightArrow className='group-hover:translate-x-1.5 transition-transform duration-300 ' /></Link>
                </div>
            </div>

        </div>
    );
};

export default HomepagePets;