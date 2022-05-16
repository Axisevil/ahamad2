import React,{useState} from 'react';


function Home(){
    return(
        <div className="">
             
             <div className="wrapper flex justify-center items-center mt-[50%] md:mt-[20%] ml-15">
    <div className="static-txt"></div>
    <ul className="dynamic-txts">
      <li><span>Ciaz!</span></li>
      <li><span>سلام</span></li>
      <li><span>مرحبا</span></li>
      <li><span>Ciao!
      </span></li>
    </ul>
  </div>
            
            <h1 className="text-white flex justify-center items-start tracking-normal text-xl mt-1">Welcome To The Panun Blog</h1>         
     
        </div>
    )


}

export default Home;