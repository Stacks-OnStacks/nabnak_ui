import { useContext } from "react";
import { cardContext } from "./cardTable";

export default function CardTableData(props) {
    const [cards] = useContext(cardContext);
    const cardArray = cards.map((o) => {
        return (
            <tr>
                <td>{o.description}</td>
                <td>{o.points}</td>
                <td>{o.tech}</td>
                <td>{o.status}</td>
                <td>{o.memberEmail}</td>
            </tr>
        );
    });

    return <tbody>{cardArray}</tbody>;
}
