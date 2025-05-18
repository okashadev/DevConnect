import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar: FC = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/feed" className="flex items-center space-x-3">
            <Image
              src="/images/logo/mainLogo.png"
              alt="DevConnect"
              width={130}
              height={140}
              className="rounded"
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-100 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-2.5">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <Link href="/user/profile" className="flex items-center space-x-2">
              <Image
                src="/images/avatars/avatar-1.jpg"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-medium">Alex Morgan</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
