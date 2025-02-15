export const metadata = {
    title: 'Hobby Progress Tracker | Track Your Journey',
    description: 'Track your hobby development, set milestones, and celebrate achievements. Monitor your progress, log activities, and stay motivated on your hobby journey.',
    keywords: [
      'hobby tracking',
      'hobby progress',
      'hobby milestones',
      'hobby achievements',
      'hobby goals',
      'hobby development',
      'hobby journal',
      'hobby logging',
      'skill tracking',
      'hobby improvement'
    ].join(', '),
    openGraph: {
      title: 'Track Your Hobby Progress',
      description: 'Monitor your hobby development and celebrate achievements',
      images: [{ url: 'https://hobbyconnectr.com/progress-preview.jpg' }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Hobby Progress Tracker",
      description: "Track and celebrate your hobby achievements",
      images: ["https://hobbyconnectr.com/progress-tracker.jpg"],
    },
    alternates: {
      canonical: "https://hobbyconnectr.com/progress",
    },
  }
  
  export default function ProgressLayout({ children }) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#8B1E3F]/5 via-white to-[#E3425F]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-transparent bg-clip-text mb-4">
              Progress Tracker
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Track your hobby journey, set milestones, and celebrate your achievements
            </p>
            <div className="mt-6 flex justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full shadow-sm">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                <span>Completed Milestones</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full shadow-sm">
                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                <span>Pending Goals</span>
              </div>
            </div>
          </header>
          {children}
        </div>
      </div>
    )
  }
  
  