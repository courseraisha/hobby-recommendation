// layout.js
import "./globals.css"
import Link from "next/link"
import { Sparkles, Coffee, Instagram, Twitter } from "lucide-react"
import Head from "next/head"
  import Script from "next/script"
  import { NavigationMenu } from "../components/ui/NavigationMenu"

const coffeeStyles = `
@keyframes steam {
  0% {
    transform: translateY(0) translateX(-50%) scale(0.5);
    opacity: 0;
  }
  50% {
    transform: translateY(-10px) translateX(-50%) scale(1);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-20px) translateX(-50%) scale(1.5);
    opacity: 0;
  }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

.coffee-btn {
  position: relative;
  overflow: hidden;
}

.coffee-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: 0.5s;
}

.coffee-btn:hover::before {
  left: 100%;
}

.steam {
  position: absolute;
  top: -10px;
  left: 15px;
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  animation: steam 1s infinite ease-out;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.coffee-btn:hover .steam {
  opacity: 0.7;
}

.coffee-btn:hover .coffee-icon {
  animation: bounce 1s infinite;
}
`

export const metadata = {
  image: "logo.png",
  title: {
    default: 'Hobby Connectr | Find Your Perfect Hobby',
    template: '%s | Hobby Connectr'
  },
  description: 'Discover your perfect hobby with Hobby Connectr. Take our personalized quiz, explore curated hobby guides, track your progress, and connect with a community of passionate hobbyists.',
  keywords: [
    'hobby finder',
    'hobby matching',
    'hobby quiz',
    'hobby recommendations',
    'hobby guides',
    'hobby tracking',
    'hobby community',
    'learn new hobbies',
    'hobby progress',
    'hobby tutorials'
  ].join(', '),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hobbyconnectr.com',
    siteName: 'Hobby Connectr',
    images: [
      {
        url: 'https://hobbyconnectr.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hobby Connectr - Find Your Perfect Hobby'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hobby Connectr | Find Your Perfect Hobby',
    description: 'Discover your perfect hobby with personalized recommendations and expert guidance.',
    images: ['https://hobbyconnectr.com/twitter-card.jpg']
  }
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className="min-h-full">
        <Head>
          <link rel="icon" href="logo.png" />
          <title>Hobby Connectr</title>
          <meta name="Hobby Connectr" content="Discover your ideal hobby through our personalized quiz and recommendations. Explore new interests, turn hobbies into side hustles, and find fulfilling activities." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>{coffeeStyles}</style>
        </Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-22VDXGND8P" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-22VDXGND8P');
          `}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1796071074362408"
          crossorigin="anonymous"
        ></Script>

        <body className="flex min-h-screen flex-col">
          <header className="border-b bg-white/50 backdrop-blur-sm dark:bg-gray-950/50 sticky top-0 z-50">
            <div className="flex h-16 items-center justify-between px-4">
              <Link href="/" className="font-bold text-[#8B1E3F] text-lg sm:text-xl flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span>Hobby Connectr</span>
              </Link>
              <NavigationMenu />
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t bg-white/50 backdrop-blur-sm dark:bg-gray-950/50">
            <div className="container px-4 py-6 space-y-6 md:space-y-0">
              {/* Copyright */}
              <div className="text-center md:text-left text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Hobby Recommendations. All rights reserved.</p>
              </div>

              {/* Social Links and Credits */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-4">
                  <Link
                    href="https://www.instagram.com/hobbyconnectr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8B1E3F] hover:text-[#E3425F] transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://x.com/HobbyConnectr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8B1E3F] hover:text-[#E3425F] transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>

                <span className="hidden md:block text-gray-300">|</span>

                <p className="flex items-center gap-1">
                  Made with <span className="animate-pulse text-red-500">❤️</span> by{" "}
                  <Link 
                    href="https://www.linkedin.com/in/isha-singla16/" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-large text-[#8B1E3F] underline"
                  >
                    Isha
                  </Link>
                </p>
              </div>

              {/* Buy Me a Coffee Button */}
              <div className="flex justify-center md:justify-end">
                <Link
                  href="https://www.buymeacoffee.com/isha_singla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="coffee-btn inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white rounded-lg transform transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-[#FF4F4F] hover:to-[#FF6B6B]"
                >
                  <div className="relative">
                    <div className="steam" />
                    <Coffee className="w-5 h-5 mr-2 coffee-icon" />
                  </div>
                  <span className="font-medium italic">Buy me a coffee</span>
                </Link>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </>
  )
}