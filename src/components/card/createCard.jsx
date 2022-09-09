import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import AuthCheck from "../../common/authCheck/authCheck";
import addAuthToken from "../../common/remote/addAuthHeader";
import { nabnakClient } from "../../common/remote/nabnak-client";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Slider,
    TextareaAutosize,
    TextField,
    Typography,
} from "@mui/material";
import { Box, height } from "@mui/system";
import { creationRenderContext } from "./cardHome";

export default function CreateCard() {
    AuthCheck(false);

    const [creation, setCreation] = useContext(creationRenderContext);

    const [formData, setFormData] = useState({
        description: "",
        points: 3,
        tech: "PYTHON",
        status: "OPEN",
    });
    const [submit, setSubmit] = useState(true);

    async function newCard(e) {
        e.preventDefault();

        console.log(formData);
        try {
            addAuthToken();
            const response = await nabnakClient.post("/card", formData);
            submit ? setSubmit(false) : setSubmit(true);
            setCreation(`Card has been successfully added card ID: ${response.data.cardId}`);
        } catch (error) {
            console.log(error);
            setCreation(`Card has failed due to ${error.response.data}`);
        }
    }

    const formFunctions = {
        description: function (event) {
            setFormData({ ...formData, description: event.target.value });
        },
        points: function (event) {
            setFormData({ ...formData, points: event.target.value });
        },
        tech: function (event) {
            setFormData({ ...formData, tech: event.target.value });
        },
        status: function (event) {
            setFormData({ ...formData, status: event.target.value });
        },
    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                m={2}
                pb={4}
                noValidate
                autoComplete="off"
                textAlign="center"
            >
                <FormControl>
                    <Typography textAlign="left">Points: {formData.points}</Typography>
                    <Slider
                        defaultValue={3}
                        style={{ width: 150 }}
                        valueLabelDisplay="auto"
                        min={1}
                        max={5}
                        onChange={formFunctions.points}
                    ></Slider>

                    <Typography textAlign="left">Description</Typography>
                    <TextareaAutosize
                        placeholder="i.e Keep your sanity"
                        maxRows={4}
                        aria-label="maximum height"
                        style={{ width: 300, height: 100 }}
                        onChange={formFunctions.description}
                    ></TextareaAutosize>

                    <RadioGroup row aria-labelledby="demo-radio-buttons-group-label" defaultValue="PYTHON" name="radio-buttons-group">
                        <Typography m={2} sx={{ height: 10 }}>
                            Tech:
                        </Typography>
                        <FormControlLabel value="PYTHON" label="Python" control={<Radio />} onChange={formFunctions.tech} />
                        <FormControlLabel value="JAVA" label="Java" control={<Radio />} onChange={formFunctions.tech} />
                        <FormControlLabel value="JAVASCRIPT" label="JavaScript" control={<Radio />} onChange={formFunctions.tech} />
                    </RadioGroup>

                    <RadioGroup row aria-labelledby="demo-radio-buttons-group-label" defaultValue="OPEN" name="radio-buttons-group">
                        <Typography m={2}>Status:</Typography>
                        <FormControlLabel value="OPEN" label="Open" control={<Radio />} onChange={formFunctions.status} />
                        <FormControlLabel value="INPROGRESS" label="In-Progress" control={<Radio />} onChange={formFunctions.status} />
                    </RadioGroup>

                    <Button variant="contained" onClick={newCard}>
                        Create Card
                    </Button>
                </FormControl>
            </Box>
        </>
    );
}
