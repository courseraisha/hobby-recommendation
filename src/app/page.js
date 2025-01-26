import Link from 'next/link'
import { ArrowRight, Compass, Heart, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fff]">
      {/* Decorative elements */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[30rem] w-[30rem] rotate-12 transform bg-[#8B1E3F]/20" />
        <div className="absolute right-0 top-20 h-[20rem] w-[20rem] -rotate-12 transform bg-[#E3425F]/20" />
        <div className="absolute bottom-20 left-20 h-[25rem] w-[25rem] rotate-45 transform bg-[#F7B2BD]/20" />
        <div className="absolute -right-20 bottom-0 h-[28rem] w-[28rem] -rotate-45 transform bg-[#FFDCE1]/20" />
      </div> */}

      <div className="container mx-auto flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="mb-4 text-5xl font-bold text-[#8B1E3F] sm:text-6xl md:text-7xl">
            Discover Your Perfect Hobby
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Ready to explore new passions? Our interactive quiz helps you uncover activities that resonate with your unique personality.
          </p>
          <Button 
            asChild 
            size="lg"
            className="mt-4 bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white transition-all hover:shadow-lg"
          >
            <Link href="/quiz" className="inline-flex items-center gap-3">
              Find Yourself
              <ArrowRight className="h-5 w-5 transition-transform duration-300" />
            </Link>
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid w-full max-w-4xl gap-8 sm:grid-cols-2 md:grid-cols-3 mx-auto">
          <Card className="group relative overflow-hidden border-2 border-[#8B1E3F]/20 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#8B1E3F] hover:shadow-lg">
            <CardContent className="flex flex-col items-center p-8">
              <Compass className="h-8 w-8 text-[#8B1E3F]" />
              <h2 className="mb-3 text-xl text-center font-semibold text-[#8B1E3F]">Personalized Discovery</h2>
              <p className="text-center text-sm leading-relaxed text-[#E3425F]">
                Find activities that align perfectly with your lifestyle and interests.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 border-[#E3425F]/20 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#E3425F] hover:shadow-lg">
            <CardContent className="flex flex-col items-center p-8">
              <Heart className="h-8 w-8 text-[#E3425F]" />
              <h2 className="mb-3 text-xl font-semibold text-[#8B1E3F]">Find Your Passion</h2>
              <p className="text-center text-sm leading-relaxed text-[#E3425F]">
                Discover activities that bring genuine joy and fulfillment to your life.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 border-[#F7B2BD]/20 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#F7B2BD] hover:shadow-lg">
            <CardContent className="flex flex-col items-center p-8">
              <Sparkles className="h-8 w-8 text-[#E3425F]" />
              <h2 className="mb-3 text-xl font-semibold text-[#8B1E3F]">Quick & Easy</h2>
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

