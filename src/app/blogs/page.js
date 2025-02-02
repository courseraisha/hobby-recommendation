"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import blogsData from '../../data/blogs.json'
import Image from 'next/image'

// Helper function to get preview content
const getPreviewContent = (content) => {
  if (!Array.isArray(content)) {
    return content
  }
  const textContent = content.find(item => item.type === 'text')
  return textContent ? textContent.value : ''
}

// Helper function to get preview image
const getPreviewImage = (content) => {
  if (!Array.isArray(content)) {
    return null
  }
  const imageContent = content.find(item => 
    item.type === 'image' || (item.type === 'youtube' && item.videoId)
  )
  
  if (imageContent?.type === 'youtube') {
    return `https://img.youtube.com/vi/${imageContent.videoId}/hqdefault.jpg`
  }
  return imageContent?.url || null
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    setBlogs(blogsData.blogs)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8B1E3F]/5 to-white p-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="grid gap-6">
          {blogs.map((blog) => {
            const previewImage = getPreviewImage(blog.content)
            
            return (
              <Link 
                href={`/blogs/${blog.id}`} 
                key={blog.id}
                className="block"
              >
                <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#8B1E3F]/20">
                  {previewImage && (
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src={previewImage}
                        alt={blog.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <h2 className="text-2xl font-semibold mb-2 text-[#8B1E3F]">
                    {blog.title}
                  </h2>
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="mr-4">By {blog.author}</span>
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-600 line-clamp-3">
                    {getPreviewContent(blog.content)}
                  </p>
                  <div className="mt-4">
                    <span className="text-[#8B1E3F] font-medium hover:underline">
                      Read more →
                    </span>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
