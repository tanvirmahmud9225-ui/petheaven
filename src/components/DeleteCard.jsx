'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";

const DeleteCard = ({ _id }) => {



    const router = useRouter()

    const handleDeletePet = async () => {
        const { data: jwtToken } = await authClient.token();
        const token = jwtToken?.token




        const res = await fetch(`http://localhost:8000/allpets/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`
            },
        })
        const data = await res.json()

        if (data.acknowledged) {
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

                            <Modal.Heading>Welcome to HeroUI</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                A beautiful, fast, and modern React UI library for building accessible and
                                customizable web applications with ease.
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                onClick={() => handleDeletePet()}
                                className="w-full" slot="close">
                                Continue
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default DeleteCard;