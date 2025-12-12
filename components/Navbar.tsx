import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="hidden lg:block">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4  text-pink-600">
        <Link className="Navbar__link relative" href="#">MEN</Link>
        <Link className="Navbar__link relative" href="#">WOMEN</Link>
        <Link className="Navbar__link relative" href="#">CHILDREN</Link>
        <Link className="Navbar__link relative" href="#">JEWELERY</Link>
        <Link className="Navbar__link relative" href="#">SHOES</Link>
        <Link className="Navbar__link relative" href="#">BAGS</Link>
        <Link className="Navbar__link relative" href="#">BLOG</Link>
        <Link className="Navbar__link relative" href="#">HOT OFFERS</Link>
        </div>
    </div>
  )
}

export default Navbar