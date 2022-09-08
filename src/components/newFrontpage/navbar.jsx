import { Link } from "react-router-dom";

export default function Navbar() {
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
            <Link to="/member">
                <button>Members</button>
            </Link>
            <Link to="/card">
                <button>Cards</button>
            </Link>
        </nav>
    );
}
