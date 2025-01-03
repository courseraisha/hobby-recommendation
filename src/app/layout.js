import './globals.css'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Passion Explorer',
  description: 'Discover your perfect hobby through our personalized quiz!',
  keywords: 'hobbies, interests, quiz, personality, activities, recommendations,hobbies recommendation,passion explorer',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-full">
       <head>
       <link rel="icon" type="image/png" href='icon.png'/>
       </head>
      <body className="flex min-h-screen flex-col">
        <header className="border-b bg-white/50 backdrop-blur-sm dark:bg-gray-950/50 sticky top-0">
          <div className=" flex h-16 items-center justify-between px-4">
            <Link 
              href="/" 
              className="font-bold text-[#8B1E3F] sm:text-xl flex"
            >
              <Sparkles className="h-5 w-5" />
              <span >Passion Explorer</span>
            </Link>
            <nav><Link 
                  href="/quiz" 
                  className="bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white font-medium py-2 px-4 rounded hover:shadow-lg"
                >
                  Take Quiz
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
  )
}

