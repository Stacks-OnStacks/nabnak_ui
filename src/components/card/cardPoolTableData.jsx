import { useSelector } from "react-redux";

export default function CardPoolTableData(props) {
    const email = useSelector((state) => state.loginSlice.email);
    const cardArray = props.cards.map((o, i) => {
        return (
            <tr key={i}>
                <td>{o.description}</td>
                <td>{o.points}</td>
                <td>{o.tech}</td>
                <td>{o.status}</td>
                <td>{email}</td>
            </tr>
        );
    });

    return <tbody>{cardArray}</tbody>;
}
