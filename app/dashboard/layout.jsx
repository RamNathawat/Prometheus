import { UserButton } from '@clerk/nextjs'
import React from 'react'
import SideBar from './_component/sideBar'
import Header from './_component/header'

function DashboardLayout({children}) {
  return (
    <div>
        <div className='md:w-64 hidden md:block'>
            <SideBar/>
        </div>
        <div className='md:ml-64 shadow-md '>
            <Header/>
            <div className='p-10'>
            {children}
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout