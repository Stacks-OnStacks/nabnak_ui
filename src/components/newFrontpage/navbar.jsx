import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../login/logout";

export default function Navbar() {
    const { email, admin } = useSelector((state) => state.loginSlice);

    return (
        <nav>
            <Link to="/">
                <Button>Home Page</Button>
            </Link>
            <Link to="/register">
                <Button>Register</Button>
            </Link>
            <Link to="/login">
                <Button>Login</Button>
            </Link>

            {email === "guest" || (
                <>
                    <Link to="/card">
                        <Button>Cards</Button>
                    </Link>
                    <Link to="/dashboard">
                        <Button>Dashboard</Button>
                    </Link>
                </>
            )}

            {admin && (
                <Link to="/member">
                    <Button>Members</Button>
                </Link>
            )}
            <Logout />
        </nav>
    );
}
