import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className="text-black body-font font-semibold bg-fixed bg-cover bg-center custom-image">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
        <span className="ml-3 text-xl mb-1">Hasnain Raza</span>
          </a>
          <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Developed By Hasnain Raza | All Rights Reserved
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4 ">
            <Link
            target="_blank" href={"https://www.facebook.com/hasnainraza4321"} className="text-blue-800 hover:text-blue-600 ">
              <FaFacebook className='text-3xl hover:text-[#1877F2] transition-transform duration-400 ease-in-out transform hover:scale-110'/>
            </Link>

            <Link
            target="_blank" 
             href={"https://www.instagram.com/hasnain_raza321/"} className="text-pink-700">
              <IoLogoInstagram className='text-3xl hover:text-[#e04d92] transition-transform duration-400 ease-in-out transform hover:scale-110'/>
            </Link>

            <Link 
            target="_blank" 
            href={"https://www.linkedin.com/in/hasnain-raza-47b6b2294/"} className="text-blue-800 hover:text-blue-900 ">
              <FaLinkedin className='text-3xl transition-transform duration-400 ease-in-out transform hover:scale-110' />
            </Link>

            <Link 
            target="_blank" 
            href={"https://github.com/hasnainraza321"} className="text-black hover:text-gray-600 text-xl">
              <FaGithub className='text-3xl transition-transform duration-400 ease-in-out transform hover:scale-110'/>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
