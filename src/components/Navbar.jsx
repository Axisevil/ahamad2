import React,{useState} from 'react';



function Navbar(){
  const url='https://i.ibb.co/BjcG5vc/logo.png'
    return (
        <div>
       
                      <nav>
         <div className="menu-icon">
            <span className="fas fa-bars"></span>
         </div>
         <div className="logo ">
            <a href="/" ><img src={url} className="w-24 flex md:w-36 md:mt-3 " alt="Logo"></img> </a>
         </div>
         <div className="nav-items">
            <li><a href="/">Home</a></li>
            <li><a href="blogs">Blogs</a></li>
            <li><a href="about">About</a></li>
            <li><a href="babbles">Babbles</a></li>
            <li><a href="socials">Socials</a></li>
            <li><a href="git">Get In Touch</a></li>
            <li hidden><a href="Login">Login/Sign-up</a></li>
         </div>
         <div className="search-icon">
            
         </div>
         <div className="cancel-icon">
            <span className="fas fa-times"></span>
         </div>
{/*          
         <div  hidden className="flex flex-row-reverse mr-24
        ">
	<input type="checkbox" class="checkbox" id="chk" />
	<label class="label" for="chk">
		<i class="fas fa-moon"></i>
		<i class="fas fa-sun"></i>
		<div class="ball"></div>
	</label>
</div>
        */}
      </nav>







        </div>

    )
    
   
  

    
}


export default Navbar;