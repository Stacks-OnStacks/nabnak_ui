import { useState } from "react";
import addAuthToken from "../../common/remote/addAuthHeader";
import { nabnakClient } from "../../common/remote/nabnak-client";

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
            <button onClick={deleteCard}>Delete</button>
            {deleted === undefined ? <></> : <span>{deleted}</span>}
        </>
    );
}
