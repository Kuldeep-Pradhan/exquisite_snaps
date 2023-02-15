import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const[color, setColor] = useState("transparent")
  const[textColor, setTextColor] = useState("white")

  const handleNav = (event) => { 
    event.preventDefault();
    setNav(!nav);
  };

useEffect(()=>{
    const changeColor =()=>{
        if(window.scrollY >= 100){
            setColor("white")
            setTextColor("black")

        }else{
            setColor("transparent")
            setTextColor("white")
        }
    }
     window.addEventListener('scroll', changeColor)
},[])

  return (
    <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white ">
        <Link href="/">
          <h1 style={{color: `${textColor}`}} className="font-bold text-4xl">Exquisite</h1>
        </Link>
        <ul style={{color: `${textColor}`}} className="hidden sm:flex ">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* Mobile button */}
        <div className="block sm:hidden z-10" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
        </div>
        {/* mobile menu  */}
        <div className={nav?"sm:hidden bg-black/90 absolute top-0 left-0 flex items-center text-center justify-center w-full h-screen ease-in duration-300":"sm:hidden bg-black/90 absolute top-0 left-[100%] flex items-center text-center justify-center w-full h-screen ease-in duration-300"}>
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-400">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-400">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-400">
              <Link href="/work">Work</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-400">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
