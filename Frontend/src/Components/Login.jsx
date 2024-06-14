import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
    
    <h3 className="font-bold text-lg">Login</h3>
    <div className="space-y-2 p-3">
    <span>Email</span>
    <br />
    <input type="email" placeholder='Enter your Email' className="border rounded-md p-1 w-full" {...register("email", { required: true })} />
    {errors.email && <span className="text-sm text-red-500">This field is required</span>}
    <br />
    <span>Password</span>
    <br />
    <input {...register("password", { required: true })} type="password" placeholder='Enter your password' className="border rounded-md p-1 w-full " />
    {errors.password && <span className="text-sm text-red-500">This field is required</span>}
    <div className="flex justify-around ">
        <button className="bg-pink-500 text-white p-2 hover:bg-pink-700 rounded-md px-3 mt-4">Login</button>
        <p className='mt-4 p-2'>Create New Account ?<Link to='/Signup'><span className="underline text-blue-500 cursor-pointer" >Signup</span></Link></p>
    </div>
    </div>
    </form>
  </div>
</dialog>
  )
}
