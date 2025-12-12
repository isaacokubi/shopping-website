import React from 'react'
import { BiUser } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
        <div className="container sm:flex justify-between items-center">
            <div className="font-bold text-2xl text-center pb-4 sm:pb-0 text-pink-500">RUTH & BARACK BOUTIQUE</div>
            <div className="w-full sm:w-[300px] md:w-[70%]  relative">
                <input className="border-gray-200 border p-2 px-4 w-full rounded-lg" type="text"  placeholder='Enter any product name...'/>
                <BsSearch  className="absolute right-0 top-0 mr-3 mt-3 text-gray-400  size={20 }"/>
            </div>
            <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
                <BiUser/>
            </div>
        </div>
    </div>
  )
}

export default HeaderMain