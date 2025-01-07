import React from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Drawer/Drawer'
import Footer from '@/components/Footer/Footer'


const layout = ({children,}:Readonly<{
    children:React.ReactNode
}>) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default layout