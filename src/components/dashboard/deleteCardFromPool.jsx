import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeCard } from "./cardPoolSlice";
import { Button } from "@mui/material";

export default function DeleteCardFromPool(props) {
    const cardId = props.id;
    const [deleted, setDeleted] = useState();
    const dispatch = useDispatch();

    function deleteCard() {
        dispatch(removeCard(cardId));
        setDeleted(`Successfully Deleted the ${cardId} card from pool`);
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
