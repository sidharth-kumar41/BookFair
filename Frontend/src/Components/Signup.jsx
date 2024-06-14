import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

export default function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <div className="modal-box mx-auto h-screen p-8 my-auto flex items-center justify-center">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
    <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">Signup</h3>
    <div className="space-y-2 p-3">
    <span>Name</span>
    <br />
    <input {...register("name", { required: true })} type="text" placeholder='Enter your Name' className="border rounded-md p-1 w-full" />
    {errors.name && <span className="text-sm text-red-500">This field is required</span>}
    <br />
    <span>Email</span>
    <br />
    <input {...register("email", { required: true })} type="email" placeholder='Enter your Email' className="border rounded-md p-1 w-full" />
    {errors.email && <span className="text-sm text-red-500">This field is required</span>}
    <br />
    <span>Password</span>
    <br />
    <input {...register("password", { required: true })} type="password" placeholder='Enter your password' className="border rounded-md p-1 w-full " />
    {errors.password && <span className="text-sm text-red-500">This field is required</span>}
    <div className="flex justify-around ">
        <button className="bg-pink-500 text-white p-2 hover:bg-pink-700 rounded-md px-3 mt-4">Signup</button>
        <Login/>
        <p className='mt-4 p-2'>Already have Account?{" "}<button className="underline text-blue-500 cursor-pointer"
        onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button>{" "}
        </p>
    </div>
    </div>
    </form>
  </div>
  )
}
