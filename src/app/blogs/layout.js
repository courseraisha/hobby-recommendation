import { Metadata } from 'next'

export const metadata = {
  title: 'Hobby Blog | Creative Hobbies, DIY Projects & Hobby Guides',
  description: 'Discover creative hobbies, DIY projects, and expert guides to help you find and master your perfect hobby. Get inspired with our hobby blog!',
  keywords: 'hobby blog, creative hobbies, DIY projects, hobby guides, hobby ideas, hobby tutorials, hobby inspiration, hobby tips, hobby crafts, hobby activities',
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