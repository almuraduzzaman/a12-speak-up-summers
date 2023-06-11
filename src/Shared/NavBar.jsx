import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useSelectedClasses from '../Hooks/useSelectedClasses';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [selectedClasses] = useSelectedClasses();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const navOptions = <>
        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>Home</button></NavLink></li>
        <li><NavLink to={'/instructors'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>Instructors</button></NavLink></li>
        <li><NavLink to={'/classes'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button>Classes</button></NavLink></li>
        {
            isAdmin ? 
            (<li><NavLink to={'/dashboard/admin-home'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button className="btn">
                Dashboard
                <div className="badge badge-secondary">{selectedClasses?.length || ''}</div>
            </button></NavLink></li>) 
            : isInstructor ? 
            (<li><NavLink to={'/dashboard/instructor-home'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button className="btn">
                Dashboard
                <div className="badge badge-secondary">{selectedClasses?.length || ''}</div>
            </button></NavLink></li>) 
            : (<li><NavLink to={'/dashboard/user-home'} className={({ isActive }) => isActive ? 'text-[#ab14a3]' : 'text-[#757575]'}><button className="btn">
                Dashboard
                <div className="badge badge-secondary">{selectedClasses?.length || ''}</div>
            </button></NavLink></li>)
        }
    </>

    return (
        <div className="py-4 bg-base-100 px-4 lg:px-36 shadow-lg flex justify-between items-center">

            <div className="dropdown lg:hidden">
                <label tabIndex={0} className="btn btn-ghost ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className=" menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navOptions}
                </ul>
            </div>


            <Link to={'/'}>
                <img className='h-[70px]' src={logo} alt="Speak Up Summers" />
            </Link>

            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1 lg:space-x-6 text-md font-semibold">
                    {navOptions}
                </ul>
            </div>


            <div>
                {
                    user ? <div className="dropdown dropdown-end">
                        <button className="btn btn-ghost btn-circle">
                            <div className=" rounded-full">
                                <div className="tooltip tooltip-left normal-case" data-tip={user.displayName}>
                                    <img className='rounded-full w-[40px] h-[40px]' src={user.photoURL} />
                                </div>
                            </div>
                        </button>
                        <ul className="menu z-10 my-auto menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-auto md:w-52">
                            <li><button onClick={handleLogOut} className="btn btn-active btn-ghost">Logout</button></li>
                        </ul>
                    </div> : <Link to={'/login'}><button className="btn btn-active btn-ghost">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;