import { Link } from "react-router-dom";
import useClassesAddedByInstructors from "../../../Hooks/useClassesAddedByInstructors";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../Shared/LoadingSpinner";


const ManageClasses = () => {
    const [allClasses, isLoading, refetch] = useClassesAddedByInstructors();
    // console.log(allClasses);

    if (isLoading) {
        return <LoadingSpinner />
    }

    const handleApproved = (id) => {
        fetch(`https://a12-speak-up-summers-server.vercel.app/classes/approved/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };

    const handleDenied = (id) => {
        fetch(`https://a12-speak-up-summers-server.vercel.app/classes/denied/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: 'Class Denied',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };


    return (
        <div>
            <Helmet>
                <title>Manage Classes | SpeakUpSummers</title>
            </Helmet>
            <SectionTitle heading={'Classes Added by Instructors'} subHeading={`Total Courses: ${allClasses?.length}`} />

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Course</th>
                            <th>Instructor</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClasses && allClasses.map((classObj, idx) => <tr key={classObj._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={classObj.courseImage} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{classObj.courseName}</div>
                                </td>
                                <td>
                                    {classObj.instructorName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{classObj.instructorEmail}</span>
                                </td>
                                <td>{classObj.availableSeats}</td>
                                <td className="text-end">${classObj.price}</td>
                                <td className="capitalize">{classObj.status}</td>
                                <td className="flex gap-2 mt-4">
                                    <button onClick={() => handleApproved(classObj._id)} disabled={classObj.status === 'approved' || classObj.status === 'denied'} className="btn btn-success btn-xs">Y</button>

                                    <button onClick={() => handleDenied(classObj._id)} disabled={classObj.status === 'approved' || classObj.status === 'denied'} className="btn btn-error btn-xs">N</button>


                                    {
                                        (classObj.status === 'pending' || classObj.status === 'approved') ? <button className="btn btn-neutral btn-xs" disabled>F</button> : <Link to={`/dashboard/feedback/${classObj._id}`}><button className="btn btn-warning btn-xs">F</button></Link>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;