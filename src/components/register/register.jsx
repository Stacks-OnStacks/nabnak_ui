import { useState } from "react";
import { useNavigate } from "react-router";
import { nabnakClient } from "../../common/remote/nabnak-client";
import { Button, FormControl, Grid, Input, InputLabel, Slider, TextField, Typography } from "@mui/material";
import "material-react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "material-react-toastify";
import { Box } from "@mui/system";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        fullName: "",
        password: "",
        experienceMonths: 0,
        avatar: "",
    });

    async function register(e) {
        e.preventDefault();
        setFormData({ ...formData, avatar: `https://avatars.dicebear.com/api/human/${formData.email}.svg` });

        try {
            await nabnakClient.post("/member", formData);
            toast.success(`Email ${formData.email} successfully registered nagivating to login...`);
            // setTimeout requires anonmyous function to call other functions/satements and then time in milliseconds
            setTimeout(() => navigate("/login"), 2000);
        } catch (error) {
            if (error.response.status === 400) {
                toast.error(`The following issues occured: ${error.response.data}`);
            }
            if (error.response.status === 500) {
                const message = error.response.data;
                console.log(message);
                if (message.includes("NotBlank"))
                    toast.error(`Improper values, most likely blank provided. Email: ${formData.email} or FullName: ${formData.fullName}.`);
                if (message.includes("password"))
                    toast.error(`Minimum eight characters, at least one letter, one number and one special character`);
                if (message.includes("email")) toast.error(`Please provide valid email. ${formData.email} is not valid.`);
            }
        }
    }

    const formFunctions = {
        email: function (event) {
            setFormData({ ...formData, email: event.target.value });
        },
        fullName: function (event) {
            setFormData({ ...formData, fullName: event.target.value });
        },
        password: function (event) {
            setFormData({ ...formData, password: event.target.value });
        },
        experienceMonths: function (event) {
            setFormData({ ...formData, experienceMonths: event.target.value });
        },
    };

    return (
        <>
            <ToastContainer />
            <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
                <Box
                    component="form"
                    sx={{
                        "& .MuiTextField-root": { m: 1, width: "50ch" },
                    }}
                    noValidate
                    autoComplete="off"
                    alignItems="center"
                >
                    <br></br>
                    <FormControl style={{ minWidth: 420, margin: 2, paddingTop: 6, paddingBottom: 6 }}>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" placeholder="Test@mail.com" onChange={formFunctions.email} />
                    </FormControl>
                    <br></br>
                    <FormControl style={{ minWidth: 420, margin: 2, paddingTop: 6, paddingBottom: 6 }}>
                        <InputLabel htmlFor="fullName">Full Name</InputLabel>
                        <Input id="fullName" placeholder="Tester McTesterson" onChange={formFunctions.fullName} />
                    </FormControl>
                    <br></br>
                    <FormControl style={{ minWidth: 420, margin: 2, paddingTop: 6 }}>
                        <InputLabel htmlFor="email">Password</InputLabel>
                        <Input id="email" placeholder="TestMaster!12" type="password" onChange={formFunctions.password} />
                    </FormControl>
                    <br></br>
                    <FormControl style={{ minWidth: 420 }}>
                        <Typography textAlign="left">Experience in Months: {formData.experienceMonths}</Typography>
                        <Slider
                            defaultValue={0}
                            style={{ width: 425 }}
                            valueLabelDisplay="auto"
                            min={0}
                            max={480}
                            onChange={formFunctions.experienceMonths}
                        ></Slider>
                        <br></br>
                        <Button variant="contained" onClick={register}>
                            Register
                        </Button>
                    </FormControl>
                </Box>
            </Grid>
        </>
    );
}
