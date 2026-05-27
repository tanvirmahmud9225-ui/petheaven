
import { Modal, Button, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import { getPetById, getPetsMyListingByPetId } from "@/lib/data";
// import { Button, Modal } from "@heroui/react";
import { BsCheckCircleFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import RequestApprove from "./RequestApprove";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import RequestReject from "./RequestReject";




const PetRequestShowCard = async ({ id }) => {

    const { token } = await auth?.api.getToken({
        headers: await headers()
    })



    const requestPet = await getPetsMyListingByPetId(id);




    const singlePet = await getPetById(id, token);

    const status = singlePet.status;






    return (
        <Modal>
            <Button
                variant="outline"
                className="font-bold w-full border-blue-400 rounded-2xl px-6"
            >
                Request
            </Button>

            <Modal.Backdrop
                className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
                variant="blur"
            >
                <Modal.Container>
                    {
                        requestPet ? <Modal.Dialog className="sm:max-w-[360px]">
                            <Modal.Body className="border p-3 border-gray-300 shadow-lg rounded-2xl">

                                {

                                    <div className="space-y-3 ">
                                        <div className="flex items-center justify-between">
                                            <p className="text-lg font-bold text-black">{requestPet?.user}</p>
                                            <p>{requestPet?.status}</p>
                                        </div>
                                        <p>{requestPet?.email}</p>
                                        <div className="flex items-center justify-between">
                                            <p>Pickup: {
                                                new Date(requestPet?.pickupdate).toLocaleDateString('en-GB', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })
                                            }</p>
                                            <p>Requested: {requestPet?.adoptAt}</p>
                                        </div>
                                        <p className="border border-gray-300 px-5 py-2 rounded-2xl">" {requestPet?.description} "</p>
                                    </div>

                                }

                            </Modal.Body>
                            {
                                requestPet?.status == "pending" && <Modal.Footer className="">
                                    <RequestApprove status={status} id={id} token={token} className="w-full" />
                                    <RequestReject status={status} id={id} token={token} className="w-full" />
                                </Modal.Footer>

                            }
                            <Modal.CloseTrigger />
                        </Modal.Dialog>
                            :
                            <Modal.Dialog className="sm:max-w-[360px]">
                                <Modal.Body className="border p-3 border-gray-300 shadow-lg rounded-2xl">
                                    <div className="flex items-center justify-center">
                                        <h1 className="p-5 text-gray-800 font-bold text-3xl text-center">Don't have any request</h1>
                                    </div>

                                </Modal.Body>

                                <Modal.CloseTrigger />
                            </Modal.Dialog>
                    }
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default PetRequestShowCard;