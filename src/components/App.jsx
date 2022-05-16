import React,{useState} from 'react';
import Navbar from "./Navbar.jsx"
import Home from "./Home.jsx"
import Verses from "./Verses.jsx"
import SS from "./SocialSlider.jsx"
// import Blog from "./Blogs.jsx"

import About from "./About.jsx"
import Venture from "./ventures.jsx"



import Footer from "./Footer.jsx"
import Blog from "./Blogs"
import Author from "./Authors"
import Count from "./Count.jsx"







function App(){
    

    return(

        <div>
        <React.StrictMode>
             

                  
                    <Navbar/>
                        <Home/>
                        <Verses/>
                        <Blog/>
                        <About/> 
                        <Venture/> 
                        <Author/> 
                        
                        <Count></Count>
                       

                                 
                        <Footer/>

               
      
                            



        </React.StrictMode>
      
        </div>
    );
}

export default App;