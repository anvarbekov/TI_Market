import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
// react icon
import { HiBars3CenterLeft } from "react-icons/hi2";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <div>
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <HiBars3CenterLeft className='text-2xl font-bold' />
            </label>
            <Link href="/" className="btn btn-ghost sm:text-lg text-sm">
              TI Market
            </Link>
          </div>

          <Menu />
        </div>
      </nav>
    </header>
  )
}

export default Header
