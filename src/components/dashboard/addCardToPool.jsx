import { useDispatch } from "react-redux";
import { addCardStore } from "./cardPoolSlice";
import { Button } from "@mui/material";
import { toast } from "material-react-toastify";

export default function AddCardToPool(props) {
    const card = props.card;

    const dispatch = useDispatch();

    function addToPool() {
        dispatch(addCardStore(card));
        toast.success("Card sucessfully added");
    }

    return (
        <Button variant="contained" onClick={addToPool}>
            Add2Pool
        </Button>
    );
}
