import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from"../../public/photo.jpg";

function Home() {
  return (
    <>
      <div 
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 bg-black text-white py-10 rounded-lg"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 space-y-4 order-2 md:order-1">
            <span className="text-xl text-gray-300">Welcome to My Feed</span>
            <div className="flex text-2xl md:text-4xl space-x-2">
              <h1>Hello, I'm a</h1>
              <span className="text-red-500 font-bold pl-2">
                <ReactTyped
                  className="text-red-500 font-bold"
                  strings={["Developer", "Programmer", "Coder"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </span>
            </div>

            <p className="text-bold md:text-md text-justify text-gray-300">
              Hi, I'm Saurav Jamadar, a Computer Engineering student with a strong interest in
              frontend development. I enjoy building clean, responsive, and user-friendly web applications
              using modern technologies like React and JavaScript. I'm passionate about learning, creating,
              and growing as a developer.
            </p>

            {/* Social and tech stack */}
            <div className="flex justify-between items-center flex-col md:flex-row space-y-6 md:space-y-6">
              <div className="space-y-2">
                <h1 className="font-bold text-center text-white">Available on</h1>
                <ul className="flex space-x-5 text-white">
                  <li> 
                    <a href="https://www.facebook.com/" target="_blank"> 
                      <FaFacebookSquare className="text-2xl cursor-pointer hover:text-blue-500" /> 
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/feed/" target="_blank"> 
                      <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-400" /> 
                    </a>
                  </li> 
                  <li>
                    <a href="https://www.instagram.com/" target="_blank"> 
                      <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h1 className="font-bold text-white">Currently working on</h1>
                <div className="flex space-x-4 mt-2 text-white">
                  <DiMongodb className="text-3xl border-2 rounded-full p-1 hover:text-green-400" />
                  <SiExpress className="text-3xl border-2 rounded-full p-1 hover:text-gray-400" />
                  <FaReact className="text-3xl border-2 rounded-full p-1 hover:text-blue-400" />
                  <FaNodeJs className="text-3xl border-2 rounded-full p-1 hover:text-green-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-48 md:mt-20 order-1">
            <img src={pic} className="rounded-full md:w-[450px] md:h-[450px] border-4 border-white" alt="" />
          </div>
        </div>
      </div>
      <hr className="border-gray-700" />
    </>
  );
}

export default Home;
