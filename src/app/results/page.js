"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter } from "next/navigation"
import hobbies from "../../../data/hobbies"
import Link from "next/link"
import { Share2, RefreshCw, Youtube } from "lucide-react"

function ResultsContent() {
  const router = useRouter()
  const [matchedHobbies, setMatchedHobbies] = useState([])
  const [shareableLink, setShareableLink] = useState("")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const userAnswers = Array.from({ length: 10 }, (_, i) => urlParams.get(`q${i + 1}`))

    console.log("User Answers:", userAnswers)

    const hobbyMatches = hobbies.map((hobby) => {
      let matchCount = 0
      hobby.tags.forEach((tag, index) => {
        if (tag === userAnswers[index]) {
          matchCount++
        }
      })
      return {
        ...hobby,
        matchCount,
        matchPercentage: (matchCount / 10) * 100,
      }
    })

    console.log("Hobby Matches:", hobbyMatches)

    const topMatches = hobbyMatches
      .filter((hobby) => hobby.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount)
      .slice(0, 2)

    console.log("Top Matches:", topMatches)

    // If no matches found, randomly select two hobbies
    if (topMatches.length === 0) {
      const randomHobbies = hobbies.sort(() => 0.5 - Math.random()).slice(0, 2)
      setMatchedHobbies(randomHobbies)
    } else {
      setMatchedHobbies(topMatches)
    }

    const baseUrl = window.location.origin + "/results"
    const params = new URLSearchParams()
    userAnswers.forEach((answer, index) => {
      params.append(`q${index + 1}`, answer)
    })
    setShareableLink(`${baseUrl}?${params.toString()}`)
  }, [])


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#8B1E3F]/5 to-white p-6">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-[#8B1E3F]">Your Perfect Hobby Matches</h1>

          {/* Hobby Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {matchedHobbies.map((hobby, index) => {
              const videoId = hobby.youtube.split("v=")[1].split("&")[0]
              const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

              return (
                <div
                  key={index}
                  className="bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
                >
                  <img
                    src={thumbnailUrl || "/placeholder.svg"}
                    alt={`${hobby.name} thumbnail`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-[#8B1E3F]">{hobby.name}</h2>
                    <p className="text-gray-600 mb-4">{hobby.description}</p>
                    <div className="mb-4">
                      <div className="bg-[#8B1E3F]/10 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] h-2 rounded-full"
                          style={{ width: `${hobby.matchPercentage}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-600 mt-1 font-medium">
                        {hobby.matchCount} out of 10 preferences matched
                      </p>
                    </div>
                    <div className="flex flex-wrap mb-4">
                      {hobby.tags.map((tag, tagIndex) => {
                        const paramValue = new URLSearchParams(window.location.search).get(`q${tagIndex + 1}`)
                        return (
                          <span
                            key={tagIndex}
                            className={`inline-block rounded-full px-3 py-1 text-sm mr-2 mb-2 ${
                              tag === paramValue
                                ? "bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white"
                                : "bg-[#8B1E3F]/10 text-[#8B1E3F]"
                            }`}
                          >
                            {tag}
                          </span>
                        )
                      })}
                    </div>
                    <a
                      href={hobby.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white font-medium px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
                    >
                      <Youtube className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      <span className="font-semibold">Watch Tutorial on YouTube</span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Shareable Link Section */}
          <div className="bg-white shadow-xl rounded-lg p-6 border border-[#8B1E3F]/20 mb-12">
            <div className="text-center space-y-2 mb-4">
              <div className="inline-flex items-center justify-center space-x-2">
                <span className="text-4xl">🎉</span>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-transparent bg-clip-text">
                  Share Your Amazing Results!
                </h2>
                <span className="text-4xl">🚀</span>
              </div>
              <p className="text-gray-600">Let your friends discover their perfect hobbies too!</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={shareableLink}
                  readOnly
                  className="w-full pr-4 py-3 pl-4 rounded-lg border border-[#8B1E3F]/20 bg-[#8B1E3F]/5 focus:ring-2 focus:ring-[#8B1E3F] focus:border-transparent transition-all duration-200"
                />
              </div>
              <button
                onClick={async () => {
                  await navigator.clipboard.writeText(shareableLink)
                  const button = document.activeElement
                  button.textContent = "Copied!"
                  button.classList.add("bg-green-500")
                  setTimeout(() => {
                    button.textContent = "Copy"
                    button.classList.remove("bg-green-500")
                  }, 2000)
                }}
                className="px-6 py-3 bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-[#8B1E3F] flex items-center"
              >
                <Share2 className="mr-2 h-5 w-5" />
                Copy
              </button>
            </div>
          </div>

          {/* Take Quiz Again Button */}
          <div className="flex justify-center">
            <Link
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white font-medium px-8 py-4 rounded-full hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              href="/quiz"
            >
              <RefreshCw className="mr-2 h-6 w-6" />
              Take the Quiz Again
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default function Results() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#8B1E3F]/5 to-white">
          <div className="text-[#8B1E3F] text-xl font-semibold">Loading your perfect matches...</div>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  )
}

