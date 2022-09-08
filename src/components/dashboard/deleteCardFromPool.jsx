import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeCard } from "./cardPoolSlice";

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
            <button onClick={deleteCard}>Delete</button>
            {deleted === undefined ? <></> : <span>{deleted}</span>}
        </>
    );
}
