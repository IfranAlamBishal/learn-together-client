import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const TableView = ({ note }) => {

    const { _id, title, description } = note;
    const axiosSecure = useAxios();

    const handleUpdate = id => {

    }

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this note?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/delete_notes/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "You've successfully deleted the note.",
                                icon: "success"
                            });
                            window.location.reload();
                        }
                    })

            }
        });
    }
    return (
        <tr>
            <th>{title}</th>
            <td>{description}</td>
            <td><button onClick={() => handleUpdate(_id)} className="btn btn-neutral text-xs">Uptade</button></td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-neutral text-xs">Delete</button></td>
        </tr>
    );
};

export default TableView;