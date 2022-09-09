import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import AuthCheck from "../../common/authCheck/authCheck";
import { nabnakClient } from "../../common/remote/nabnak-client";
import MemberTableData from "./memberTableData";
import { Button, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Box } from "@mui/system";

export default function MemberTable() {
    AuthCheck(true);

    const [members, setMembers] = useState();
    const [showTable, setShowTable] = useState(true);
    // one more hook - useEffect - this causes a side effect whenever a page is render or a state variable is changed
    useEffect(() => {
        console.log("effect invoked");
        findAll();
    }, []); // the empty array indicates to only render this side effect when the page is first loaded

    async function findAll() {
        try {
            const response = await nabnakClient.get("/member");
            console.log(response.data);
            setMembers(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    function renderTable() {
        showTable ? setShowTable(false) : setShowTable(true);
    }

    return (
        <>
            <Box textAlign="center" m={2}>
                <Button variant="contained" onClick={renderTable}>
                    Show Table of Members
                </Button>
            </Box>
            <br></br>
            {showTable === true ? (
                <TableContainer>
                    <Table sx={{ maxWidth: 1000 }} style={{ border: "black solid" }} align="center">
                        <TableHead>
                            <TableRow style={{ backgroundColor: "black" }}>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center">Full Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Experience in Months</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* useEffect is invoked AFTER this is rendered, causing the default to be undefined */}
                        {members === undefined || <MemberTableData members={members}></MemberTableData>}
                    </Table>
                </TableContainer>
            ) : (
                <p>Table Currently hidden</p>
            )}
        </>
    );
}
