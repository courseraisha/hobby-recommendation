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
  // First look for text content
  const textContent = content.find(item => item.type === 'text')
  if (textContent) return textContent.value
  
  // If no text content, look for markdown content
  const markdownContent = content.find(item => item.type === 'markdown')
  if (markdownContent) {
    // Remove markdown formatting for preview
    return markdownContent.value.replace(/[*#_\[\]]/g, '').slice(0, 200) + '...'
  }
  
  return ''
}

// Helper function to get preview image
const getPreviewImage = (content) => {
  if (!Array.isArray(content)) {
    return null
  }
  // First look for image content
  const imageContent = content.find(item => item.type === 'image')
  if (imageContent) return imageContent.url
  
  // If no image, look for youtube content
  const youtubeContent = content.find(item => item.type === 'youtube')
  if (youtubeContent) {
    return `https://img.youtube.com/vi/${youtubeContent.videoId}/hqdefault.jpg`
  }
  
  return null
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    // Flatten the blogs array if needed
    const allBlogs = Array.isArray(blogsData.blogs) 
      ? blogsData.blogs.flat().filter(blog => blog && blog.id)
      : []
    setBlogs(allBlogs)
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
