import { useDispatch, useSelector } from "react-redux";
import { logoutStore } from "./loginSlice";
import { MenuItem, Typography } from "@mui/material";

export default function Logout() {
    const email = useSelector((state) => state.loginSlice.email);
    const dispatch = useDispatch();

    function logout() {
        window.localStorage.removeItem("token");
        dispatch(logoutStore());
    }
    return (
        <MenuItem onClick={logout}>
            <Typography>Logout</Typography>
        </MenuItem>
    );
}
