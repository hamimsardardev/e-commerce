import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Link href="/">
        <img src="images/logo.png" alt="logo.png" />
        </Link>
    </div>
  )
}

export default Logo