import { useContext, useState } from "react";
import addAuthToken from "../../common/remote/addAuthHeader";
import { nabnakClient } from "../../common/remote/nabnak-client";
import { Button } from "@mui/material";
import { toast } from "material-react-toastify";
import { cardContext } from "./cards";
import { creationRenderContext } from "./cardHome";

export default function DeleteCard(props) {
    const cardId = props.id;

    const [creation, setCreation] = useContext(creationRenderContext);

    async function deleteCard() {
        try {
            addAuthToken();
            await nabnakClient.delete(`/card/${cardId}`);
            toast.success(`Successfully Deleted Card with ID: ${cardId}`);
            setCreation(`we deleted ${cardId}`);
        } catch (error) {
            let message = error.response.data;
            if (message.includes("Unauthorized")) {
                toast.error(`Failed to delete ${cardId} as you are not admin nor does it belong to you`);
                return;
            }
            toast.error(`Failed to delete ${cardId} with ${error.response.data}`);
        }
    }

    return (
        <>
            <Button variant="contained" onClick={deleteCard}>
                Delete
            </Button>
        </>
    );
}
