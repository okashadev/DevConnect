'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import LeftSidebar from '@/components/layout/LeftSidebar'
import RightSidebar from '@/components/layout/RightSidebar'

const ProfileStats = ({ stats }) => {
  return (
    <div className="flex space-x-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-base font-semibold">{stat.value}</div>
          <div className="text-xs text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

const ProfilePost = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-3">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/avatars/avatar-1.jpg"
            alt="Alex Johnson"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div>
            <h3 className="text-sm font-medium">Alex Johnson</h3>
            <p className="text-xs text-gray-500">{post.time}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
      <p className="text-gray-800 mb-4">{post.content}</p>      {post.image && (
        <div className="mb-3">
          <Image
            src={post.image}
            alt="Post content"
            width={600}
            height={300}
            className="rounded-md w-full object-cover max-h-[300px]"
          />
        </div>
      )}
      {post.code && (
        <div className="bg-gray-900 text-gray-100 rounded-md p-3 font-mono text-xs mb-3 overflow-x-auto">
          <pre>{post.code}</pre>
        </div>
      )}      <div className="flex items-center justify-between pt-3 border-t">
        <div className="flex space-x-3">
          <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-sm">{post.likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-sm">{post.comments}</span>
          </button>
        </div>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <span>Share</span>
        </button>
      </div>
    </div>
  )
}

const ProfilePage = () => {
  const userStats = [
    { label: 'Posts', value: '523' },
    { label: 'Followers', value: '1.2k' },
    { label: 'Following', value: '348' },
  ]

  const posts = [
    {
      id: 1,
      time: '2 hours ago',
      content: 'Working on a cool algorithm problem. Here\'s the solution:',
      code: 'def maxProfit(self, prices):\n    if not prices: return 0\n    maxProfit = 0\n    minPrice = prices[0]\n    for price in prices[1:]:\n        maxProfit = max(maxProfit, price - minPrice)\n        minPrice = min(minPrice, price)\n    return maxProfit',
      likes: 24,
      comments: 5,
    },
    {
      id: 2,
      time: '5 hours ago',
      content: 'Just launched my AWS Cloud Practitioner certification! 🎉',
      image: '/images/b5.png',
      likes: 42,
      comments: 8,
    },
    {
      id: 3,
      time: '1 day ago',
      content: 'Check out this data visualization I created using D3.js! Would love your feedback.',
      image: '/images/b5.png',
      likes: 31,
      comments: 12,
    }
  ]

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-50 pt-16">
        <LeftSidebar />
        <main className="flex-1 ml-64 mr-80">
          <div className="max-w-2xl mx-auto px-4 py-8">
            {/* Profile Header */}            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <div className="flex items-start space-x-4">
                <Image
                  src="/images/avatars/avatar-1.jpg"
                  alt="Alex Johnson"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h1 className="text-xl font-bold">Alex Johnson</h1>
                    <Link
                      href="/user/edit"
                      className="text-sm px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Edit Profile
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Full-stack developer passionate about React. Node.js and building efficient solutions.
                  </p>
                  <ProfileStats stats={userStats} />
                </div>
              </div>
            </div>

            {/* Profile Posts */}
            <div className="space-y-6">
              {posts.map((post) => (
                <ProfilePost key={post.id} post={post} />
              ))}
            </div>
          </div>
        </main>
        <RightSidebar />
      </div>
    </>
  )
}

export default ProfilePage