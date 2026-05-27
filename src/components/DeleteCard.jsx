'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteCard = ({ _id, petName }) => {



    const router = useRouter()

    const handleDeletePet = async () => {
        const { data: jwtToken } = await authClient.token();
        const token = jwtToken?.token




        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allpets/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`
            },
        })
        const data = await res.json()


        if (data.acknowledged) {
            toast.success(`${petName} is deleted`)
            router.refresh()
        }
        return data
    }


    return (
        <Modal>
            <Button
                variant="outline"

                className="font-bold w-full border-red-400 rounded-2xl px-6"
            >
                Delete Pet
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>

                            <Modal.Heading>Delete Pet Listing </Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                Are you sure you want to permanently delte listing? This cannot be undone.
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="outline"
                                className="w-full" slot="close">
                                Keep Listing
                            </Button>
                            <Button
                                onClick={() => handleDeletePet()}
                                className="w-full" slot="close">
                                Delete Permanently
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default DeleteCard;