"use client";
import { authClient } from "@/lib/auth-client";

import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import { IoAlertCircleOutline } from "react-icons/io5";

const DeleteRequest = ({ id, petName }) => {

    const router = useRouter()

    const handleDeleteRequest = async () => {
        // const session = await auth.api.getSession({
        //     headers: await headers()
        // })


        const { token } = await authClient.token()
        console.log(token);

        const res = await fetch(`http://localhost:8000/petrequest/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
        });
        const data = await res.json();

        if (data.deletedCount > 0) {
            router.refresh()
        }
        return data
    }



    return (
        <div>
            <Modal>
                <Button
                    variant="secondary">Cancle</Button>
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[360px]">
                            <Modal.CloseTrigger />
                            <Modal.Header>

                                <Modal.Heading className="flex items-center gap-3"><IoAlertCircleOutline size={30} /> Cancle adoption request</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                    Are you sure you want to cancle your adoption request for <strong>{petName}</strong> ? This action cannot be undone
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    onClick={handleDeleteRequest}
                                    className="w-full" slot="close">
                                    Cancle
                                </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default DeleteRequest;