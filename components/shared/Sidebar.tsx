import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className='sidebar'> 
      <div className='flex size-full flex-col gap-4'>
        <Link href='/' className='sidebar-logo'>
          <div className='flex items-center ml-3'>
            <Image src="/assets/images/logo-icon.svg" alt="" width={40} height={40}/>
            <p className='ml-2 mt-1 font-bold text-3xl text-blue-500'>PixelPro</p>
          </div>
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
