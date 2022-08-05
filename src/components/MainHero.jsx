import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero-illustration.png'

const MainHero = () => {
  
    return (
        <div className='m-auto h-screen flex flex-col justify-around items-center pt-44 pb-28 px-6 sm:pl-80 sm:justify-center' >
            <div className=' space-y-4 text-center w-full sm:pl-4' >
                <h1 className='text-primary text-5xl font-semibold'>To-Do App</h1>
                <h3 className='text-2xl'>Your daily <span className=' text-primary'>tasks</span> management</h3>
                <h5 className='text-xl'>Let's make to do list for better productivity</h5>
                <div className='py-8'>
                <img src={heroImg} alt="hero-image" className='m-auto w-auto max-h-52' />
                </div>
            </div>
            <Link className='bg-primary text-white text-center text-lg w-full py-6 rounded-full max-w-sm hover:text-purple-700 hover:bg-purple-400 active:bg-purple-700 active:text-white sm:w-52 sm:ml-4' to="/Home">Get started</Link>
        </div>
    );
};

export default MainHero;