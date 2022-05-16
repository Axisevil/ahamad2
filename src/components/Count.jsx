import React from 'react'

const Count = () => {

  
  
  return (
    <div className="main" data-aos="fade-right">
    <hr />

            <div className="container">
                <div className="heading">
                <h1 className="text-orange-600 underline text-2xl  font-semibold md:text-3xl text-center p-6">Counting Up To Limit</h1>
                </div>
                <div className="counter-container flex p-4 justify-center align-center text-white  md:text-xl  md:font-semibold space-x-20 text-center">
                <div className="counter">
                    <img src="https://cdn-icons-png.flaticon.com/512/889/889084.png"  width='110px' className='color-white' alt="timer" srcset="" />
                    <h3 data-target="15000" className="count mt-4">0</h3>
                    <h6 className='mt-2'>blogs posted</h6>
                
                </div>
                <div className="counter">
                    <img src="https://cdn-icons-png.flaticon.com/512/1995/1995562.png" width='110px' alt="Coffee" srcset="" className="icon"/>
                    <h3 data-target="1200"  className=" count mt-4">0</h3>
                    <h6 className='mt-2'> authors hosted</h6>
                </div>
                <div className="counter">
                    <img src="https://cdn-icons.flaticon.com/png/512/1634/premium/1634527.png?token=exp=1651508962~hmac=778b8796f852ad98577386d59dabe391" width='110px' alt="night" srcset="" className="icon"/>
                    <h3 data-target="500" className="count mt-4">0 </h3>
                    <h6 className='mt-2'>   babbles posted</h6>
                </div>
                </div>
  </div>
    </div>









    
  )
  

  
}


export default Count