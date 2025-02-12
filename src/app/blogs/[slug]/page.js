"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import blogsData from '../../../data/blogs.json'
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

export default function BlogPost() {
  const params = useParams()
  const [blog, setBlog] = useState(null)

  // Convert title to URL-friendly slug for comparison
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  useEffect(() => {
    const blogPost = blogsData.blogs.find(b => createSlug(b.title) === params.slug)
    setBlog(blogPost)
  }, [params.slug])

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#8B1E3F] text-xl">Loading...</div>
      </div>
    )
  }

  // ... rest of the component remains the same ...
} 