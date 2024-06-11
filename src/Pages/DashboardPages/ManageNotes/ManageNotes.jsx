import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import TableView from "./TableView";
import useNotes from "../../../Hooks/useNotes";

const ManageNotes = () => {

   const notes = useNotes();
   console.log(notes);

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
            <div className=" my-10 w-5/6 mx-auto">
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