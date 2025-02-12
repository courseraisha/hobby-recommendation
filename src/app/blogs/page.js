"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import blogsData from '../../data/blogs.json'
import { Search, Clock, User } from 'lucide-react'

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
  const [searchTerm, setSearchTerm] = useState('')

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

  // Convert title to URL-friendly slug
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  const filteredBlogsBySearch = filteredBlogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#8B1E3F] focus:border-transparent outline-none"
          />
        </div>

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
          {filteredBlogsBySearch.map((blog) => {
            const slug = createSlug(blog.title)
            const previewImage = getPreviewImage(blog.content)
            
            return (
              <Link 
                href={`/blogs/${slug}`} 
                key={blog.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={previewImage || '/placeholder.jpg'}
                    alt={blog.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-[#8B1E3F] mb-2 group-hover:text-[#E3425F] transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* No Results Message */}
        {filteredBlogsBySearch.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No blogs found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
