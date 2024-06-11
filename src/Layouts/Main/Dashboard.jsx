import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../../../src/assets/Logo/icon.png'
import useLoggedUser from "../../Hooks/useLoggedUser";
import { useState } from "react";


const Dashboard = () => {

    const loggedUser = useLoggedUser();
    const userInfo = loggedUser[0];


    console.log(userInfo);

    const dashLinks = <ul className=" menu px-1 space-y-2 max-w-56">
        <li><NavLink to='/dashboard/profile'>Profile</NavLink></li>
        <li><NavLink to='/dashboard/booked_sessions'>View booked session</NavLink></li>
        <li><NavLink to='/dashboard/create_notes'>Create note</NavLink></li>
        <li><NavLink to='/dashboard/manage_notes'>Manage notes</NavLink></li>
        <li><NavLink to='/dashboard/booked_sessions'>View all study materials</NavLink></li>
    </ul>
    return (
        <div className=" flex flex-col md:flex-row gap-10">
            <div className=" md:w-64 lg:w-72  md:min-h-screen p-5 bg-gray-500 text-white">
                <Link to='/' className="btn btn-ghost text-xl md:text-2xl font-bold text-left h-[60px] md:h-[68px] mb-4">
                    <img src={logo} alt="" className=' w-10 h-10' />
                    <h2 className=" ">Learn <br />Together</h2>
                </Link>
                {dashLinks}
                <hr className=" w-2/3 mx-auto my-5 border-2 border-black" />
                <NavLink to='/'>Home</NavLink>
            </div>
            <div className=" flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;