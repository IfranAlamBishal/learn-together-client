import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import TableView from "./TableView";

const ManageNotes = () => {

    const { user } = useContext(AuthContext);
    const [notes, setNotes] = useState([]);
    const axiosSecure = useAxios();

    useEffect(() => {
        axiosSecure.get('/view_notes')
            .then(res => {
                const allNotes = res.data;
                // const userNotes = allNotes.filter(note => note.student_email == user.email);
                console.log(allNotes)
                setNotes([allNotes]);
            })
    }, [axiosSecure])

    if (notes.length < 0) {
        return (
            <div className=" my-10">
                <Helmet>
                    <title>Learn Together | Manage Notes</title>
                </Helmet>
                <div className=" mb-10">
                    <SectionHeader
                        title='Manage Notes'
                        description=''>
                    </SectionHeader>
                </div >

                <div>
                    <h2 className=" text-4xl font-semibold text-center">No notes found</h2>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className=" my-10">
                <Helmet>
                    <title>Learn Together | Manage Notes</title>
                </Helmet>
                <div className=" mb-10">
                    <SectionHeader
                        title='Manage Notes'
                        description=''>
                    </SectionHeader>
                </div >

                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th className=" opacity-0">update</th>
                                    <th className=" opacity-0">delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    notes.map(note => <TableView key={note._id} note={note}></TableView>)
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        );
    }
};

export default ManageNotes;