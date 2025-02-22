export const metadata = {
  title: 'About HobbyConnectr | Our Story & Mission',
  description: "Learn about HobbyConnectr's mission to help people discover their perfect hobbies. Meet our team and understand how we're making hobby discovery fun and personal.",
  keywords: [
    'about hobbyconnectr',
    'hobby discovery platform',
    'hobby matching service',
    'hobby finding team',
    'hobby experts',
    'hobby guidance',
    'hobby community',
    'hobby mission',
    'hobby passion',
    'hobby journey'
  ].join(', '),
  openGraph: {
    title: 'About HobbyConnectr - Our Story & Mission',
    description: 'Discover the team and mission behind HobbyConnectr',
    images: [{ url: 'https://hobbyconnectr.com/about-preview.jpg' }]
  }
}

export default function AboutLayout({ children }) {
  return children
} 