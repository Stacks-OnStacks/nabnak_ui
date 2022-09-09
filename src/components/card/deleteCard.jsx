import { useState } from "react";
import addAuthToken from "../../common/remote/addAuthHeader";
import { nabnakClient } from "../../common/remote/nabnak-client";
import { Button } from "@mui/material";

export default function DeleteCard(props) {
    const cardId = props.id;
    const [deleted, setDeleted] = useState();

    async function deleteCard() {
        try {
            addAuthToken();
            await nabnakClient.delete(`/card/${cardId}`);
            setDeleted(`Successfully Deleted Card with ID: ${cardId}`);
        } catch (error) {
            setDeleted(`Failed to delete ${cardId} with ${error.response.data}`);
        }
    }

    return (
        <>
            <Button variant="contained" onClick={deleteCard}>
                Delete
            </Button>
            {deleted === undefined ? <></> : <span>{deleted}</span>}
        </>
    );
}
