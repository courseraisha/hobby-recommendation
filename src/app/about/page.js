"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Twitter, ArrowRight, Sparkles, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8B1E3F]/5 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-transparent bg-clip-text mb-6">
              About HobbyConnectr
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Life's Too Short to Be Bored—Find Your Passion Today!
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-12"
        >
          {/* Introduction */}
          <section className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Ever felt like you're stuck in a routine? Like your free time is slipping away while you scroll endlessly, 
              trying to figure out what to do? We get it. At HobbyConnectr, we believe that hobbies are more than just 
              ways to pass time—they are the spark that makes life exciting.
            </p>
          </section>

          {/* Mission Section */}
          <section className="bg-white rounded-2xl p-8 shadow-xl border border-[#8B1E3F]/10">
            <h2 className="text-2xl font-bold text-[#8B1E3F] mb-4 flex items-center gap-2">
              <Sparkles className="h-6 w-6" />
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We started HobbyConnectr because we know how overwhelming it can be to find a new passion. 
              With so many options, where do you even start? That's why we created a simple, fun, and 
              interactive way to guide you to the perfect hobby—just for you.
            </p>
          </section>

          {/* How It Works */}
          <section className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-[#8B1E3F]/10">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-semibold text-[#8B1E3F] mb-2">Quick Quiz</h3>
              <p className="text-gray-600">Play our fun 'This or That' quiz – No pressure, just enjoyable choices.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-[#8B1E3F]/10">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold text-[#8B1E3F] mb-2">Perfect Match</h3>
              <p className="text-gray-600">Get hobby recommendations tailored to your unique personality.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-[#8B1E3F]/10">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="font-semibold text-[#8B1E3F] mb-2">Start Journey</h3>
              <p className="text-gray-600">Explore guides, videos, and communities to begin your adventure.</p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </section>
        </motion.div>
      </div>
    </div>
  )
} 