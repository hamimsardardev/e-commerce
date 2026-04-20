import Navbar from '@/components/layouts/navbar/Navbar'
import React from 'react'

export default function layout  ({children}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

