import Link from 'next/link'
import { ArrowRight, Compass, Heart, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#E8F4F5]">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[30rem] w-[30rem] rotate-12 transform bg-[#8B1E3F]/10" />
        <div className="absolute right-0 top-20 h-[20rem] w-[20rem] -rotate-12 transform bg-[#E3425F]/10" />
        <div className="absolute bottom-20 left-20 h-[25rem] w-[25rem] rotate-45 transform bg-[#F7B2BD]/20" />
        <div className="absolute -right-20 bottom-0 h-[28rem] w-[28rem] -rotate-45 transform bg-[#FFDCE1]/30" />
      </div>

      <div className="container relative flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center px-4 py-16">
        {/* Hero Section */}
        <div className="relative text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <Sparkles className="h-16 w-16 animate-pulse text-[#8B1E3F]" />
              <div className="absolute -right-1 -top-1 h-4 w-4 animate-ping rounded-full bg-[#E3425F]/50" />
            </div>
          </div>
          <h1 className="relative mb-8 bg-gradient-to-r from-[#8B1E3F] via-[#E3425F] to-[#8B1E3F] bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
            Discover Your Perfect Hobby
            <span className="absolute -right-8 top-0 animate-bounce text-2xl">✨</span>
          </h1>
          <div className="relative mx-auto max-w-[65ch] space-y-4">
            <p className="text-lg leading-relaxed text-[#8B1E3F] transition-opacity duration-300 hover:opacity-90 sm:text-xl">
              Ready to explore new passions? Our interactive quiz helps you uncover activities that resonate with your unique personality.
            </p>
            <p className="text-base text-[#E3425F] sm:text-lg">
              Take a few minutes to discover hobbies tailored just for you.
            </p>
          </div>
          <Button 
            asChild 
            size="lg"
            className="group relative mt-12 overflow-hidden rounded-none bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] px-8 py-6 text-lg font-semibold text-white transition-all hover:shadow-[0_0_2rem_-0.5rem_#8B1E3F]"
          >
            <Link href="/quiz" className="inline-flex items-center gap-3">
              Start Your Journey 
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="mt-24 grid w-full max-w-4xl gap-8 sm:grid-cols-2 md:grid-cols-3">
          <Card className="group relative overflow-hidden border-2 border-[#8B1E3F]/20 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#8B1E3F] hover:shadow-[0_0_2rem_-0.5rem_#8B1E3F]">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FFDCE1]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <CardContent className="flex flex-col items-center p-8">
              <div className="mb-6 rounded-none bg-[#FFDCE1]/50 p-4">
                <Compass className="h-8 w-8 text-[#8B1E3F]" />
              </div>
              <h2 className="mb-3 text-xl font-semibold text-[#8B1E3F]">
                Personalized Discovery
              </h2>
              <p className="text-center text-sm leading-relaxed text-[#E3425F]">
                Find activities that align perfectly with your lifestyle and interests.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 border-[#E3425F]/20 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#E3425F] hover:shadow-[0_0_2rem_-0.5rem_#E3425F]">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#F7B2BD]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <CardContent className="flex flex-col items-center p-8">
              <div className="mb-6 rounded-none bg-[#F7B2BD]/50 p-4">
                <Heart className="h-8 w-8 text-[#E3425F]" />
              </div>
              <h2 className="mb-3 text-xl font-semibold text-[#8B1E3F]">
                Find Your Passion
              </h2>
              <p className="text-center text-sm leading-relaxed text-[#E3425F]">
                Discover activities that bring genuine joy and fulfillment to your life.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 border-[#F7B2BD]/20 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#F7B2BD] hover:shadow-[0_0_2rem_-0.5rem_#F7B2BD] sm:col-span-2 md:col-span-1">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FFDCE1]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <CardContent className="flex flex-col items-center p-8">
              <div className="mb-6 rounded-none bg-[#FFDCE1]/50 p-4">
                <Sparkles className="h-8 w-8 text-[#E3425F]" />
              </div>
              <h2 className="mb-3 text-xl font-semibold text-[#8B1E3F]">
                Quick & Easy
              </h2>
              <p className="text-center text-sm leading-relaxed text-[#E3425F]">
                A simple quiz that takes just minutes to unlock new possibilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

