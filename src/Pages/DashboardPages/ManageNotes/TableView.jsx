
const TableView = ({ note }) => {

    const { title, description } = note;
    return (
        <tr>
            <th>{title}</th>
            <td>{description}</td>
            <td><button className="btn btn-neutral text-xs">Uptade</button></td>
            <td><button className="btn btn-neutral text-xs">Delete</button></td>
        </tr>
    );
};

export default TableView;