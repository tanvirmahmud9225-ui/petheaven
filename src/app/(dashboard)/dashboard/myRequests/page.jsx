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



    return (
        <div>
            <Table className='w-full'>
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
                                adoptionRequest.map(request => <Table.Row key={request._id}>
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
                                    <Table.Cell className={'flex justify-center gap-3'}>
                                        <Link href={`/all-pets/${request.petId}`}><Button>View</Button></Link>
                                        <DeleteRequest id={request._id} />
                                    </Table.Cell>
                                </Table.Row>)
                            }

                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default MyRequestPage;