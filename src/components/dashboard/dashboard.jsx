import { useSelector } from "react-redux";
import CardPoolTable from "./cardPoolTable";
import CreateCardPool from "./createCardPool";

export default function Dashboard() {
    const email = useSelector((state) => state.loginSlice.email);

    return (
        <>
            <h1>Welcome to Nabnak Dashboard, {email}</h1>
            <p>
                Here you can create multiple cards at once using the card pool. Below you can create them directly, or you can go to the
                "Cards" section above and copy any previously made card
            </p>
            <CreateCardPool />
            <CardPoolTable />
        </>
    );
}
