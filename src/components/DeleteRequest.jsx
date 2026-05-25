"use client";
import { authClient } from "@/lib/auth-client";

import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";

const DeleteRequest = ({ id }) => {

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
                                <Modal.Icon className="bg-default text-foreground">

                                </Modal.Icon>
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
                                    onClick={handleDeleteRequest}
                                    className="w-full" slot="close">
                                    Continue
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