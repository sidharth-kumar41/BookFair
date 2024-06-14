import React from 'react'
import { Link} from "react-router-dom";

export default function Contact() {
  return (
    <div className='h-screen w-full dark:bg-slate-900 dark:text-white'>
    <div className="flex h-screen items-center justify-center mx-auto overflow-hidden  dark:bg-slate-900 dark:text-white">
        <div className=" w-[600px] ">
          <div className="p-10  dark:bg-slate-900 dark:text-white">
            <form  method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg text-cyan-800">Contact Us</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  
                />
                <br />
                
              </div>
              {/* Email */}
              
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  
                />
                <br />
                
              </div>
              {/*phone number */}
              <div className="mt-4 space-y-2">
                <span>Phone number</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  
                />
                <br />
                
              </div>
              {/* Message */}
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  type="textarea"
                  placeholder=""
                  className="w-80 px-3 py-1 border rounded-md outline-none"/>
                  
                <br />
                
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-cyan-800 text-white rounded-md px-3 py-1 hover:bg-cyan-300 duration-200">
                  Contact us
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
  )
}
