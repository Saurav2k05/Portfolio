import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import pic from"../../public/photo.jpg";
import {Link} from "react-scroll"

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems=[
    {
        id:1,
        text:"Home"
    },
    {
        id:2,
        text:"About"
    },
    {
        id:3,
        text:"Portfolio"
    },
    {
        id:4,
        text:"Experience"
    },
    {
        id:5,
        text:"Contact"
    },
  ]

  return (
    <>
      <div className="max-w-screen-3xl container mx-auto px-4 md:px-20 h- shadow-md fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="flex justify-between h-20 items-center text-white">
          <div className="flex space-x-2 items-center">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer">
                Saura<span className="text-blue-400 text-xl">v</span>
              </h1>
              <p className="text-sm">Computer Student</p>
            </div>
          </div>

          {/* Desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {
                navItems.map(({id,text})=>(
                  <li className="hover:text-blue-400 duration-200 cursor-pointer" key={id}>
                    <Link to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"> 
                    {text}</Link>
                  </li>
                ))
              }
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden text-white">
              {menu ? <IoCloseSharp size={24}/> : <AiOutlineMenu size={24}/>}
            </div>
          </div>
        </div>

        {/* Mobile navbar */}
        {menu && (
          <div className="bg-black text-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-6 text-xl">
              {
                navItems.map(({id,text})=>(
                  <li className="hover:text-blue-400 duration-200 font-semibold cursor-pointer" key={id}>
                    <Link 
                      onClick={() => setMenu(!menu)}
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"> 
                      {text}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
