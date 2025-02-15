export const metadata = {
  title: 'Frequently Asked Questions | Hobby Help Center',
  description: 'Find answers to common questions about hobbies, skill development, and our platform. Get help with hobby selection, progress tracking, and community features.',
  keywords: [
    'hobby FAQ',
    'hobby questions',
    'hobby help',
    'hobby support',
    'hobby guidance',
    'hobby platform help',
    'hobby answers',
    'hobby information',
    'hobby assistance',
    'hobby resources'
  ].join(', '),
  openGraph: {
    title: 'Hobby Connectr FAQ - Get Help & Support',
    description: 'Find answers to all your hobby-related questions',
    images: [{ url: 'https://hobbyconnectr.com/faq-preview.jpg' }]
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