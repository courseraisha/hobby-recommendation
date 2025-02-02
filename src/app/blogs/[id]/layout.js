import blogsData from '../../../data/blogs.json'

export async function generateMetadata({ params }) {
  const blog = blogsData.blogs.find(b => b.id === params.id)
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  // Get the first text content for description
  const description = blog.content.find(c => c.type === 'text')?.value || blog.title

  return {
    title: `${blog.title} | Hobby Connectr Blog`,
    description: description.slice(0, 160) + '...',
    keywords: `hobby blog, ${blog.title.toLowerCase()}, hobby guides, hobby ideas, hobby tutorials, hobby inspiration, hobby tips`,
    openGraph: {
      title: blog.title,
      description: description.slice(0, 160) + '...',
      url: `https://hobbyconnectr.com/blogs/${params.id}`,
      siteName: 'Hobby Connectr',
      images: [
        {
          url: blog.content.find(c => c.type === 'image')?.url || 'https://hobbyconnectr.com/og-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'article',
      article: {
        publishedTime: blog.date,
        authors: [blog.author],
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: description.slice(0, 160) + '...',
      images: [blog.content.find(c => c.type === 'image')?.url || 'https://hobbyconnectr.com/twitter-image.jpg'],
    },
    alternates: {
      canonical: `https://hobbyconnectr.com/blogs/${params.id}`
    }
  }
}

export default function BlogPostLayout({ children }) {
  return children
} 