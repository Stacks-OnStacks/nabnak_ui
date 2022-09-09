import { Alert, Snackbar } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import CardTable from "./cards";
import CreateCard from "./createCard";
import "material-react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "material-react-toastify";

export const creationRenderContext = createContext();

export default function CardHome() {
    const [creation, setCreation] = useState();
    const [alert, setAlert] = useState();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (creation === undefined) return;
        setAlert(creation.includes("failed") ? <Alert severity="error">{creation}</Alert> : <Alert severity="success">{creation}</Alert>);
        setOpen(true);
    }, [creation]);

    function handleClose(event, reason) {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    }

    return (
        <>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={open} autoHideDuration={6000} onClose={handleClose}>
                {alert === undefined ? <></> : alert}
            </Snackbar>

            <ToastContainer />
            <creationRenderContext.Provider value={[creation, setCreation]}>
                <CreateCard />
                <CardTable />
            </creationRenderContext.Provider>
        </>
    );
}