import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Shared/LoadingSpinner";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch, isLoading } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    });

    console.log(users);

    if (isLoading) {
        return <LoadingSpinner />
    }

    const handleMakeAdmin = user => {
        fetch(`https://a12-speak-up-summers-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };

    const handleMakeInstructor = user => {
        fetch(`https://a12-speak-up-summers-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };


    return (
        <div className="w-full">
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Give Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="capitalize ">{user?.role ? user.role : 'student'}</td>
                                <td>
                                    <div className="flex gap-4">
                                        <button disabled={user.role == 'admin' ? true : false} onClick={() => handleMakeAdmin(user)} className="btn btn-warning">Admin</button>

                                        <button disabled={user.role == 'instructor' ? true : false} onClick={() => handleMakeInstructor(user)} className="btn btn-warning">Instructor</button>
                                    </div>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;