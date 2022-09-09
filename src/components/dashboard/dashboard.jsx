import { ToastContainer } from "material-react-toastify";
import { useSelector } from "react-redux";
import CardPool from "./cardPool";
import CreateCardPool from "./createCardPool";
import "material-react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
    const email = useSelector((state) => state.loginSlice.email);

    return (
        <>
            <ToastContainer />
            <h1>Welcome to Nabnak Dashboard, {email}</h1>
            <p>
                Here you can create multiple cards at once using the card pool. Below you can create them directly, or you can go to the
                "Cards" section above and copy any previously made card
            </p>
            <CreateCardPool />
            <CardPool />
        </>
    );
}
