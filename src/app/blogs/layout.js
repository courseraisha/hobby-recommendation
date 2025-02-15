import { Metadata } from 'next'

export const metadata = {
  title: 'Hobby Blog | Expert Guides & Community Stories',
  description: 'Explore in-depth hobby guides, expert tips, success stories, and community insights. Learn from experienced hobbyists, discover new techniques, and get inspired.',
  keywords: [
    'hobby blog',
    'hobby guides',
    'hobby tips',
    'hobby tutorials',
    'hobby stories',
    'hobby community',
    'hobby inspiration',
    'hobby techniques',
    'hobby advice',
    'hobby experiences'
  ].join(', '),
  openGraph: {
    title: 'Hobby Connectr Blog - Expert Guides & Stories',
    description: 'Discover hobby guides, tips, and community stories',
    images: [{ url: 'https://hobbyconnectr.com/blog-preview.jpg' }]
  }
}

export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8B1E3F]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8B1E3F] mb-4">
            Hobby Connectr Blog
          </h1>
          <p className="text-lg text-gray-600">
            Discover creative hobbies, expert guides, and inspiration for your next passion project
          </p>
         </header>
        {children}
      </div>
    </div>
  )
} 