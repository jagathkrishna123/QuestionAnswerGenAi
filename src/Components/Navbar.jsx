// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// // import { PiPhoneCall } from "react-icons/pi";
// import { IoSearchOutline } from "react-icons/io5";
// // import { CiBookmark } from "react-icons/ci";

// import Scannteklogo from "../assets/scanntek.png"
// import { BiSearch } from 'react-icons/bi';


// const Navbar = () => {
//     const navLinks = [
//         { name: 'Home', path: '/' },
//         { name: 'Services', path: '/services' },
//         { name: 'Solutions', path: '/solution' },
//         { name: 'About', path: '/' },
//         { name: 'Careers', path: '/' },
//     ];

//       // List of paths that need special navbar background
//   const specialPaths = ["/solution", "/services", "/"];
//   const isSpecialPage = specialPaths.includes(location.pathname);

//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [search, setSearch] = useState('')

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (

//                 <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 font-mont
//       ${isSpecialPage 
//         ? "bg-cyan-700 text-white py-4 sm:py-2 md:py-1"           // special page background
//         : isScrolled 
//           ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-2"  // scrolled
//           : "bg-black/0 text-white py-4 md:py-6"          // default
//       }`}
//     >
//                 {/* Logo */}
//                 <Link>
//                     <div>
//                         <img src={Scannteklogo} alt="logo" className={` outline-none w-[100px] md:w-[190px] border-none ${isScrolled && "invert opacity-80"}`} />
//                     </div>
//                 </Link>

//                 {/* Desktop Nav */}
//                 <div className="hidden md:flex items-center gap-4 lg:gap-8">
//                     {navLinks.map((link, i) => (
//                         <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
//                             {link.name}
//                             <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
//                         </a>
//                     ))}
//                     {/* <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
//                         New Launch
//                     </button> */}
//                 </div>

//                 {/* Desktop Right */}
//                 <div className="hidden md:flex items-center gap-6">
                    
//                     <form className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-100 px-4 py-3 rounded-full">
//                             <BiSearch size={18} className="text-slate-600"/>
//                             <input className="w-full bg-transparent outline-none placeholder-slate-600 text-gray-700" type="text" placeholder="Search Events" value={search} onChange={(e) => setSearch(e.target.value)} required />
//                         </form>
//                         <button className={`px-8 py-2.5 rounded-lg ml-4 transition-all duration-500 cursor-pointer font-mont ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
//                         Login
//                     </button>
//                     {/* <PiPhoneCall size={28} color="white" className={`${isScrolled && 'invert'} h-7 transition-all duration-500`}/> */}
//                     {/* <IoSearchOutline size={28} color="white" className={`${isScrolled && 'invert'} h-7 transition-all duration-500`}/> */}
//                     {/* <CiBookmark size={28} color="white" className={`${isScrolled && 'invert'} h-7 transition-all duration-500`}/> */}
//                     {/* <FaGripLines size={28} color="white" className={`${isScrolled && 'invert'} h-7 transition-all duration-500`}/> */}
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <div className="flex items-center gap-3 md:hidden invert">
//                     <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                         <line x1="4" y1="6" x2="20" y2="6" />
//                         <line x1="4" y1="12" x2="20" y2="12" />
//                         <line x1="4" y1="18" x2="20" y2="18" />
//                     </svg>
//                 </div>

//                 {/* Mobile Menu */}
//                 <div className={`fixed top-0 left-0 w-md h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
//                     <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
//                         <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                             <line x1="18" y1="6" x2="6" y2="18" />
//                             <line x1="6" y1="6" x2="18" y2="18" />
//                         </svg>
//                     </button>

//                     {navLinks.map((link, i) => (
//                         <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
//                             {link.name}
//                         </a>
//                     ))}

//                     {/* <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
//                         New Launch
//                     </button> */}

//                     <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
//                         Contactxx
//                     </button>
//                 </div>
//             </nav>
        
//     );
// }
// export default Navbar

import React from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'


const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const {user, setUser, setShowUserLogin, navigate} = useAppContext()

    const logout = async () => {
        setUser(null);
        Navigate('/')
    }
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-gray-300 bg-white relative transition-all">

            <NavLink to='/' onClick={() => setOpen(false)}>
  <p className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-3xl font-bold">
    NoteGen AI
  </p>
</NavLink>


            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8 text-blue-900">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>About</NavLink>
                <NavLink to='/'>About</NavLink>
                <NavLink to='/'>Contact us</NavLink>
                {user && 
                    <NavLink to='/'>My files</NavLink>
                }

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img src={assets.search_icon} alt="" />
                </div>

                <div className="relative cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">3</button>
                </div>

                {!user ? (
                    <button onClick={()=> 
                        setShowUserLogin(true)
                    } className="cursor-pointer px-8 py-2 bg-indigo-400 hover:bg-indigo-600 transition text-white rounded-full">
                    Login
                </button>
                ) : (
                    <div className='relative group'>
                        <img src={assets.profile_icon} alt="" className='w-10' />
                        <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-400 py-2.5 w-30 rounded-md text-sm'>
                            <li onClick={()=> navigate("")} className='p-1.5 pl-3 hover:bg-blue-400 cursor-pointer'>My Orders</li>
                            <li onClick={logout} className='p-1.5 pl-3 hover:bg-blue-400 cursor-pointer'>Logout</li>
                        </ul>
                    </div>
                )}
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <img src={assets.menu_icon} alt="" />
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <NavLink to='/' onClick={()=> setOpen(false)}>Home</NavLink>
                <NavLink to='/' onClick={()=> setOpen(false)}>About</NavLink>
                <NavLink to='/' onClick={()=> setOpen(false)}>Contact</NavLink>
                {user && 
                    <NavLink to='/' onClick={()=> setOpen(false)}>My files</NavLink>
                }
                {!user ? (
                    <button onClick={()=> {setOpen(false); setShowUserLogin(true);}} className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                    Login
                </button>
                ) : (
                    <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                    Logout
                </button>
                )}
            </div>

        </nav>
  )
}

export default Navbar