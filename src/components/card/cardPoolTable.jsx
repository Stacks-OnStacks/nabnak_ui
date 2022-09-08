import { useSelector } from "react-redux";
import CardPoolTableData from "./cardPoolTableData";

export default function CardPoolTable() {
    const { cards, cardNumber } = useSelector((state) => state.cardSlice);

    return (
        <div>
            <h1>Card Pool Current holds: {cardNumber}</h1>
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

                <CardPoolTableData cards={cards}></CardPoolTableData>
            </table>
        </div>
    );
}
