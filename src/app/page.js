"use client"

import Link from "next/link"
import { ArrowRight, Compass, Heart, Sparkles, Dumbbell, Trophy, Star } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { useState } from "react"
import { PDFViewer } from "../components/ui/pdf-viewer"

export default function Page() {
  const [showChallenge, setShowChallenge] = useState(false)

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-[#8B1E3F]/5 to-white overflow-hidden">
      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#8B1E3F]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#E3425F]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-[#F7B2BD]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#8B1E3F]/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-12 lg:items-start lg:py-24">
            {/* Left Column - Main Content */}
            <div className="flex-[1.4] pt-24 lg:pt-0">
              {/* Hero Section */}
              <div className="text-center lg:text-left pb-8 lg:pb-16">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B1E3F]/5 rounded-full">
                    <Sparkles className="h-4 w-4 text-[#8B1E3F] animate-pulse" />
                    <span className="text-sm font-medium text-[#8B1E3F]">Find Your Next Adventure</span>
                  </div>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] bg-clip-text text-transparent">
                      Discover Your Perfect Hobby
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                    Ready to explore new passions? Our interactive quiz helps you uncover activities that resonate with
                    your unique personality and lifestyle.
                  </p>
                  <div className="flex items-center lg:justify-start justify-center gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white transition-all hover:shadow-lg hover:scale-105"
                    >
                      <Link href="/quiz" className="inline-flex items-center gap-3 px-8 py-4">
                        Take the Quiz
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Mobile Challenge Section - Only visible on mobile */}
              <div className="block lg:hidden mb-12">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] rounded-2xl blur opacity-30"></div>
                  <div className="relative bg-white rounded-xl p-6 shadow-xl border border-[#8B1E3F]/10">
                    {/* Challenge Header */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B1E3F]/5 rounded-full mb-6">
                      <Trophy className="h-5 w-5 text-[#8B1E3F] animate-pulse" />
                      <span className="text-sm font-semibold text-[#8B1E3F] uppercase tracking-wider">
                        Featured Challenge
                      </span>
                    </div>

                    {/* Challenge Content */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-bold bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] bg-clip-text text-transparent">
                        7-Day Fitness Challenge
                      </h2>
                      <p className="text-gray-600 text-sm">
                        Transform your routine with our beginner-friendly program. Just 10-20 minutes daily, no equipment needed!
                      </p>

                      {/* Feature Grid */}
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          { title: "Daily Workouts", desc: "Guided exercises for all levels" },
                          { title: "Track Progress", desc: "Monitor your improvements" },
                          { title: "Community", desc: "Join fellow enthusiasts" },
                        ].map((feature, index) => (
                          <div
                            key={index}
                            className="group flex items-start gap-3 p-3 bg-[#8B1E3F]/5 rounded-lg transition-all hover:bg-[#8B1E3F]/10"
                          >
                            <Star className="h-4 w-4 text-[#8B1E3F] mt-1 group-hover:animate-pulse" />
                            <div>
                              <h3 className="font-semibold text-[#8B1E3F] text-sm">{feature.title}</h3>
                              <p className="text-xs text-gray-600">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Challenge Icon */}
                      <div className="relative w-full h-24 my-4">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#8B1E3F] to-[#E3425F] rounded-full opacity-20 animate-pulse"></div>
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Dumbbell className="w-16 h-16 text-[#8B1E3F] transition-transform hover:scale-110" />
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={() => setShowChallenge(true)}
                        className="w-full group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white rounded-lg overflow-hidden transition-all hover:shadow-lg hover:scale-105"
                      >
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <Dumbbell className="h-4 w-4 group-hover:animate-bounce" />
                        <span className="font-medium text-sm">Get Free Workout Plan</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="py-12">
                <h2 className="text-3xl font-bold text-center lg:text-left text-[#8B1E3F] mb-10">
                  Why Choose Hobby Connectr?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Compass,
                      title: "Personalized Discovery",
                      description: "Find activities that align perfectly with your lifestyle and interests.",
                      animation: "group-hover:animate-spin-slow",
                      color: "[#8B1E3F]",
                    },
                    {
                      icon: Heart,
                      title: "Find Your Passion",
                      description: "Discover activities that bring genuine joy and fulfillment to your life.",
                      animation: "group-hover:animate-bounce",
                      color: "[#E3425F]",
                    },
                    {
                      icon: Sparkles,
                      title: "Quick & Easy",
                      description: "A simple quiz that takes just minutes to unlock new possibilities.",
                      animation: "group-hover:animate-pulse",
                      color: "[#F7B2BD]",
                    },
                  ].map((feature, index) => (
                    <Card
                      key={index}
                      className={`group relative overflow-hidden border-2 border-${feature.color}/20 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-${feature.color} hover:shadow-xl`}
                    >
                      <CardContent className="flex flex-col items-center p-8">
                        <feature.icon
                          className={`h-12 w-12 text-${feature.color} mb-6 transition-all duration-300 ${feature.animation}`}
                        />
                        <h3 className="text-xl font-semibold text-[#8B1E3F] mb-4">{feature.title}</h3>
                        <p className="text-center text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Challenge Section - Only visible on desktop */}
            <div className="hidden lg:block lg:w-[400px] lg:sticky lg:top-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] rounded-2xl blur opacity-30"></div>
                <div className="relative bg-white rounded-xl p-6 shadow-xl border border-[#8B1E3F]/10">
                  {/* Challenge Header */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B1E3F]/5 rounded-full mb-6">
                    <Trophy className="h-5 w-5 text-[#8B1E3F] animate-pulse" />
                    <span className="text-sm font-semibold text-[#8B1E3F] uppercase tracking-wider">
                      Featured Challenge
                    </span>
                  </div>

                  {/* Challenge Content */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] bg-clip-text text-transparent">
                      7-Day Fitness Challenge
                    </h2>
                    <p className="text-gray-600">
                      Transform your routine with our beginner-friendly program. Just 10-20 minutes daily, no equipment
                      needed!
                    </p>

                    {/* Enhanced Feature Grid */}
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { title: "Daily Workouts", desc: "Guided exercises for all levels" },
                        { title: "Track Progress", desc: "Monitor your improvements" },
                        { title: "Community", desc: "Join fellow enthusiasts" },
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="group flex items-start gap-3 p-4 bg-[#8B1E3F]/5 rounded-lg transition-all hover:bg-[#8B1E3F]/10"
                        >
                          <Star className="h-5 w-5 text-[#8B1E3F] mt-1 group-hover:animate-pulse" />
                          <div>
                            <h3 className="font-semibold text-[#8B1E3F]">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Enhanced Challenge Icon */}
                    <div className="relative w-full h-32 my-6">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#8B1E3F] to-[#E3425F] rounded-full opacity-20 animate-pulse"></div>
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Dumbbell className="w-20 h-20 text-[#8B1E3F] transition-transform hover:scale-110" />
                      </div>
                    </div>

                    {/* Enhanced CTA Button */}
                    <button
                      onClick={() => setShowChallenge(true)}
                      className="w-full group relative inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white rounded-lg overflow-hidden transition-all hover:shadow-lg hover:scale-105"
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <Dumbbell className="h-5 w-5 group-hover:animate-bounce" />
                      <span className="font-medium">Get Free Workout Plan</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PDFViewer isOpen={showChallenge} onClose={() => setShowChallenge(false)} />
    </div>
  )
}

