import React, { useEffect } from 'react'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function Course() {
    const [book,setBook]=useState([])
    useEffect(()=>{
        const getBook =async ()=>{
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data);
                
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[])
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-3xl">
                we're delighted to have you{""} <span className="text-cyan-800"> Here! :)</span>
            </h1>
            <p className="mt-12">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nihil tenetur hic, quis voluptate rem asperiores soluta aut sit possimus? Aut sit perspiciatis repellendus voluptates accusamus cupiditate aliquam id molestias?
            </p>
            <Link to='/'>
            <button className="bg-cyan-800 text-white rounded-md hover:bg-cyan-300 mt-6 px-4 py-2">Back</button>
            </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                book.map((item)=>(
                    <Cards item={item} key={item.id}/>
                ))
            }
        </div>
    </div>
    </>
  )
}
