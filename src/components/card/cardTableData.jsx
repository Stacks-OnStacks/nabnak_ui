import { useContext } from "react";
import { useSelector } from "react-redux";
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
                    <DeleteCard id={o.cardId} />
                </tr>
            );
        });

    return <tbody>{cardArray}</tbody>;
}
