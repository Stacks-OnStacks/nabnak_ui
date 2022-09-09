import { TableBody, TableCell, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import DeleteCardFromPool from "./deleteCardFromPool";

export default function CardPoolTableData(props) {
    const email = useSelector((state) => state.loginSlice.email);
    const cardArray = props.cards.map((o, i) => {
        return (
            <TableRow key={i}>
                <TableCell>{o.description}</TableCell>
                <TableCell>{o.points}</TableCell>
                <TableCell>{o.tech}</TableCell>
                <TableCell>{o.status}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>
                    <DeleteCardFromPool id={i} />
                </TableCell>
            </TableRow>
        );
    });

    return <TableBody>{cardArray}</TableBody>;
}
