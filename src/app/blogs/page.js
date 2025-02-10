"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import blogsData from '../../data/blogs.json'

// Categories configuration
const CATEGORIES = {
  'creative': 'Creative & Artistic Hobbies',
  'outdoor': 'Outdoor & Adventure Hobbies',
  'fitness': 'Fitness & Sports Hobbies',
  'tech': 'Tech & Gaming Hobbies',
  'collecting': 'Collecting & Curating Hobbies',
  'diy': 'DIY & Home Improvement Hobbies',
  'social': 'Social & Community-Based Hobbies',
  'food': 'Food & Beverage Hobbies',
  'intellectual': 'Intellectual & Skill-Building Hobbies',
  'travel': 'Travel & Exploration Hobbies',
  'relaxation': 'Relaxation & Mindfulness Hobbies'
}

// Helper function to get preview content
const getPreviewContent = (content) => {
  if (!Array.isArray(content)) {
    return ''
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
  if (imageContent) {
    // Check if the URL is a local path or external URL
    return imageContent.url.startsWith('http') 
      ? imageContent.url 
      : imageContent.url // URLs starting with / will be served from public directory
  }
  
  return null
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [categorizedBlogs, setCategorizedBlogs] = useState({})

  useEffect(() => {
    if (blogsData && blogsData.blogs) {
      setBlogs(blogsData.blogs)
      
      // Categorize blogs
      const categorized = blogsData.blogs.reduce((acc, blog) => {
        if (blog.category) {
          if (!acc[blog.category]) {
            acc[blog.category] = []
          }
          acc[blog.category].push(blog)
        }
        return acc
      }, {})
      setCategorizedBlogs(categorized)
    }
  }, [])

  const filteredBlogs = selectedCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory)

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Category Navigation */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#8B1E3F] text-white'
                  : 'bg-[#8B1E3F]/10 text-[#8B1E3F] hover:bg-[#8B1E3F]/20'
              }`}
            >
              All Categories
            </button>
            {Object.entries(CATEGORIES).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === key
                    ? 'bg-[#8B1E3F] text-white'
                    : 'bg-[#8B1E3F]/10 text-[#8B1E3F] hover:bg-[#8B1E3F]/20'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => {
            const previewImage = getPreviewImage(blog.content)
            
            return (
              <Link 
                href={`/blogs/${blog.id}`} 
                key={blog.id}
                className="block"
              >
                <article className="bg-white h-full p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#8B1E3F]/20">
                  {previewImage && (
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src={previewImage}
                        alt={blog.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  {blog.category && (
                    <span className="inline-block px-3 py-1 mb-2 text-sm font-medium text-[#8B1E3F] bg-[#8B1E3F]/10 rounded-full">
                      {CATEGORIES[blog.category]}
                    </span>
                  )}
                  <h2 className="text-xl font-semibold mb-2 text-[#8B1E3F]">
                    {blog.title}
                  </h2>
                  <div className="flex items-center text-gray-600 mb-4 text-sm">
                    <span className="mr-4">By {blog.author}</span>
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {getPreviewContent(blog.content)}
                  </p>
                  <div className="mt-4">
                    <span className="text-[#8B1E3F] text-sm font-medium hover:underline">
                      Read more →
                    </span>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>

        {/* No Results Message */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No blogs found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
