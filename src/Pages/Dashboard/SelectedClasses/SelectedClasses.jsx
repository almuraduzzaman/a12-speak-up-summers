import Swal from "sweetalert2";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";
import { Link } from "react-router-dom";


const SelectedClasses = () => {
    const [selectedClasses, refetch] = useSelectedClasses();
    console.log(selectedClasses);

    const handleDelete = id => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedClasses/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <>
            <h3 className="text-3xl font-semibold my-4">Selected Courses: {selectedClasses.length}</h3>
            <div className="overflow-x-auto w-1/2">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClasses && selectedClasses.map((selectedClass, index) => <tr key={selectedClass._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={selectedClass.courseImage} />
                                        </div>
                                    </div>
                                </td>
                                <td>{selectedClass.courseName}</td>
                                <td className="text-end">${selectedClass.price}</td>
                                <td>
                                    <div className="flex gap-2">
                                        <button onClick={() => handleDelete(selectedClass._id)} className="btn btn-warning btn-sm">Delete</button>
                                        <Link to={`/dashboard/payment/${selectedClass._id}`}><button className="btn btn-outline btn-sm">Pay</button></Link>
                                    </div>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SelectedClasses;