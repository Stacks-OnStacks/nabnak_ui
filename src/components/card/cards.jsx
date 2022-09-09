import { createContext, useContext, useEffect, useState } from "react";
import { nabnakClient } from "../../common/remote/nabnak-client";
import CardTableData from "./cardData";
import { Button, Card, CardContent, Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import { creationRenderContext } from "./cardHome";

export const cardContext = createContext();

export default function CardTable() {
    const [cards, setCards] = useState();
    const [showTable, setShowTable] = useState(true);
    const [creation] = useContext(creationRenderContext);

    // one more hook - useEffect - this causes a side effect whenever a page is render or a state variable is changed
    useEffect(() => {
        console.log("effect invoked");
        showTable && findAll();
    }, [creation, showTable]); // the empty array indicates to only render this side effect when the page is first loaded

    async function findAll() {
        try {
            const response = await nabnakClient.get("/card");
            console.log(response.data);
            setCards(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    function renderTable() {
        showTable ? setShowTable(false) : setShowTable(true);
    }

    return (
        <>
            <Box textAlign="center">
                <Button variant="contained" onClick={renderTable}>
                    Show Cards
                </Button>
            </Box>
            {showTable === true ? (
                <Grid container spacing={2}>
                    <cardContext.Provider value={[cards, setCards]}>
                        {cards === undefined || <CardTableData></CardTableData>}
                    </cardContext.Provider>
                </Grid>
            ) : (
                <p>Table Currently hidden</p>
            )}
        </>
    );
}
