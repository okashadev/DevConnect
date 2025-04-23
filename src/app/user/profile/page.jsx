'use client'
import Footer from '@/components/partials/Footer'
import MainNavigationBar from '@/components/partials/MainNavBar'
import Profile from '@/components/users/profile'
import React from 'react'

const Page = () => {
  return (
    <>
      <MainNavigationBar />
      <Profile />
      <Footer />
    </>
  )
}

export default Page