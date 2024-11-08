import { NavLink,Link, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import Banner from "./Banner";
import { useState } from "react";
const Navbar = ({ cartCount,heartCount}) => {
     

  

   const location = useLocation();
   const isHome = location.pathname === '/';



    return (
        <div className="w-11/12 mx-auto bg-[#9538E2]">
        <div className={`navbar w-11/12 mx-auto rounded-t-xl backdrop-blur-xl ${isHome ? 'bg-[#9538E2] text-white' : 'bg-white/30 text-black'} z-50 fixed`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
    
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

            <NavLink className = {({isActive}) => `font-bold ml-5 ${isActive ? 'text-[#9538E2]' : (isHome ? 'text-purple-950' : 'text-black')}`} to="/">Home</NavLink>
            <NavLink className = {({isActive}) => `font-bold ml-5 ${isActive ? 'text-[#9538E2]' : (isHome ? 'text-purple-600' : 'text-black')}`} to="/statistics">Statistics</NavLink>
            <NavLink className = {({isActive}) => `font-bold ml-5 ${isActive ? 'text-[#9538E2]' : (isHome ? 'text-purple-600' : 'text-black')}`} to="/dashboard">Dashboard</NavLink>
            <NavLink className = {({isActive}) => `font-bold ml-5 ${isActive ? 'text-[#9538E2]' : (isHome ? 'text-purple-600' : 'text-black')}`} to="/ordertracking">Order-tracking</NavLink>

      </ul>
     
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

            
            <NavLink className = {({isActive}) => `font-bold ml-5 ${isActive ? 'text-purple-950' : (isHome ? 'text-white' : 'text-black')}`} to="/">Home</NavLink>
            <NavLink className = {({isActive}) => `font-bold ml-5 ${isActive ? 'text-[#9538E2]' : (isHome ? 'text-white' : 'text-black')}`} to="/statistics">Statistics</NavLink>
            <NavLink className = {({isActive}) => `font-bold ml-5 ${isActive ? 'text-[#9538E2]' : (isHome ? 'text-white' : 'text-black')}`} to="/dashboard">Dashboard</NavLink>
            <NavLink className = {({isActive}) => `font-bold ml-5 ${isActive ? 'text-[#9538E2]' : (isHome ? 'text-white' : 'text-black')}`} to="/ordertracking">Order-tracking</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
               <div className="text-xl mr-3 bg-white rounded-full p-1 text-black relative">
                  <MdOutlineShoppingCart />
                  {cartCount > 0 && <span className="absolute top-0 right-0 text-xs bg-red-500 rounded-full px-1 text-white">{cartCount}</span>}
               </div>
               <div className="text-xl font-bold bg-white rounded-full p-1 text-black relative">
                  <CiHeart />
                  {heartCount > 0 && <span className="absolute top-0 right-0 text-xs bg-red-500 rounded-full px-1 text-white">{heartCount}</span>}
               </div>
            </div>
</div>
{isHome && <Banner/>}
</div>
    );
};

export default Navbar;