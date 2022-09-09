import { createContext, useContext, useEffect, useState } from "react";
import { nabnakClient } from "../../common/remote/nabnak-client";
import CardTableData from "./cardTableData";
import { Button, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
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
    }, [creation]); // the empty array indicates to only render this side effect when the page is first loaded

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
                    Show Table of Cards
                </Button>
            </Box>
            {showTable === true ? (
                <TableContainer component={Paper}>
                    <Table sx={{ maxWidth: 1000 }} style={{ border: "black solid" }} align="center">
                        <TableHead>
                            <TableRow style={{ backgroundColor: "black" }}>
                                <TableCell align="center">Description</TableCell>
                                <TableCell align="center">Points</TableCell>
                                <TableCell align="center">Tech</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Member Email</TableCell>
                                <TableCell align="center" sx={{ width: 300 }}></TableCell>
                            </TableRow>
                        </TableHead>
                        {/* useEffect is invoked AFTER this is rendered, causing the default to be undefined */}
                        <cardContext.Provider value={[cards, setCards]}>
                            {cards === undefined || <CardTableData></CardTableData>}
                        </cardContext.Provider>
                    </Table>
                </TableContainer>
            ) : (
                <p>Table Currently hidden</p>
            )}
        </>
    );
}
