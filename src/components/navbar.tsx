import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BuyMeACoffee from './byMeACoffee'

const Navbar = () => {
    return (
        <div className='fixed top-0 right-0 left-0 py-3 border-b border-gray-300 bg-white/50 backdrop-blur'>
            <div className='container mx-auto flex justify-between'>
                <div className='flex items-center gap-x-2'>
                    <Link href='https://devmubashar.com' target='_blank'><Image src='/logo.png' alt='logo' width={341} height={338} className='h-10 w-auto' /></Link>
                    <Link href='/'><span className='text-2xl font-semibold'>Blogs</span></Link>
                </div>
                <BuyMeACoffee />
            </div>
        </div>
    )
}

export default Navbar
