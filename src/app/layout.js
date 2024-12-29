import './globals.css'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Hobby Recommendations',
  description: 'Discover your perfect hobby through our personalized quiz!',
  keywords: 'hobbies, interests, quiz, personality, activities, recommendations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-full">
      <body className="flex min-h-screen flex-col">
        <header className="border-b bg-white/50 backdrop-blur-sm dark:bg-gray-950/50">
          <div className="container flex h-16 items-center justify-between px-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 transition-colors hover:text-purple-600 dark:hover:text-purple-400"
            >
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold">Hobby Finder</span>
            </Link>
            <nav>
              <div className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Link 
                  href="/quiz" 
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Take Quiz
                </Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t bg-white/50 backdrop-blur-sm dark:bg-gray-950/50">
          <div className="container flex flex-col items-center gap-2 px-4 py-6 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Hobby Recommendations. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <span className="animate-pulse text-red-500">❤️</span> by{' '}
              <Link 
                href="https://www.linkedin.com/in/isha-singla16/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
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

