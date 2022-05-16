import React, { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function About() {
  useEffect( ()=>{
    AOS.init({duration:3000});
  },[])
    return (

        <div data-aos="fade-righta">
           <hr className="mt-40"/>
            <h1 className="flex items-center justify-center hover:cursor-cell text-2xl mt-[5%] text-orange-600 underline md:font-semibold md:mt-[2%] md:ml-2 md:text-3xl">About Ahmed-Pathan</h1>
            <p className="text-center  text-sm  font-medium  px-[5%] mt-2 md:px-[25%] md:text-lg md:mt-2  text-white "> The Panun Blog is a multimedia platform that is aimed at providing an inclusive platform for the people of Kashmir and elsewhere. Our vision is to facilitate a channel of healthy discourse and debate within the Kashmiri community. Truth, in the contemporary world, cannot be found in a black and white contrast. It is hidden somewhere in the shades of grey</p>
                <div className="text-center ml-[4%] mt-5">
                <a className="btx" href="about">
                  <span className="abt-span"></span>
                  <span className="abt-span"></span>
                  <span className="abt-span"></span>
                  <span className="abt-span"></span>
                  Read More
              </a>

                  
                </div>
           
         
  
        </div>)
}

export default About;