import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import LoadingSpinner from "../Shared/LoadingSpinner";
import useAuth from "../Hooks/useAuth";
import logo from '/logo.png'


const Dashboard = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();

    if (isAdminLoading || isInstructorLoading) {
        return <LoadingSpinner />
    }

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(err => console.error(err))
    }



    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary bg-[#D74539] mt-10 -mb-10 drawer-button lg:hidden">Open Menu</label>
                {/* Page content here */}
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <Link to={'/'}>
                        <img className='h-[70px] mx-auto my-10' src={logo} alt="Speak Up Summers" />
                    </Link>
                    {
                        isAdmin ? <>
                            <li><NavLink to={'/dashboard/admin-home'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button>Admin Home</button></NavLink></li>
                            <li><NavLink to={'/dashboard/manage-classes'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button>Manage Classes</button></NavLink></li>
                            <li><NavLink to={'/dashboard/manage-users'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button>Manage Users</button></NavLink></li>

                        </> : <>
                            {
                                isInstructor ? <>
                                    <li><NavLink to={'/dashboard/instructor-home'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button>Instructor Home</button></NavLink></li>
                                    <li><NavLink to={'/dashboard/add-class'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button>Add a Class</button></NavLink></li>
                                    <li><NavLink to={'/dashboard/my-classes'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button>My Classes</button></NavLink></li>
                                </> : <>
                                    <li><NavLink to={'/dashboard/user-home'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button>User Home</button></NavLink></li>
                                    <li><NavLink to={'/dashboard/selected-classes'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button>Selected Classes</button></NavLink></li>
                                    <li><NavLink to={'/dashboard/enrolled-classes'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button>Enrolled Classes</button></NavLink></li>
                                    <li><NavLink to={'/dashboard/payment-history'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button>Payment History</button></NavLink></li>
                                </>
                            }

                        </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button>Home</button></NavLink></li>
                    <li><NavLink to={'/instructors'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button>Instructors</button></NavLink></li>
                    <li><NavLink to={'/classes'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button>Classes</button></NavLink></li>
                    <li><button onClick={handleLogOut}>Logout</button></li>
                </ul>

            </div>
        </div >
    );
};

export default Dashboard;