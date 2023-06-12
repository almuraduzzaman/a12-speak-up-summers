import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.png'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useSelectedClasses from '../Hooks/useSelectedClasses';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';

const NavBar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute("data-theme", localTheme);
    }, [theme])


    const { user, logOut } = useContext(AuthContext);
    const [selectedClasses] = useSelectedClasses();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    const navOptions = <div className='lg:flex items-center gap-4'>
        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button>Home</button></NavLink></li>
        <li><NavLink to={'/instructors'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button>Instructors</button></NavLink></li>
        <li><NavLink to={'/classes'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button>Classes</button></NavLink></li>
        {
            isAdmin ?
                (<li><NavLink to={'/dashboard/admin-home'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button className="btn">
                    Dashboard
                    <div className="badge badge-warning">{selectedClasses?.length || ''}</div>
                </button></NavLink></li>)
                : isInstructor ?
                    (<li><NavLink to={'/dashboard/instructor-home'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button className="btn">
                        Dashboard
                        <div className="badge badge-warning">{selectedClasses?.length || ''}</div>
                    </button></NavLink></li>)
                    : user && (<li><NavLink to={'/dashboard/user-home'} className={({ isActive }) => isActive ? 'text-[#D74539]' : 'text-[#757575]'}><button className="btn">
                        Dashboard
                        <div className="badge badge-warning">{selectedClasses?.length || ''}</div>
                    </button></NavLink></li>)
        }
    </div>

    return (
        <div className="py-4 bg-base-100 px-4 lg:px-36 shadow-lg flex justify-between items-center">

            <div className="dropdown lg:hidden">
                <label tabIndex={0} className="btn btn-ghost ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className=" menu-compact dropdown-content mt-3 z-40 p-2 shadow bg-base-100 rounded-box w-52">
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


            <div className='flex gap-4 items-center justify-center'>
                {
                    user ? <div className="dropdown dropdown-end">
                        <button className="btn btn-ghost btn-circle">
                            <div className=" rounded-full">
                                <div className="tooltip tooltip-left normal-case" data-tip={user.displayName}>
                                    <img className='rounded-full w-[40px] h-[40px]' src={user.photoURL} />
                                </div>
                            </div>
                        </button>
                        <ul className="z-10  dropdown-content shadow bg-base-100 rounded-box ">
                            <li><button onClick={handleLogOut} className="btn btn-active btn-ghost">Logout</button></li>
                        </ul>
                    </div> : <Link to={'/login'}><button className="btn btn-active btn-ghost">Login</button></Link>
                }

                {/* dark light mode toggle  */}
                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input onChange={handleToggle} checked={theme === 'light' ? false : true} type="checkbox" />

                    {/* sun icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
        </div>
    );
};

export default NavBar;