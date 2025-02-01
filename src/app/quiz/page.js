"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Progress } from "../../components/ui/progress"
import { Card, CardContent } from "../../components/ui/card"
import { Sparkles } from 'lucide-react'
import { questions } from "../../../data/questions"
import styles from './quiz.module.css'
import Link from 'next/link'
import { Button } from "../../components/ui/button"

const emojis = {
  Indoor: "🏠",
  Outdoor: "🌳",
  Creative: "🎨",
  Analytical: "📊",
  Active: "🏃‍♂️",
  Relaxed: "🛋️",
  Solo: "👤",
  Group: "👥",
  "Short-Term": "⏱️",
  "Long-Term": "📅",
  Crafting: "✂️",
  Digital: "💻",
  Competitive: "🏆",
  Collaborative: "🤝",
  Nature: "🌿",
  Technology: "🤖",
  "Low-Cost": "💰",
  "High-Cost": "💎",
  "New People": "🤗",
  "Familiar Faces": "👋",
}

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [progress, setProgress] = useState(100)
  const [recommendedHobbies, setRecommendedHobbies] = useState([]);


  useEffect(() => {
    const duration = 10000 // 5 seconds
    const interval = 25 // Update every 10ms
    const step = (100 * interval) / duration

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(timer)
          return 0
        }
        return prevProgress - step
      })
    }, interval)

    const questionTimer = setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setProgress(100)
      } else {
        setQuizCompleted(true)
      }
    }, duration)

    return () => {
      clearInterval(timer)
      clearTimeout(questionTimer)
    }
  }, [currentQuestionIndex])

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex]
    const answer = {
      questionId: currentQuestion.id,
      selectedOption,
    }

    setSelectedAnswers((prev) => [...prev, answer])

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setProgress(100)
    } else {
      setQuizCompleted(true)
    }
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <div className={styles.quizContainer}>
      <div className={styles.quizContent}>
        <div className={styles.header}>
          <div className={styles.sparkleIcon}>
            <Sparkles className={styles.sparkles} />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-[#8B1E3F] sm:text-4xl md:text-5xl">What hobbies suit you?</h1>
          {!quizCompleted && (
            <p className={styles.questionCount}>
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          )}
        </div>

        {!quizCompleted ? (
          <div className={styles.questionSection}>
            <Progress value={progress} className={styles.progressBar} />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={styles.questionCard}>
                  <CardContent className={styles.cardContent}>
                    <div className="text-l font-bold text-[#8B1E3F] sm:text-xl md:text-2xl text-center p-4">
                     {currentQuestion.text}
                    </div>
                    <div className={styles.optionsGrid}>
                      {currentQuestion.options.map((option, index) => (
                        <motion.button
                          key={option}
                          onClick={() => handleAnswer(option)}
                          className={`flex flex-col items-center p-2 border-2 rounded-none cursor-pointer transition-all duration-300 ${
                            index === 0 ? 'border-[#8B1E3F] text-[#8B1E3F] hover:bg-[#FFDCE1]' : 'border-[#E3425F] text-[#E3425F] hover:bg-[#F7B2BD]'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex flex-col items-center p-2">
                            <div className="text-5xl">{emojis[option]}</div>
                            <div className="ml-2 text-xl font-medium text-[#8B1E3F]">{option}</div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className={styles.resultsCard}>
              <CardContent>
                <h2 className="text-2xl font-bold mb-4 text-[#8B1E3F]">Your Answers ✨</h2>
                  {selectedAnswers.map((answer, index) => {
                    const question = questions.find((q) => q.id === answer.questionId)
                    return (
                      <motion.div
                        key={`${answer.questionId}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-lg p-2 mb-3 bg-gray-100"
                      >
                        <p className="font-semibold text-lg text-[#8B1E3F]">{question?.text}</p>
                        <p className="text-md text-gray-700">
                          {emojis[answer.selectedOption]} {answer.selectedOption}
                        </p>
                      </motion.div>
                    )
                  })}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
      

      {quizCompleted && (
        <div className="flex justify-center">
          <Link 
            className="bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white font-medium p-4 rounded hover:shadow-lg"
            href={{
              pathname: '/results',
              query: {
                q1: selectedAnswers[0]?.selectedOption,
                q2: selectedAnswers[1]?.selectedOption,
                q3: selectedAnswers[2]?.selectedOption,
                q4: selectedAnswers[3]?.selectedOption,
                q5: selectedAnswers[4]?.selectedOption,
                q6: selectedAnswers[5]?.selectedOption,
                q7: selectedAnswers[6]?.selectedOption,
                q8: selectedAnswers[7]?.selectedOption,
                q9: selectedAnswers[8]?.selectedOption,
                q10: selectedAnswers[9]?.selectedOption,
              }
            }}
          >
            Get the Results
          </Link>
        </div>
      )}
    </div>
  )
}

