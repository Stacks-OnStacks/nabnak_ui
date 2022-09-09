import { TableBody, TableCell, TableRow } from "@mui/material";

export default function MemberTableData(props) {
    const memberArray = props.members.map((o) => {
        return (
            <TableRow>
                <TableCell align="left">
                    <img src={o.avatar} style={{ width: 50, height: 50 }}></img>
                </TableCell>
                <TableCell align="left">{o.fullName}</TableCell>
                <TableCell align="left">{o.email}</TableCell>
                <TableCell align="left">{o.experienceMonths}</TableCell>
            </TableRow>
        );
    });

    return <TableBody>{memberArray}</TableBody>;
}
