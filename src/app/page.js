import Link from "next/link"
import { ArrowRight, Compass, Heart, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-purple-50/50 to-blue-50/50 dark:from-background dark:via-purple-900/10 dark:to-blue-900/10">
      <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.purple.50),transparent)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.purple.900/20),transparent)]" />
        <Sparkles className="h-12 w-12 animate-pulse text-purple-600 dark:text-purple-400" />
        <h1 className="mt-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 sm:text-5xl md:text-6xl">
          Discover Your Perfect Hobby
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Find activities that match your personality and interests through our interactive quiz.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 bg-purple-600 text-white transition-all hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
        >
          <Link href="/quiz" className="gap-2">
            Take the Quiz <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <Card className="relative overflow-hidden border-purple-100 transition-all duration-300 hover:scale-105 hover:border-purple-200 hover:shadow-lg dark:border-purple-900/50 dark:hover:border-purple-700/50">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-900/20" />
            <CardContent className="flex flex-col items-center p-6">
              <Compass className="h-12 w-12 text-purple-600 dark:text-purple-400" />
              <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                Personalized Match
              </h2>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Get hobby suggestions tailored to your preferences and lifestyle.
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-purple-100 transition-all duration-300 hover:scale-105 hover:border-purple-200 hover:shadow-lg dark:border-purple-900/50 dark:hover:border-purple-700/50">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-900/20" />
            <CardContent className="flex flex-col items-center p-6">
              <Heart className="h-12 w-12 text-purple-600 dark:text-purple-400" />
              <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                Find Your Passion
              </h2>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Discover activities that bring joy and fulfillment to your life.
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-purple-100 transition-all duration-300 hover:scale-105 hover:border-purple-200 hover:shadow-lg dark:border-purple-900/50 dark:hover:border-purple-700/50 sm:col-span-2 md:col-span-1">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-900/20" />
            <CardContent className="flex flex-col items-center p-6">
              <Sparkles className="h-12 w-12 text-purple-600 dark:text-purple-400" />
              <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                Quick & Easy
              </h2>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Complete our simple quiz in just a few minutes to get started.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

