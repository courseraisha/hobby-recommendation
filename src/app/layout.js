import './globals.css'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import Head from 'next/head'
import Script from "next/script"

export const metadata = {
  image: 'logo.png',
  title: {
    default: 'Hobby Connectr',
    template: '%s | Hobby Connectr',
  },
  description: 'Discover your perfect hobby through our personalized quiz!',
  keywords: 'hobbies, interests, quiz, this or that game,hobby finder,hobby recommendation,hobby,personality, activities, recommendations,hobbies recommendation,Hobby Connectr',
}

export default function RootLayout({ children }) {
  return (
    <>
      
      <html lang="en" className="min-h-full">
    <Head>
        <link rel="icon" href="logo.png" />
        <title>Hobby Connectr</title>
        <meta
          name="Hobby Connectr"
          content="Discover your perfect hobby through our personalized quiz!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
            <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-22VDXGND8P"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-22VDXGND8P');
        `}</Script>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1796071074362408" crossorigin="anonymous"></Script>
      
        <body className="flex min-h-screen flex-col">
          <header className="border-b bg-white/50 backdrop-blur-sm dark:bg-gray-950/50 sticky top-0">
            <div className=" flex h-16 items-center justify-between px-4">
              <Link 
                href="/" 
                className="font-bold text-[#8B1E3F] sm:text-xl flex"
              >
                <Sparkles className="h-5 w-5" />
                <span >Hobby Connectr</span>
              </Link>
              <nav
              className="flex gap-4"
              >
                <Link 
                  href="/quiz" 
                  className="bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white font-medium py-2 px-4 rounded hover:shadow-lg"
                >
                  Take Quiz
                </Link>
                <Link 
                  href="/blogs" 
                  className="bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white font-medium py-2 px-4 rounded hover:shadow-lg"
                >
                  Blogs
                </Link>
              </nav>
                
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t bg-white/50 backdrop-blur-sm dark:bg-gray-950/50 sticky bottom-0">
            <div className="container flex flex-col items-center gap-2 px-4 py-6 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between">
              <p>&copy; {new Date().getFullYear()} Hobby Recommendations. All rights reserved.</p>
              <p className="flex items-center gap-1">
                Made with <span className="animate-pulse text-red-500">❤️</span> by{' '}
                <Link 
                  href="https://www.linkedin.com/in/isha-singla16/" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="font-large text-[#8B1E3F] underline "
                >
                  Isha
                </Link>
              </p>
            </div>
          </footer>
        </body>
      </html>
    </>
  )
}

