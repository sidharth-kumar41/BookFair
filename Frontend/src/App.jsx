import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../src/Home/Home'
import Courses from '../src/Cources/Courses'
import Signup from './Components/Signup'
import Contact from './Components/Contact'

export default function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Course" element={<Courses/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </div>
    
    </>
  );
}
