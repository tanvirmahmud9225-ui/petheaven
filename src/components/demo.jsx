'use client';

import { useState } from "react";
import {
    Modal, ModalContent, ModalHeader,
    ModalBody, ModalFooter, Button, useDisclosure
} from "@heroui/react";
import { getPetsMyListingByPetId } from "@/lib/data";
import { BsCheckCircleFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

const PetRequestShowCard = ({ id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(false);

    // Button click এ data load করো
    const handleOpen = async () => {
        setLoading(true);
        const data = await getPetsMyListingByPetId(id);
        setRequests(Array.isArray(data) ? data : []);
        setLoading(false);
        onOpen();
    };

    return (
        <>
            <Button
                onPress={handleOpen}
                variant="bordered"
                className="font-bold w-full border-blue-400 rounded-2xl px-6"
            >
                Requests {requests.length > 0 && `(${requests.length})`}
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalContent>
                    <ModalHeader>
                        <h2 className="text-xl font-bold">Adoption Requests</h2>
                    </ModalHeader>

                    <ModalBody className="space-y-4 max-h-[60vh] overflow-y-auto">
                        {loading ? (
                            <p className="text-center py-5">Loading...</p>

                        ) : requests.length === 0 ? (
                            <div className="flex items-center justify-center py-10">
                                <h1 className="text-gray-800 font-bold text-2xl text-center">
                                    কোনো request নেই
                                </h1>
                            </div>

                        ) : (
                            // ← সবগুলো request map করে দেখাও
                            requests.map((req, index) => (
                                <div
                                    key={req._id || index}
                                    className="border border-gray-200 p-4 rounded-2xl space-y-3 shadow-sm"
                                >
                                    <div className="flex items-center justify-between">
                                        <p className="text-lg font-bold text-black">{req?.user}</p>
                                        <span className={`text-sm px-3 py-1 rounded-full font-bold
                                            ${req?.status === 'pending'
                                                ? 'bg-yellow-100 text-yellow-700'
                                                : 'bg-green-100 text-green-700'
                                            }`}>
                                            {req?.status}
                                        </span>
                                    </div>

                                    <p className="text-gray-600">{req?.email}</p>

                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <p>Pickup: {
                                            new Date(req?.pickupdate).toLocaleDateString('en-GB', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })
                                        }</p>
                                        <p>Requested: {req?.adoptAt}</p>
                                    </div>

                                    <p className="border border-gray-200 px-4 py-2 rounded-xl text-sm italic">
                                        "{req?.description}"
                                    </p>

                                    {/* প্রতিটা request এ আলাদা Approve/Reject */}
                                    <div className="flex gap-3">
                                        <Button
                                            size="sm"
                                            color="success"
                                            variant="flat"
                                            className="w-full font-bold"
                                        >
                                            <BsCheckCircleFill /> Approve
                                        </Button>
                                        <Button
                                            size="sm"
                                            color="danger"
                                            variant="flat"
                                            className="w-full font-bold"
                                        >
                                            <TiDelete /> Reject
                                        </Button>
                                    </div>
                                </div>
                            ))
                        )}
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="bordered" onPress={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default PetRequestShowCard;