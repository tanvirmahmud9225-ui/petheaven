import AdoptedRequest from '@/components/AdoptedRequest';
import DeleteRequest from '@/components/DeleteRequest';
import { auth } from '@/lib/auth';
import { getPetRequest } from '@/lib/data';
import { Button, Table } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const MyRequestPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const id = session?.user?.id;

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const adoptionRequest = await getPetRequest(id, token)




    const pending = adoptionRequest.filter(request => request.status == "pending")
    const approve = adoptionRequest.filter(request => request.status == "approved")
    const reject = adoptionRequest.filter(request => request.status == "rejected")







    return (
        <div>
            <div className='mb-10 space-y-2 md:space-y-5'>
                <h1 className='md:text-6xl text-center md:text-left text-3xl font-bold '>My Adoption Requests</h1>
                <p className='text-center md:text-left'>Track the status of all your adoption <br className='md:hidden' /> requests here.</p>
            </div>

            {
                adoptionRequest.length === 0 ?
                    < div className='border border-gray-300 flex flex-col justify-center items-center p-10 gap-5 rounded-xl shadow-xl '>
                        <h1 className='text-4xl font-bold'>No Requests Yet</h1>
                        <p className='text-xl text-gray-500'>Browse availabe pets and submit your first adoption request</p>
                        <Link href={'/all-pets'}><Button> Browse Pets</Button></Link>
                    </div>
                    :

                    <div>

                        <div className='mb-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                            <div className='px-15 py-2 md:py-6 flex justify-center items-center border border-gray-300 shadow-sm rounded-2xl'>
                                <div className='text-center space-y-1.5 md:space-y-3'>
                                    <h1 className='text-gray-500 font-bold text-3xl'>{adoptionRequest.length}</h1>
                                    <p className='text-2xl font-semibold'>Total </p>

                                </div>
                            </div>
                            <div className='px-15 py-2 md:py-6 flex justify-center items-center border border-gray-300 shadow-sm rounded-2xl'>
                                <div className='text-center space-y-1.5 md:space-y-3'>
                                    <h1 className='text-gray-500 font-bold text-3xl'>{pending.length}</h1>
                                    <p className='text-2xl font-semibold'>Pending</p>

                                </div>
                            </div>
                            <div className='px-15 py-2 md:py-6 flex justify-center items-center border border-gray-300 shadow-sm rounded-2xl'>
                                <div className='text-center space-y-1.5 md:space-y-3'>
                                    <h1 className='text-gray-500 font-bold text-3xl'>{approve.length}</h1>
                                    <p className='text-2xl font-semibold'>Approved</p>

                                </div>
                            </div>
                            <div className='px-15 py-2 md:py-6 flex justify-center items-center border border-gray-300 shadow-sm rounded-2xl'>
                                <div className='text-center space-y-1.5 md:space-y-3'>
                                    <h1 className='text-gray-500 font-bold text-3xl'>{reject.length}</h1>
                                    <p className='text-2xl font-semibold'>Rejected</p>

                                </div>
                            </div>
                        </div>

                        <Table className='w-full mb-10 md:block hidden'>
                            <Table.ScrollContainer className='w-full'>
                                <Table.Content aria-label="Team members" className="w-full">
                                    <Table.Header className={''}>
                                        <Table.Column isRowHeader className={'font-bold text-black '}>Pet Name</Table.Column>
                                        <Table.Column className={'font-bold text-black'} >Request Date</Table.Column>
                                        <Table.Column className={'font-bold text-black'}>Pickup Date</Table.Column>
                                        <Table.Column className={'font-bold text-black'}>Status</Table.Column>
                                        <Table.Column className={'font-bold text-black text-center'}>Actions</Table.Column>
                                    </Table.Header>
                                    <Table.Body>

                                        {
                                            adoptionRequest.map(request =>
                                                <Table.Row key={request._id}>
                                                    <Table.Cell>{request.petName}</Table.Cell>
                                                    <Table.Cell>{request.adoptAt}</Table.Cell>
                                                    <Table.Cell>{

                                                        new Date(request.pickupdate).toLocaleDateString('en-GB', {
                                                            day: 'numeric',
                                                            month: 'long',
                                                            year: 'numeric'
                                                        })
                                                    }</Table.Cell>
                                                    <Table.Cell>{request.status}</Table.Cell>
                                                    {
                                                        request.status === 'pending' || request.status === 'rejected' ?

                                                            <Table.Cell className={'flex justify-center gap-3'}>
                                                                <Link href={`/all-pets/${request.petId}`}><Button>View</Button></Link>
                                                                <DeleteRequest id={request._id} petName={request.petName} token={token} />
                                                            </Table.Cell>
                                                            :
                                                            <Table.Cell className={'flex justify-center gap-3'}>
                                                                <Link href={`/all-pets/${request.petId}`}><Button>View</Button></Link>
                                                            </Table.Cell>
                                                    }
                                                </Table.Row>)
                                        }

                                    </Table.Body>
                                </Table.Content>
                            </Table.ScrollContainer>
                        </Table>



                        <div className="md:hidden space-y-3">
                            {adoptionRequest.map(request => (
                                <div key={request._id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">

                                    {/* Header: Pet name + Status badge */}
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="font-bold text-gray-800 text-base">{request.petName}</h3>
                                        <span className={`text-xs font-semibold px-2 py-1 rounded-full
          ${request.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : ''}
          ${request.status === 'approved' ? 'bg-green-100 text-green-700' : ''}
          ${request.status === 'rejected' ? 'bg-red-100 text-red-700' : ''}
        `}>
                                            {request.status}
                                        </span>
                                    </div>

                                    {/* Info rows */}
                                    <div className="space-y-1.5 text-sm text-gray-600 mb-4">
                                        <div className="flex justify-between">
                                            <span className="font-medium text-gray-500">Request Date</span>
                                            <span>{request.adoptAt}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium text-gray-500">Pickup Date</span>
                                            <span>
                                                {new Date(request.pickupdate).toLocaleDateString('en-GB', {
                                                    day: 'numeric', month: 'long', year: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex gap-2 pt-2 border-t border-gray-100">
                                        <Link href={`/all-pets/${request.petId}`} className="flex-1">
                                            <Button className="w-full">View</Button>
                                        </Link>
                                        {(request.status === 'pending' || request.status === 'rejected') && (
                                            <DeleteRequest id={request._id} petName={request.petName} token={token} />
                                        )}
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyRequestPage;