"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import blogsData from '../../../data/blogs.json'
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

// Content type components
const TextContent = ({ value }) => (
  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">{value}</p>
)

const ImageContent = ({ url, alt }) => (
  <div className="my-4 sm:my-6">
    <img
      src={url}
      alt={alt}
      className="rounded-lg w-full"
    />
  </div>
)

const YoutubeContent = ({ videoId, title }) => (
  <div className="my-4 sm:my-6 aspect-video">
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-lg"
    />
  </div>
)

const MarkdownContent = ({ value }) => (
  <div className="prose prose-lg max-w-none prose-headings:text-[#8B1E3F] prose-a:text-[#E3425F] mb-6">
    <ReactMarkdown>{value}</ReactMarkdown>
  </div>
)

// Content renderer component
const ContentRenderer = ({ content }) => {
  switch (content.type) {
    case 'text':
      return <TextContent value={content.value} />
    case 'image':
      return <ImageContent url={content.url} alt={content.alt} />
    case 'youtube':
      return <YoutubeContent videoId={content.videoId} title={content.title} />
    case 'markdown':
      return <MarkdownContent value={content.value} />
    default:
      return null
  }
}

export default function BlogPost() {
  const params = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    const foundBlog = blogsData.blogs.find(b => b.id === params.id)
    setBlog(foundBlog)
  }, [params.id])

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#8B1E3F] text-lg sm:text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8B1E3F]/5 to-white p-4 sm:p-6">
      <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-4 sm:p-8">
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-[#8B1E3F] hover:underline mb-4 sm:mb-6 text-sm sm:text-base"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blogs
        </Link>

        <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-[#8B1E3F]">
          {blog.title}
        </h1>

        <div className="flex items-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
          <span className="mr-4">By {blog.author}</span>
          <span>{new Date(blog.date).toLocaleDateString()}</span>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {blog.content.map((content, index) => (
            <ContentRenderer key={index} content={content} />
          ))}
        </div>
      </article>
    </div>
  )
} 