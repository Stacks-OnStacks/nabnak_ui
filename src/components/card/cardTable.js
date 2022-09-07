import { createContext, useContext, useEffect, useState } from "react";
import { nabnakClient } from "../../common/remote/nabnak-client";
import CardTableData from "./cardTableData";

export const cardContext = createContext();

export default function CardTable() {
    const [cards, setCards] = useState();
    const [showTable, setShowTable] = useState(true);
    // one more hook - useEffect - this causes a side effect whenever a page is render or a state variable is changed
    useEffect(() => {
        console.log("effect invoked");
        findAll();
    }, []); // the empty array indicates to only render this side effect when the page is first loaded

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
            <button onClick={renderTable}>Show Table of Cards</button>
            {showTable === true ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Points</th>
                                <th>Tech</th>
                                <th>Status</th>
                                <th>Member Email</th>
                            </tr>
                        </thead>
                        {/* useEffect is invoked AFTER this is rendered, causing the default to be undefined */}
                        <cardContext.Provider value={[cards, setCards]}>
                            {cards === undefined || <CardTableData></CardTableData>}
                        </cardContext.Provider>
                    </table>
                </div>
            ) : (
                <p>Table Currently hidden</p>
            )}
        </>
    );
}
