export const metadata = {
  title: 'Hobby Matching Quiz | Find Your Perfect Hobby',
  description: 'Take our interactive hobby matching quiz to discover hobbies tailored to your personality, interests, and lifestyle. Get personalized recommendations in just 10 questions.',
  keywords: [
    'hobby quiz',
    'hobby test',
    'hobby finder',
    'hobby matcher',
    'hobby recommendations',
    'personality quiz',
    'interest matching',
    'hobby discovery',
    'hobby suggestions',
    'find new hobbies'
  ].join(', '),
  openGraph: {
    title: 'Find Your Perfect Hobby - Take the Quiz',
    description: 'Discover hobbies that match your personality in just 10 questions',
    images: [{ url: 'https://hobbyconnectr.com/quiz-preview.jpg' }]
  }
}

export default function QuizLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8B1E3F]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}