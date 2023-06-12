import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import LoadingSpinner from "../Shared/LoadingSpinner";
import useAuth from "../Hooks/useAuth";
import logo from '/logo.png'
import { Helmet } from "react-helmet-async";
import { FaHome, FaChalkboardTeacher, FaBookReader, FaHatCowboy, FaWallet } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HiDocumentAdd, HiDocumentSearch, HiDocumentReport, HiUserGroup, HiShoppingCart, HiBookOpen } from "react-icons/hi";


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
            <Helmet>
                <title>Dashboard | SpeakUpSummers</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn bg-[#D74539] mt-10 text-white drawer-button lg:hidden">Open Menu</label>
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
                            <li><NavLink to={'/dashboard/admin-home'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button className="flex gap-2 items-center"><FaHatCowboy className="w-5 h-5" />Admin Home</button></NavLink></li>
                            <li><NavLink to={'/dashboard/manage-classes'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button className="flex gap-2 items-center"><HiDocumentReport className="w-5 h-5" />Manage Classes</button></NavLink></li>
                            <li><NavLink to={'/dashboard/manage-users'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button className="flex gap-2 items-center"><HiUserGroup className="w-5 h-5" />Manage Users</button></NavLink></li>

                        </> : <>
                            {
                                isInstructor ? <>
                                    <li><NavLink to={'/dashboard/instructor-home'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button className="flex gap-2 items-center"><FaHatCowboy className="w-5 h-5" />Instructor Home</button></NavLink></li>
                                    <li><NavLink to={'/dashboard/add-class'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button className="flex gap-2 items-center"><HiDocumentAdd className="w-5 h-5" />Add a Class</button></NavLink></li>
                                    <li><NavLink to={'/dashboard/my-classes'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button className="flex gap-2 items-center"><HiDocumentSearch className="w-5 h-5" />My Classes</button></NavLink></li>
                                </> : <>
                                    <li><NavLink to={'/dashboard/user-home'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button className="flex gap-2 items-center"><FaHatCowboy className="w-5 h-5" />User Home</button></NavLink></li>
                                    <li><NavLink to={'/dashboard/selected-classes'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button className="flex gap-2 items-center"><HiShoppingCart className="w-5 h-5" />Selected Classes</button></NavLink></li>
                                    <li><NavLink to={'/dashboard/enrolled-classes'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button className="flex gap-2 items-center"><HiBookOpen className="w-5 h-5" />Enrolled Classes</button></NavLink></li>
                                    <li><NavLink to={'/dashboard/payment-history'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button className="flex gap-2 items-center"><FaWallet className="w-5 h-5" />Payment History</button></NavLink></li>
                                </>
                            }

                        </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button className="flex gap-2 items-center"><FaHome className="w-5 h-5" />Home</button></NavLink></li>
                    <li><NavLink to={'/instructors'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button className="flex gap-2 items-center"><FaChalkboardTeacher className="w-5 h-5" />Instructors</button></NavLink></li>
                    <li><NavLink to={'/classes'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button className="flex gap-2 items-center"><FaBookReader className="w-5 h-5" />Classes</button></NavLink></li>
                    <li><button onClick={handleLogOut} className="flex gap-2 items-center"><FiLogOut className="w-5 h-5" />Logout</button></li>
                </ul>

            </div>
        </div >
    );
};

export default Dashboard;