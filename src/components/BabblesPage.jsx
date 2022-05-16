import React,{useState} from 'react';

import Navbar from "./Navbar.jsx"


function BlabblesPage(){
    return(
        <div>
            <Navbar/>
                    <h1 className="text-orange-600 underline text-2xl  font-semibold md:text-3xl text-center p-6">Babbles</h1>
              
                    <div className="bg-white w-[23rem] shadow-lg rounded-md md:h-[12rem] md:w-[35rem] md:ml-12 md:pl-4 md:pt-2 font-sans">
                       <img src="https://pbs.twimg.com/profile_images/967139929888243712/kpeiQiVn_400x400.jpg" alt="" className=" h-12 rounded-[100%]"/> <span className="absolute bottom-[43rem] ml-[3.5rem] md:bottom-[32.3rem] md:ml-12 md:p-2">Ahmed-Pathan</span>

                        <div className="md:mt-2 md:text-lg  md:tracking-wide md:pr-2">The mindless babbles of a liberated mind.
                                    Take a look into what the blue ink imprints on a wet paper when the clocks of the globe struck the midnight hour.</div>
                    </div>


        </div>
    )
}

export default BlabblesPage;