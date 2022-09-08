import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import AuthCheck from "../../common/authCheck/authCheck";
import { nabnakClient } from "../../common/remote/nabnak-client";
import MemberTableData from "./memberTableData";

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
            <button onClick={renderTable}>Show Table of Members</button>
            {showTable === true ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Experience in Months</th>
                            </tr>
                        </thead>
                        {/* useEffect is invoked AFTER this is rendered, causing the default to be undefined */}
                        {members === undefined || <MemberTableData members={members}></MemberTableData>}
                    </table>
                </div>
            ) : (
                <p>Table Currently hidden</p>
            )}
        </>
    );
}
