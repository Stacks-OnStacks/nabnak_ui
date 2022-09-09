import { TableBody, TableCell, TableRow } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import AddCardToPool from "../dashboard/addCardToPool";
import { cardContext } from "./cardTable";
import DeleteCard from "./deleteCard";

export default function CardTableData() {
    const email = useSelector((state) => state.loginSlice.email);
    const [cards] = useContext(cardContext);
    const cardArray = cards
        .filter((c) => c.memberEmail === email && c)
        .map((o) => {
            return (
                <TableRow key={o.cardId}>
                    <TableCell align="left">{o.description}</TableCell>
                    <TableCell align="left">{o.points}</TableCell>
                    <TableCell align="left">{o.tech}</TableCell>
                    <TableCell align="left">{o.status}</TableCell>
                    <TableCell align="left">{o.memberEmail}</TableCell>
                    <TableCell align="center">
                        <AddCardToPool card={{ description: o.description, points: o.points, tech: o.tech, status: o.status }} />
                        <DeleteCard id={o.cardId} />
                    </TableCell>
                </TableRow>
            );
        });

    return <TableBody>{cardArray}</TableBody>;
}
