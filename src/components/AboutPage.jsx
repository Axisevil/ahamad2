import React,{useState} from 'react';

import Navbar from "./Navbar.jsx"

function AboutPage(){
    return(
    <div>
        <Navbar/>
        <h1 className="text-orange-600 underline text-2xl  font-semibold md:text-3xl text-center p-6">About Ahmed-Pathan</h1>
        <p className="text-white font-semibold md:pl-[12rem] text-center tracking-wide text-xl pl-[2rem] pr-[2rem] md:pr-[12rem]">The Panun Blog is a multimedia platform that is aimed at providing an inclusive platform for the people of Kashmir and elsewhere. Our vision is to facilitate a channel of healthy discourse and debate within the Kashmiri community. Truth, in the contemporary world, cannot be found in a black and white contrast. It is hidden somewhere in the shades of grey. We aspire to strive hard to put out the different shades of truth in the virtual domain, while fostering an atmosphere where the voices of the most disadvantaged and repressed sections of the society are amplified so that their words and views are given a fair hearing that they rightfully deserve. Here you will discover the unsung, blooming intellectuals of our time, who by the sheer power of their pen illuminate the dark corners of our world. The word Panun finds its roots in the Kashmiri jargon, meaning 'one's own'. The entire Panun Team hopes that this platform feels no less than a home, both to the readers as well as to the authors. As the name suggests, consider this blog 'to be your own.' Our founder has been working on his dream project of creating the ultimate #panunplatform for months now. We have partnered with various local, national and international stakeholders to ensure a multifaceted collaboration of talented and ambitious thinkers and writers all around the world via this platform. We welcome teenagers and adults alike to contribute their works on our platform. Join the movement today!</p>
    </div>)
}

export default AboutPage;