import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';
const MainLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
            {/* navbar */}
            <Navbar></Navbar>
           {/* className='min-h-[calc(100vh-232px)] w-10/12 mx-auto pt-24' */}
           <div >
            <Outlet></Outlet>
           </div>
            

            <div className=''>
            <h3 className='text-center font-bold text-xl mt-20 '>Gadget Heaven</h3>
            <p className='text-center'>Leading the way in cutting-edge technology and innovation.</p>
            <hr className='mt-4' />
            </div>
           <Footer></Footer>

        </div>
    );
};

export default MainLayout;