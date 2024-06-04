import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/Logo/icon.png'

const Navbar = () => {

    const navRoutes = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {/* <li>
            <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-black bg-opacity-40 text-white">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li> */}
        <li><NavLink to='/all_sessions'>Study Sessions</NavLink></li>
    </>

    const navBtns = <div className=" mr-4 mt-3 md:mt-0 flex flex-row gap-2 ">
        <Link className="btn w-20 text-white bg-gray-400">Log in</Link>
        <Link className="btn w-20 text-white bg-gray-500">Register</Link>
    </div>

    return (
        <div >
            <div className="navbar bg-black bg-opacity-40 text-white px-10 p-2 h-20 md:h-24 fixed z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-40 text-white rounded-box w-52">
                            {navRoutes}
                            {navBtns}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl md:text-2xl font-bold text-left h-[60px] md:h-[68px]">
                        <img src={logo} alt="" className=' w-10 h-10' />
                        <h2 className=" ">Learn <br />Together</h2>
                    </Link>
                </div>
                <div className="navbar-center lg:navbar-end hidden md:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navRoutes}
                    </ul>
                    {navBtns}
                </div>
            </div>
        </div>
    );
};

export default Navbar;