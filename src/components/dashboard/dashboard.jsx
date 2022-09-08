import { useSelector } from "react-redux";
import CardPoolTable from "../card/cardPoolTable";
import CardPool from "../card/cardPoolTable";
import CreateCardPool from "../card/createCardPool";

export default function Dashboard() {
    const email = useSelector((state) => state.loginSlice.email);

    return (
        <>
            <h1>Welcome to Nabnak, {email}</h1>
            <CreateCardPool />
            <CardPoolTable />
        </>
    );
}
