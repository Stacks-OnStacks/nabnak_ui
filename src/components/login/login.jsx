import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { nabnakClient } from "../../common/remote/nabnak-client";
import { loginStore } from "./loginSlice";
import { Alert, Button, Grid, Snackbar, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { toast, ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

export default function Login() {
    // Define state & hooks at the beginning
    const navigate = useNavigate();
    const emailInput = useRef();
    const passwordInput = useRef();
    const dispatch = useDispatch();
    const id = useSelector((state) => state.loginSlice.id);

    useEffect(() => {
        id === 1 && toast.info("Successfully logged out");
    }, [id]);

    // define functions
    async function login() {
        const body = { email: emailInput.current.value, password: passwordInput.current.value };

        try {
            const response = await nabnakClient.post("/auth", body);
            // Fetch LOWERCASES all Header Keys
            console.log(response.data);
            window.localStorage.setItem("token", response.headers.authorization);
            dispatch(loginStore(response.data));
            toast.success("Successfully logged in");
            setTimeout(() => navigate("/dashboard"), 2000);
        } catch (error) {
            console.log(error.response.data);
            if (error.response.status === 404) {
                let loginFailed = `Email or Password was incorrect for email: ${body.email}`;
                toast.error(loginFailed);
            }
        }
    }

    // Return
    return (
        <>
            <ToastContainer />
            <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
                <Box
                    component="form"
                    sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                    alignItems="center"
                >
                    <TextField label="Email" placeholder="Test@mail.com" inputRef={emailInput} />
                    <br></br>
                    <TextField label="Password" inputRef={passwordInput} type="password" variant="outlined"></TextField>
                    <br></br>
                    <Box textAlign="center">
                        <Button variant="contained" onClick={login} style={{ alignItems: "center" }}>
                            Login
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </>
    );
}
