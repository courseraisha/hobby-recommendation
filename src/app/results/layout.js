export const metadata = {
  title: 'Your Hobby Matches | Personalized Recommendations',
  description: 'View your personalized hobby recommendations based on your quiz results. Explore detailed guides, tutorials, and resources to get started with your new hobbies.',
  keywords: [
    'hobby matches',
    'hobby recommendations',
    'personalized hobbies',
    'hobby results',
    'hobby guides',
    'hobby tutorials',
    'hobby resources',
    'hobby learning',
    'hobby starter guide',
    'hobby community'
  ].join(', '),
  openGraph: {
    title: 'Your Perfect Hobby Matches',
    description: 'Discover hobbies perfectly matched to your interests and personality',
    images: [{ url: 'https://hobbyconnectr.com/results-preview.jpg' }]
  }
}

export default function ResultsLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8B1E3F]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
} 