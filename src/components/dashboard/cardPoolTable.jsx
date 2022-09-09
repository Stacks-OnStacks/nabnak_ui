import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import CardPoolTableData from "./cardPoolTableData";

export default function CardPoolTable() {
    const { cards, cardNumber } = useSelector((state) => state.cardPoolSlice);

    return (
        <TableContainer>
            <h1>Card Pool Current holds: {cardNumber}</h1>
            <Table>
                <TableHead>
                    <TableRow style={{ backgroundColor: "black" }}>
                        <TableCell>Description</TableCell>
                        <TableCell>Points</TableCell>
                        <TableCell>Tech</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Member Email</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                {/* useEffect is invoked AFTER this is rendered, causing the default to be undefined */}

                <CardPoolTableData cards={cards}></CardPoolTableData>
            </Table>
        </TableContainer>
    );
}
