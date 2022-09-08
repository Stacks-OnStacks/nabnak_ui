import { useSelector } from "react-redux";

export default function Dashboard() {
    const email = useSelector((state) => state.loginSlice.email);

    return (
        <>
            <h1>Welcome to Nabnak, {email}</h1>
        </>
    );
}
