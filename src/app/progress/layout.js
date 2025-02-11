export const metadata = {
    title: "Progress Tracker | Hobby Connectr",
    description:
      "Track your hobby journey, set milestones, and celebrate your achievements. Monitor your progress and level up your skills with our hobby tracking tools.",
    keywords: [
      "hobby tracker",
      "hobby progress",
      "hobby milestones",
      "skill tracking",
      "hobby journey",
      "hobby development",
      "hobby goals",
      "hobby achievements",
      "hobby time tracking",
      "hobby skill levels",
      "hobby management",
      "personal development",
      "hobby organization",
      "hobby planning",
      "hobby motivation",
    ].join(", "),
    openGraph: {
      title: "Track Your Hobby Journey | Hobby Connectr",
      description: "Monitor your progress, set milestones, and celebrate achievements in your hobby journey.",
      url: "https://hobbyconnectr.com/progress",
      siteName: "Hobby Connectr",
      images: [
        {
          url: "https://hobbyconnectr.com/progress-tracker.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
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
  
  