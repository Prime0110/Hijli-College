import React, { useEffect } from 'react'
import Login from './Login'; 

function Navbar() {
  // const[hold,setHold]=userState(false)
  // useEffect(()=>{
  //   const handleScroll=()=>{
  //     if(window.scroll>0){
  //       setHold(true)
  //     }
  //     else{
  //       setHold(false)
  //     }
  //   }
  //   window.addEventListener('scroll',handleScroll)
  //   return()=>{
  //     window.removeEventListener('scroll',handleScroll)
  //   }
  // })
    const navItems =(
        <>
        <a href="/" className='m-4 text-zinc-200 hover:text-orange-500'>Home</a>
            <a href="#about" className='m-4 text-zinc-200 hover:text-orange-500'>Admission</a>
            <a href="/Course" className='m-4 text-zinc-200 hover:text-orange-500'>Courses</a>
            <a href="#Facilites" className='m-4 text-zinc-200 hover:text-orange-500'>Facilites</a>
            <a href="#reviews" className='m-4 text-zinc-200 hover:text-orange-500'>Activities</a>
            <a href="#contact" className='m-4 text-zinc-200 hover:text-orange-500'>Contact</a>
        </>


    )
  return (
    <>
    <div className={`max-w screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0`}>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <div>
    <a className="text-2xl font-bold text-slate-100 cursor-pointer;">Hijli <span className='text-orange-500 '>College</span></a>
    </div>
  </div>
  <div className='navbar-end  space-x-3'>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {navItems}
    </ul>
  </div>
  <a className="inline-block text-white px-3 py-2 rounded-md hover:text-orange-500 duration-300 cursor-pointer"
  onClick={()=>document.getElementById("my_modal_3").showModal()}>Student Login</a>
  <Login />

  </div>
</div>
</div>
</>
  )
}

export default Navbar
