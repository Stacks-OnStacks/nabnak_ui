import { useDispatch } from "react-redux";
import { addCardStore } from "./cardPoolSlice";
import { Button } from "@mui/material";

export default function AddCardToPool(props) {
    const card = props.card;

    const dispatch = useDispatch();

    function addToPool() {
        dispatch(addCardStore(card));
    }

    return (
        <Button variant="contained" onClick={addToPool}>
            Add to Pool
        </Button>
    );
}
