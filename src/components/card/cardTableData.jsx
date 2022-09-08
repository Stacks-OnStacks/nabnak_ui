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
                <tr key={o.cardId}>
                    <td>{o.description}</td>
                    <td>{o.points}</td>
                    <td>{o.tech}</td>
                    <td>{o.status}</td>
                    <td>{o.memberEmail}</td>
                    <AddCardToPool card={{ description: o.description, points: o.points, tech: o.tech, status: o.status }} />
                    <DeleteCard id={o.cardId} />
                </tr>
            );
        });

    return <tbody>{cardArray}</tbody>;
}
