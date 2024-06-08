import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/Logo/icon.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "Logged Out!",
                text: "You have successfully logged out!",
            });
        })

        .catch(error => {
            Swal.fire({
                icon: "error",
                title: "Oops !",
                text: error.massage,
            });
        })
    }

    const navRoutes = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/study_sessions'>Study Sessions</NavLink></li>
        {
            user && <li><NavLink to='/dashboard/profile'>Dashboard</NavLink></li>
        }
    </>

    const navBtns = <div className=" mr-4 mt-3 md:mt-0 flex flex-col md:flex-row gap-2 ">
        {
            user ? <>
                <div className="tooltip tooltip-bottom pt-2 pl-2" data-tip={user.email}>
                    <Link to='/dashboard/profile' ><img src={user.photoURL} alt="" className="w-8 h-8 my-auto rounded-full " /></Link>
                </div>
                <Link to='/' onClick={handleLogOut} className="btn w-24 text-white bg-gray-500">Log Out</Link>
            </> :
                <>
                    <Link to='/login' className="btn w-20 text-white bg-gray-400">Log in</Link>
                    <Link to='/register' className="btn w-20 text-white bg-gray-500">Register</Link>
                </>
        }
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