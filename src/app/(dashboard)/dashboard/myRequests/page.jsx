import DeleteRequest from '@/components/DeleteRequest';
import { getPetRequest } from '@/lib/data';
import { Button, Table } from '@heroui/react';
import React from 'react';

const MyRequestPage = async () => {

    const adoptionRequest = await getPetRequest()





    return (
        <div>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="w-full">
                        <Table.Header>
                            <Table.Column isRowHeader className={'font-bold text-black'}>Pet Name</Table.Column>
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
                                    <Table.Cell>{request.pickupdate}</Table.Cell>
                                    <Table.Cell>{request.status}</Table.Cell>
                                    <Table.Cell className={'flex justify-center gap-3'}>
                                        <Button>View</Button>
                                        <Button>Adopt</Button>
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