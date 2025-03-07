import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
   <section>

<header className="body-font fixed  left-0 right-0 bg-blue-500 p-4 z-10 text-white my-0">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap   ="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24 " >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Pandu</span>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href='Hero' className="mr-5 hover:text-gray-900">About</Link>
      <Link href='Education' className="mr-5 hover:text-gray-900">Education</Link>
      <Link href='Projects' className="mr-5 hover:text-gray-900">Projects</Link>
      <Link href='Skills'className="mr-5 hover:text-gray-900">Skills</Link>
     
      <Link href='Contact' className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
    <Link href="/Contact" className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 text-black rounded text-base mt-4 md:mt-0">
  Get In Touch
  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
</Link>

  </div>
</header>

   </section>
  )
}

export default Navbar