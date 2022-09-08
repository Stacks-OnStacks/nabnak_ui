export default function MemberTableData(props) {
    const memberArray = props.members.map((o) => {
        return (
            <tr>
                <td>{o.fullName}</td>
                <td>{o.email}</td>
                <td>{o.experienceMonths}</td>
            </tr>
        );
    });

    return <tbody>{memberArray}</tbody>;
}
