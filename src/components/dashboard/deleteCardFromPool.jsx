import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeCard } from "./cardPoolSlice";
import { Button } from "@mui/material";
import { toast, ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

export default function DeleteCardFromPool(props) {
    const cardId = props.id;
    const dispatch = useDispatch();

    function deleteCard() {
        dispatch(removeCard(cardId));
        toast.success(`Successfully Deleted the ${cardId} card from pool`);
    }

    return (
        <>
            <Button variant="contained" onClick={deleteCard}>
                Delete
            </Button>
        </>
    );
}
