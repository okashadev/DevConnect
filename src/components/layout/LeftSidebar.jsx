import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LeftSidebar = () => {
  const menuItems = [
    { icon: '🏠', label: 'Home', href: '/feed' },
    { icon: '👤', label: 'Profile', href: '/user/profile' },
    { icon: '💬', label: 'Messages', href: '/messages' },
    { icon: '🔔', label: 'Notifications', href: '/notifications' },
    { icon: '⚙️', label: 'Settings', href: '/settings' },
  ]

  const communities = [
    { name: 'JavaScript Developers', members: '15K members' },
    { name: 'React Enthusiasts', members: '8K members' },
    { name: 'UI/UX Design', members: '12K members' },
    { name: 'Web Development', members: '20K members' },
  ]

  return (
    <div className="w-64 h-screen bg-white shadow-lg fixed left-0 top-16 p-4 overflow-y-auto">
      <div className="space-y-6">
        {/* Navigation Menu */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 mb-4">MENU</h3>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-blue-600"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Communities Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 mb-4">YOUR COMMUNITIES</h3>
          <div className="space-y-3">
            {communities.map((community) => (
              <div
                key={community.name}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-lg">👥</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium">{community.name}</h4>
                  <p className="text-xs text-gray-500">{community.members}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar
