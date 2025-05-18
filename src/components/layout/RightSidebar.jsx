import React from 'react'
import Image from 'next/image'

const RightSidebar = () => {
  const suggestions = [
    {
      name: 'Emily Chen',
      role: 'Frontend Developer',
      avatar: '/images/avatars/avatar-5.jpg',
    },
    {
      name: 'David Kim',
      role: 'UX Designer',
      avatar: '/images/avatars/avatar-6.jpg',
    },
    {
      name: 'Sarah Smith',
      role: 'Full Stack Developer',
      avatar: '/images/avatars/avatar-3.jpg',
    },
  ]

  const trending = [
    {
      tag: '#ReactJS',
      posts: '2.5k posts',
    },
    {
      tag: '#WebDev',
      posts: '1.8k posts',
    },
    {
      tag: '#JavaScript',
      posts: '3.2k posts',
    },
    {
      tag: '#UIDesign',
      posts: '1.2k posts',
    },
  ]

  return (
    <div className="w-80 h-screen bg-white shadow-lg fixed right-0 top-16 p-4 overflow-y-auto">
      <div className="space-y-6">
        {/* People You May Know */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 mb-4">PEOPLE YOU MAY KNOW</h3>
          <div className="space-y-4">
            {suggestions.map((person) => (
              <div
                key={person.name}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src={person.avatar}
                    alt={person.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="text-sm font-medium">{person.name}</h4>
                    <p className="text-xs text-gray-500">{person.role}</p>
                  </div>
                </div>
                <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 mb-4">TRENDING TOPICS</h3>
          <div className="space-y-3">
            {trending.map((topic) => (
              <div
                key={topic.tag}
                className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <h4 className="text-sm font-medium text-blue-500">{topic.tag}</h4>
                <p className="text-xs text-gray-500">{topic.posts}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
