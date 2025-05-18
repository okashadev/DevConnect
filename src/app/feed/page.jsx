import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import LeftSidebar from '@/components/layout/LeftSidebar'
import RightSidebar from '@/components/layout/RightSidebar'

const StoriesSection = () => {
  const stories = [
    { id: 1, avatar: '/images/avatars/avatar-1.jpg', name: 'Alex Morgan' },
    { id: 2, avatar: '/images/avatars/avatar-2.jpg', name: 'John Doe' },
    { id: 3, avatar: '/images/avatars/avatar-3.jpg', name: 'Sarah Smith' },
    { id: 4, avatar: '/images/avatars/avatar-4.jpg', name: 'Mike Ross' },
    { id: 5, avatar: '/images/avatars/avatar-5.jpg', name: 'Emily Chen' },
    { id: 6, avatar: '/images/avatars/avatar-6.jpg', name: 'David Kim' },
  ]

  return (
    <div className="mb-8">
      <div className="flex space-x-4 overflow-x-auto p-4">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full ring-2 ring-blue-500 p-1 cursor-pointer hover:scale-105 transition-transform">
              <Image
                src={story.avatar}
                alt={story.name}
                width={56}
                height={56}
                className="rounded-full"
              />
            </div>
            <span className="text-sm mt-1 text-gray-700">{story.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const CreatePost = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 mb-6">
      <div className="flex items-center space-x-4">
        <Image
          src="/images/avatars/avatar-1.jpg"
          alt="User"
          width={40}
          height={40}
          className="rounded-full"
        />
        <input
          type="text"
          placeholder="Share something with the community..."
          className="flex-1 rounded-full bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-between mt-4 pt-2 border-t">
        <button className="text-gray-600 flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Photo</span>
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Post
        </button>
      </div>
    </div>
  )
}

const Post = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 mb-6">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Image
              src={post.avatar}
              alt={post.author}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold">{post.author}</h3>
              <p className="text-sm text-gray-500">{post.time}</p>
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
        <p className="text-gray-800 mb-4">{post.content}</p>
        {post.image && (
          <Image
            src={post.image}
            alt="Post content"
            width={600}
            height={400}
            className="rounded-lg w-full object-cover"
          />
        )}
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{post.likes} Likes</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{post.comments} Comments</span>
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
    </div>
  )
}

const FeedPage = () => {
  const posts = [
    {
      id: 1,
      author: 'Alex Morgan',
      avatar: '/images/avatars/avatar-1.jpg',
      time: '5h ago',
      content: 'Just shared this Ruby script using @software1234 class. Here&aposs a custom hook I created for dynamic state management.',
      image: '/images/b5.png',
      likes: 24,
      comments: 5,
    },
    {
      id: 2,
      author: 'Sarah Smith',
      avatar: '/images/avatars/avatar-3.jpg',
      time: '8h ago',
      content: 'Working on a new React component library. Would love your feedback!',
      likes: 15,
      comments: 3,
    },
  ]
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-100 pt-16">
        <LeftSidebar />
        <main className="flex-1 ml-64 mr-80">
          <div className="max-w-2xl mx-auto py-8 px-4">
            <StoriesSection />
            <CreatePost />
            <div className="space-y-6">
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </div>
          </div>
        </main>
        <RightSidebar />
      </div>
    </>
  )
}

export default FeedPage