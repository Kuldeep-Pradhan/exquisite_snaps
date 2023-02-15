import React from "react";
import Image from "next/image";
const Porfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center" >
      <h1 className="font-bold text-2x p-4l">Travel photos</h1>
      <div className=" grid  md:grid-cols-5 p-4 gap-4 ">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src="https://images.unsplash.com/photo-1670968982568-51116a0770c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=963&q=80"
            alt="temple.jpeg"
            width={677}
            height={451}
          />
        </div>
        <div className="w-full h-full">
            <Image 
            src='https://images.unsplash.com/photo-1664737061963-862d6a174a3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
            alt="nigt-sky.jpeg"
            width='215'
            height='217'
            />
        </div>
        <div className="w-full h-full">
            <Image 
            src='https://images.unsplash.com/photo-1664737061963-862d6a174a3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
            alt="nigt-sky.jpeg"
            width='215'
            height='217'
            />
        </div>
        <div className="w-full h-full">
            <Image 
            src='https://images.unsplash.com/photo-1664737061963-862d6a174a3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
            alt="nigt-sky.jpeg"
            width='215'
            height='217'
            
            />
        </div>
        <div className="w-full h-full">
            <Image 
            src='https://images.unsplash.com/photo-1664737061963-862d6a174a3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
            alt="nigt-sky.jpeg"
            width='215'
            height='217'
            />
        </div>
      </div>
    </div>
  );
};

export default Porfolio;
