"use client"

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Script from 'next/script'

const FAQData = [
  {
    question: "What is Hobby Connectr?",
    answer: "Hobby Connectr is a platform designed to help you discover new hobbies that match your interests and personality. Through our personalized quiz and curated blog content, we connect you with activities that you'll love."
  },
  {
    question: "How does the hobby matching quiz work?",
    answer: "Our quiz uses a sophisticated algorithm that analyzes your preferences, personality traits, and lifestyle factors. By answering 10 simple questions, we can match you with hobbies that align with your interests and available resources."
  },
  {
    question: "Are the recommended hobbies free to start?",
    answer: "We recommend hobbies across various budget ranges. Many hobbies can be started with minimal investment, while others might require more resources. Each hobby recommendation includes information about initial costs and required materials."
  },
  {
    question: "How often is new content added?",
    answer: "We regularly update our blog with new articles, guides, and hobby recommendations. Our team publishes new content weekly, covering various categories from creative arts to outdoor activities."
  },
  {
    question: "Can I suggest a hobby to be added?",
    answer: "Yes! We love hearing from our community. You can reach out to us through our social media channels or email with your suggestions. We're always looking to expand our database of hobbies."
  },
  {
    question: "How can I share my hobby journey?",
    answer: "You can share your hobby journey by following us on social media (@HobbyConnectr) and using the hashtag #HobbyConnectr. We often feature community stories in our blog and social media."
  },
  {
    question: "Do you offer hobby tutorials?",
    answer: "Yes! Our blog includes beginner-friendly tutorials, tips, and guides for various hobbies. We also link to trusted external resources and YouTube channels for in-depth learning."
  },
  {
    question: "Is Hobby Connectr available worldwide?",
    answer: "Yes, Hobby Connectr is available globally. While some hobby recommendations might be location-specific, we strive to provide alternatives and adaptations for different regions."
  },
  {
    question: "How can I get personalized hobby advice?",
    answer: "Start by taking our hobby matching quiz for personalized recommendations. You can also browse our blog categories that interest you and join our community discussions."
  },
  {
    question: "Can I change my quiz answers later?",
    answer: "Yes! You can retake the quiz anytime to get fresh recommendations based on your current interests and circumstances."
  },
  {
    question: "Can a hobby become a profession?",
    answer: "Absolutely! Many successful careers started as hobbies. With dedication, skill development, and market research, you can transform your hobby into a full-time career. For example, photography, cooking, writing, or crafting can evolve from passion projects into profitable businesses. However, it's important to develop both creative and business skills for a successful transition."
  },
  {
    question: "How should I mention hobbies in my resume?",
    answer: "Include hobbies that demonstrate valuable skills for the job you're applying for. For example, if you're applying for a leadership position, mention team sports or group activities. For creative roles, highlight artistic hobbies. Focus on hobbies that show problem-solving, creativity, teamwork, or dedication. Be specific about achievements or skills gained through your hobbies."
  },
  {
    question: "How do I discuss hobbies during job interviews?",
    answer: "When discussing hobbies in interviews, focus on transferable skills and personal growth. For instance, if you enjoy chess, emphasize strategic thinking and planning. For team sports, highlight leadership and collaboration. Be genuine and prepared to discuss how your hobbies have helped develop skills relevant to the position."
  },
  {
    question: "How do hobbies differ from personal taste?",
    answer: "While tastes are preferences (like enjoying certain music or food), hobbies are active pursuits that involve engagement and skill development. Hobbies require time investment, learning, and often produce tangible results or improvements. Your tastes might influence your choice of hobbies, but hobbies themselves involve active participation rather than passive enjoyment."
  },
  {
    question: "How can hobbies reduce stress?",
    answer: "Hobbies reduce stress by providing: 1) A healthy escape from daily pressures, 2) A sense of achievement and progress, 3) Mindful focus that prevents overthinking, 4) Social connections through shared interests, and 5) Creative or physical outlets for tension. Regular engagement in hobbies can significantly improve mental health and work-life balance."
  },
  {
    question: "What hobby should I try? How do I choose?",
    answer: "The best way to find your perfect hobby is to take our personalized quiz, which considers your interests, personality, and lifestyle. Consider factors like: Available time and resources, Indoor vs outdoor preferences, Social vs solitary activities, Creative vs analytical interests, and Physical vs mental engagement. Start with something that genuinely interests you and aligns with your schedule and budget."
  },
  {
    question: "What exactly defines a hobby?",
    answer: "A hobby is a regular activity done for enjoyment during leisure time. Unlike obligations or work, hobbies are voluntary pursuits that often involve developing skills, creating something, or achieving personal goals. They can be relaxing or challenging, solo or social, and typically reflect your interests and values."
  },
  {
    question: "Are certain hobbies better suited for girls or boys?",
    answer: "No! Hobbies have no gender. While some activities might have historical gender associations, any hobby can be enjoyed by anyone regardless of gender. What matters is your personal interest and enjoyment. We encourage everyone to explore hobbies based on their genuine interests rather than societal expectations."
  },
  {
    question: "How much should I invest in a new hobby?",
    answer: "Start small and gradually invest as your interest grows. Many hobbies can begin with minimal investment (like drawing, running, or meditation). As you develop skills and confirm your long-term interest, you can consider investing in better equipment or advanced training. Remember, the value of a hobby comes from enjoyment, not expense."
  },
  {
    question: "How do I find time for hobbies with a busy schedule?",
    answer: "Start with 15-30 minutes daily or a few hours weekly. Schedule hobby time like any other important appointment. Consider hobbies that fit your lifestyle (like lunch break sketching or commute podcasting). Remember, consistency matters more than duration. Even brief, regular engagement can be rewarding."
  }
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState(new Set())
  const [selectedCategory, setSelectedCategory] = useState('general')

  // Generate FAQ structured data
  const generateFAQStructuredData = () => {
    const allFAQs = Object.values(FAQData).flat()
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allFAQs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  }

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <>
      {/* Add structured data for SEO */}
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(generateFAQStructuredData())}
      </Script>

      <div className="min-h-screen bg-gradient-to-b from-[#8B1E3F]/5 to-white p-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#8B1E3F] mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about Hobby Connectr
            </p>
          </div>

          <div className="space-y-4">
            {FAQData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-[#8B1E3F]/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#8B1E3F]/5 transition-colors"
                >
                  <span className="font-medium text-[#8B1E3F]">{faq.question}</span>
                  {openItems.has(index) ? (
                    <ChevronUp className="h-5 w-5 text-[#8B1E3F]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#8B1E3F]" />
                  )}
                </button>
                
                {openItems.has(index) && (
                  <div className="px-6 py-4 bg-[#8B1E3F]/5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <a
              href="mailto:sisha200316@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#8B1E3F] text-white rounded-lg hover:bg-[#8B1E3F]/90 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </>
  )
} 