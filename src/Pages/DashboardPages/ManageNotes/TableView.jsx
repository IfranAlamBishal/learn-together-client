
const TableView = ({ note }) => {

    const { title, description } = note;
    return (
        // <div>
        //     <div className="overflow-x-auto">
        //         <table className="table table-zebra">
        //             {/* head */}
        //             <thead>
        //                 <tr>
        //                     <th></th>
        //                     <th>Title</th>
        //                     <th>Tutor</th>
        //                     <th>Class Time</th>
        //                     <th></th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {/* row 1 */}
        //                 <tr>
        //                     <th>1</th>
        //                     <td>Cy Ganderton</td>
        //                     <td>Quality Control Specialist</td>
        //                     <td>Blue</td>
        //                 </tr>
        //                 {/* row 2 */}
        //                 <tr>
        //                     <th>2</th>
        //                     <td>Hart Hagerty</td>
        //                     <td>Desktop Support Technician</td>
        //                     <td>Purple</td>
        //                 </tr>
        //                 {/* row 3 */}
        //                 <tr>
        //                     <th>3</th>
        //                     <td>Brice Swyre</td>
        //                     <td>Tax Accountant</td>
        //                     <td>Red</td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
        // <div>
        //     <h2>{title}</h2>
        //     <h2>{description}</h2>
        // </div>
        <tr>
            <th>{title}</th>
            <td>{description}</td>
            <td><button>Uptade</button></td>
            <td><button>Delete</button></td>
        </tr>
    );
};

export default TableView;