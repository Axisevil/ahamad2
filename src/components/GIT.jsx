import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GetInTouch = () => {
  const notify = () => toast.success("Your Response was successfully submitted");
  

  return (
    <main>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          theme="dark"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Navbar />
        <div className="heading ">
          {" "}
          <h1 className="text-orange-600   underline text-2xl relative  text-fit   font-semibold md:text-3xl text-center p-6">
            Get In Touch
          </h1>
        </div>

        <div>
          <div className="main font-bold text-white flex justify-center flex-col w-[50rem] ml-[23rem] space-y-3 ">
            <label htmlFor="Name">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              autoComplete="off"
              className="h-[3rem] bg-gray-600 shadow-2xl p-4 rounded-sm"
              type="text"
              id="Name"
            />
            <label htmlFor="Age">
              Age <span className="text-red-600">*</span>
            </label>
            <input
              autoComplete="off"
              className="h-[3rem] bg-gray-600 shadow-2xl p-4 rounded-sm"
              type="number"
              id="Age"
            />
            <label htmlFor="Email">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              autoComplete="off"
              className="h-[3rem] bg-gray-600 shadow-2xl p-4 rounded-sm"
              type="email"
              id="Email"
            />
            <label htmlFor="Username">Username </label>
            <input
              autoComplete="off"
              className="h-[3rem] bg-gray-600 shadow-2xl p-4 rounded-sm"
              type="text"
              id="Username"
            />
          </div>
          <p></p>
          <div className="social-select flex    justify-center mt-8 text-white font-bold ">
            <label
              htmlFor="Discord"
              className=" button-radio bg-gray-500 rounded-md p-3"
            >
              Discord{" "}
            </label>
            <input type="radio" className="opacity-0 " name="a" id="Discord" />
            <label htmlFor="Instagram" className="bg-gray-500 rounded-md p-3">
              Instagram{" "}
            </label>
            <input
              type="radio"
              className="opacity-0 "
              name="a"
              id="Instagram"
            />
            <label htmlFor="Twitter" className="bg-gray-500 rounded-md p-3">
              Twitter{" "}
            </label>
            <input type="radio" className="opacity-0 " name="a" id="Twitter" />
            <label htmlFor="Linkedin" className="bg-gray-500 rounded-md p-3">
              Linkedin
            </label>
            <input type="radio" className="opacity-0 " name="a" id="Linkedin" />
          </div>
          <div className="flex justify-center mt-6 text-white font-bold">
            <button
              className="bg-orange-700 hover:bg-orange-600  font-bold w-[10rem]   rounded-lg p-3"
              onClick={notify} id="btn-form"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GetInTouch;
