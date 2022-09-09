import { Button, Grid, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import AddCardToPool from "./addCardToPool";
import CardPoolData from "./cardPoolData";

export default function CardPool() {
    const { cards, cardNumber } = useSelector((state) => state.cardPoolSlice);

    return (
        <>
            <Box textAlign="center">
                <h1>Card Pool Current holds: {cardNumber}</h1>
            </Box>
            <Grid container spacing={2}>
                <CardPoolData cards={cards}></CardPoolData>
            </Grid>
        </>
    );
}
