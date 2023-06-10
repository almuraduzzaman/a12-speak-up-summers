import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to={'/dashboard/user-home'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>User Home</button></NavLink></li>
                    <li><NavLink to={'/dashboard/selected-classes'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>Selected Classes</button></NavLink></li>
                    <li><NavLink to={'/dashboard/enrolled-classes'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>Enrolled Classes</button></NavLink></li>





                    <div className="divider"></div>
                    <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>Home</button></NavLink></li>
                    <li><NavLink to={'/instructors'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>Instructors</button></NavLink></li>
                    <li><NavLink to={'/classes'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>Classes</button></NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;