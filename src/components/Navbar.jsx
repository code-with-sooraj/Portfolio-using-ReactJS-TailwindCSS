import React from 'react';

export const Navbar = () => {
  return (
    <div className="flex justify-between bg-slate-500">
      <div className='m-5 pr-5'> My Portfolio </div>
      <div className='flex'>
        <div className='m-5 pr-5'>
          <a>Home</a>
        </div >
        <div className='m-5 pr-5'>
          <a>About me</a>
        </div>
        <div className='m-5 pr-5'>
          <a>Skills</a>
        </div>
        <div className='m-5 pr-5'>
          <a>Projects</a>
        </div>
        <div className='m-5 pr-5'>
          <a>Profiles</a>
        </div>
      </div>
    </div>
  );
};


