import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../login/logout";

export default function Navbar() {
    const { email, admin } = useSelector((state) => state.loginSlice);

    return (
        <nav>
            <Link to="/">
                <button>Home Page</button>
            </Link>
            <Link to="/register">
                <button>Register</button>
            </Link>
            <Link to="/login">
                <button>Login</button>
            </Link>

            {email === "guest" || (
                <>
                    <Link to="/card">
                        <button>Cards</button>
                    </Link>
                    <Link to="/dashboard">
                        <button>Dashboard</button>
                    </Link>
                </>
            )}

            {admin && (
                <Link to="/member">
                    <button>Members</button>
                </Link>
            )}
            <Logout />
        </nav>
    );
}
