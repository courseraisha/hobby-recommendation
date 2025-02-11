export const metadata = {
  title: 'FAQ | Hobby Connectr - Your Questions Answered',
  description: 'Find answers to common questions about hobbies, career development through hobbies, and getting started with new activities. Get expert advice on hobby selection and development.',
  keywords: [
    'hobby FAQ',
    'hobby questions',
    'hobby career advice',
    'hobby selection help',
    'hobby for resume',
    'hobby for interview',
    'hobby stress relief',
    'hobby guide',
    'hobby recommendations',
    'hobby tips',
    'hobby for beginners',
    'hobby investment',
    'hobby time management',
    'hobby career transition',
    'hobby skills development'
  ].join(', '),
  openGraph: {
    title: 'Hobby Connectr FAQ - Your Questions Answered',
    description: 'Get expert answers about hobbies, career development, and starting new activities.',
    url: 'https://hobbyconnectr.com/faq',
    siteName: 'Hobby Connectr',
    images: [
      {
        url: 'https://hobbyconnectr.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hobby Connectr FAQ',
    description: 'Find answers to all your hobby-related questions',
    images: ['https://hobbyconnectr.com/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://hobbyconnectr.com/faq'
  }
}

export default function FAQLayout({ children }) {
  return children
} 