import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaTwitter, FaGitSquare } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <hr className="border-gray-700" />
      <footer className="py-12 bg-black text-white">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4 text-white">
              <FaFacebookSquare size={24} className="hover:text-blue-500 transition duration-300" />
              <FaInstagram size={24} className="hover:text-pink-500 transition duration-300" />
              <FaLinkedin size={24} className="hover:text-blue-400 transition duration-300" />
              <FaGithub size={24} className="hover:text-gray-400 transition duration-300" />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col">
              <p>&copy;2025 Saurav Jamadar. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
