import React, { useState } from 'react';
var date=new Date();
var currentyear=date.getFullYear();

function Footer(){
    return(
        

    <div className="py-6  md:p-0">
        
        <hr className="mt-16"/>
        <div className="wrapper flex justify-end mt-3 pr-6">
         <div className="button">
            <div className="icon">
               <i className="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
         </div>
         <div className="button">
            <div className="icon">
               <i className="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
         </div>
         <div className="button">
            <div className="icon">
               <i className="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
         </div>
         <div className="button">
            <div className="icon">
               <i className="fab fa-linkedin"></i>
            </div>
            <span>Linkedin</span>
         </div>
        
         
      </div>
        <p className="text-center  text-white">In collaboration with   <span className="text-orange-600 underline hover:text-orange-400"><a href="https://aleemcodes.co.in">AleemCodes</a></span> | &#169; {currentyear} Panun-Blogs</p>
    </div>)
}
export default Footer;