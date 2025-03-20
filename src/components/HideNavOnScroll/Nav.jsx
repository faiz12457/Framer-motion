import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isTrue,setIsTrue]=useState(false)


  const {scrollY}=useScroll();

   useMotionValueEvent(scrollY,'change',(latest)=>{
        const prev=scrollY.getPrevious();
        if(latest>prev && latest >200){
            setIsTrue(true);
        }
        else{
            setIsTrue(false)
        }
   })

  return (
    <motion.nav 

    variants={{
        closed:{
            y:"-100%"
            },
         visible:{
            y:0
         }   

    }}

  animate={ isTrue?"closed":"visible" }
  transition={{
    duration:0.25,
    ease:'easeInOut'

  }}
    
    className="bg-white  dark:bg-gray-900 border-b fixed top-0 w-full border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-8"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Logo"
              />
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                MyApp
              </span>
            </a>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a
                href="#"
                className="text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-300 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-300 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-300 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-gray-900 dark:text-white bg-indigo-50 dark:bg-gray-800 focus:outline-none focus:bg-indigo-100 dark:focus:bg-gray-700 focus:border-indigo-700"
            >
              Home
            </a>
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-800 focus:border-gray-300"
            >
              About
            </a>
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-800 focus:border-gray-300"
            >
              Services
            </a>
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-800 focus:border-gray-300"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Nav;



export function Text(){
    return (
        <div className="w-[500px] border mx-auto mt-[100px]">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    )
}










