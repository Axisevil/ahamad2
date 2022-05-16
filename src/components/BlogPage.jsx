import React,{Component} from 'react';


import Navbar from "./Navbar.jsx"


class BlogPage extends Component {



    render() {
        return (
            <div>
            
                    <Navbar/>
                    <h1 className="text-orange-600   underline text-2xl relative  text-fit   font-semibold md:text-3xl text-center p-6">Panun-Blog</h1>
                
                    <div className="ml-24 blog-card hover:cursor-pointer bg-gray-800 rounded-lg shadow-xl fit-content h-[25rem] grid grid-cols-3 gap-1 justify-evenly  w-[25rem] text-white text-2xl font-bold relative  ">
                    <div className="text-sm p-4 font-semibold mb-2 absolute top-[110px] ">8 min read</div>
                        <div className=" absolute top-[120px] p-4 mt-2"  >How To Live a easy life</div>
                        <div className="text-sm absolute top-[200px] p-4   font-medium text-gray-400">orem ipsum dolor sit amet, consectetorem ipsum dolor sit amet, consectetorem ipsum dolor sit amet, consectetorem ipsum dolor sit amet, consectetorem ipsum dolor sit amet, consectetorem ipsum dolor sit amet, consectetorem ipsum dolor sit amet, consectetorem ipsum dolor sit amet, consectet</div>
                        <div className="text-sm absolute top-[320px] p-4">~Ahmed-Pathan</div>

                    </div>
                 
            </div>
        )
    }
    
}
        

 
export default BlogPage;