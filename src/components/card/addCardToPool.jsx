import { useDispatch } from "react-redux";
import { addCardStore } from "./cardSlice";

export default function AddCardToPool(props) {
    const card = props.card;

    const dispatch = useDispatch();

    function addToPool() {
        dispatch(addCardStore(card));
    }

    return <button onClick={addToPool}>Add to Pool</button>;
}
