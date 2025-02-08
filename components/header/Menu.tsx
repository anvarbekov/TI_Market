'use client'
import useCartService from '@/lib/hooks/useCartStore'
import useLayoutService from '@/lib/hooks/useLayout'
import { signIn, signOut, useSession } from 'next-auth/react'
// react cart icon
import { GiShoppingCart } from "react-icons/gi";

import Link from 'next/link'
import { useEffect, useState } from 'react'
// react icon
import { FaRegUserCircle } from 'react-icons/fa';


const Menu = () => {
  const { items, init } = useCartService()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const signoutHandler = () => {
    signOut({ callbackUrl: '/signin' })
    init()
  }

  const { data: session } = useSession()

  const { theme, toggleTheme } = useLayoutService()

  const handleClick = () => {
    ;(document.activeElement as HTMLElement).blur()
  }


  return (
    <>
      <div>
        <ul className="flex items-center">
          <div className='hidden md:block'>
            <Link className='btn btn-ghost mx-2' href={"/contact"}><p>Aloqa</p></Link>
            <Link className='btn btn-ghost mx-2' href={"/handbook"}><p>Yo'riqnoma</p></Link>
          </div>
          <i>
            {mounted && (
// new version theme controller
    <label className="grid cursor-pointer place-items-center btn btn-ghost">
      <input
        type="checkbox"
                      checked={theme === 'bumblebee'}
                      onChange={toggleTheme}
        className="toggle theme-controller bg-base-content rounded-full col-span-2 col-start-1 row-start-1" />
      <svg
        className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <path
          d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <svg
        className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
// new version theme controller

            )}
          </i>
          <li>
            <Link className="btn btn-ghost rounded-btn" href="/cart">
              <GiShoppingCart className='text-2xl' />
              {mounted && items.length != 0 && (
                <div className="badge rounded-full badge-secondary">
                  {items.reduce((a, c) => a + c.qty, 0)}{' '}
                </div>
              )}
            </Link>
          </li>
{session && session.user ? (
  <>
    <li>
      <div className="dropdown dropdown-bottom dropdown-end">
        <label tabIndex={0} className="btn btn-ghost rounded-btn">
          {/* Kichik ekranda bosh harfni, katta ekranda ismni ko'rsatish */}
          <p className="hidden sm:block">{session.user.name}</p>
          <p className="block sm:hidden">{session.user.name?.charAt(0)}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[5] p-2 shadow bg-base-300 rounded-box w-52 "
        >
          {session.user.isAdmin && (
            <li onClick={handleClick}>
              <Link href="/admin/dashboard">Boshqaruv paneli</Link>
            </li>
          )}

          <li onClick={handleClick}>
            <Link href="/order-history">Buyurtma tarixi</Link>
          </li>
          <li onClick={handleClick}>
            <Link href="/profile">Profil</Link>
          </li>
          <li onClick={handleClick}>
            <button type="button" onClick={signoutHandler}>
              Chiqish
            </button>
          </li>
        </ul>
      </div>
    </li>
  </>
) : (
  <li>
    <button
      className="btn btn-ghost rounded-btn"
      type="button"
      onClick={() => signIn()}
    >
      <FaRegUserCircle className='text-2xl' />
    </button>
  </li>
)}

        </ul>
      </div>
    </>
  )
}

export default Menu
