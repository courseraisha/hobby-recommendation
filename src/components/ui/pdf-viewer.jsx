"use client"
import { X, Download, Share2 } from "lucide-react"
import jsPDF from 'jspdf'

export function PDFViewer({ isOpen, onClose }) {
  if (!isOpen) return null

  const handleDownload = () => {
    const doc = new jsPDF()
    
    // Set initial font styles
    doc.setFont('helvetica')
    
    // Add header background
    doc.setFillColor(139, 30, 63) // #8B1E3F
    doc.rect(0, 0, doc.internal.pageSize.getWidth(), 60, 'F')
    
    // Title
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(28)
    doc.text('7-Day Fitness Challenge', 20, 40)
    
    let yPos = 80

    // Stats line with border
    doc.setDrawColor(139, 30, 63)
    doc.setLineWidth(0.5)
    doc.roundedRect(20, yPos, 170, 30, 2, 2)
    
    doc.setFontSize(12)
    doc.setTextColor(80, 80, 80)
    doc.text('10-20 min/day', 40, yPos + 12)
    doc.text('No Equipment', 95, yPos + 12)
    doc.text('All Levels', 150, yPos + 12)

    yPos += 45

    // Daily Workouts
    for (let day = 1; day <= 7; day++) {
      // Add new page if needed
      if (yPos > 250) {
        doc.addPage()
        yPos = 30
      }

      // Day Header
      doc.setFillColor(139, 30, 63)
      doc.rect(20, yPos, 170, 25, 'F')
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(14)
      doc.text(`Day ${day}`, 30, yPos + 16)
      
      yPos += 35

      // Workouts
      doc.setTextColor(60, 60, 60)
      doc.setFontSize(12)
      const workouts = getDayWorkout(day)
      workouts.props.children.forEach((workout) => {
        // Bullet point
        doc.circle(25, yPos - 1, 1, 'F')
        // Workout text
        doc.text(workout.props.children, 35, yPos)
        yPos += 8
      })
      
      yPos += 15
    }

    // Footer on each page
    const pageCount = doc.internal.getNumberOfPages()
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)
      
      // Page number
      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.text(
        `${i} / ${pageCount}`,
        doc.internal.pageSize.getWidth() / 2,
        doc.internal.pageSize.getHeight() - 10,
        { align: 'center' }
      )
    }

    // Save the PDF
    doc.save('7-day-fitness-challenge.pdf')
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center p-0 sm:p-4 z-[60]">
      <div className="bg-white w-full sm:rounded-xl sm:max-w-4xl h-screen sm:h-[90vh] relative animate-scale-in sm:mt-20">
        {/* Header Bar */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
            <h3 className="text-lg font-semibold text-[#8B1E3F]">
              7-Day Fitness Challenge
            </h3>
          </div>
          
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B1E3F] text-white rounded-lg hover:bg-[#8B1E3F]/90 transition-colors"
          >
            <Download className="h-5 w-5" />
            Download PDF
          </button>
        </div>
        
        {/* Content Area */}
        <div className="p-4 sm:p-6 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h2 className="text-2xl font-bold text-[#8B1E3F] mb-4">
              7-Day Beginner Fitness Challenge
            </h2>
            
            <p className="text-gray-600 mb-6">
              Transform your routine with our beginner-friendly program. Just 10-20 minutes daily, no equipment needed!
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-1">⏱️</div>
                <div className="text-sm text-[#8B1E3F]">10-20 min/day</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">💪</div>
                <div className="text-sm text-[#8B1E3F]">No Equipment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🎯</div>
                <div className="text-sm text-[#8B1E3F]">All Levels</div>
              </div>
            </div>

            {/* Daily Workouts */}
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <div key={day} className="mb-6">
                <div className="bg-[#8B1E3F] text-white px-4 py-2 rounded-t-lg">
                  <h3 className="text-lg font-semibold">Day {day}</h3>
                </div>
                <div className="bg-white px-4 py-3 rounded-b-lg border border-t-0 border-gray-200">
                  <div className="space-y-2">
                    {getDayWorkout(day)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function getDayWorkout(day) {
  const workouts = {
    1: [
      "10 Jumping Jacks",
      "10 Squats",
      "10 Knee Push-ups",
      "20-Second Plank",
      "Repeat 2x for an extra burn!"
    ],
    2: [
      "15 Crunches",
      "20 Bicycle Kicks",
      "15 Leg Raises",
      "30-Second Plank",
      "Engage your core & go slow for best results!"
    ],
    3: [
      "30-Second High Knees",
      "30-Second Butt Kicks",
      "20 Side Lunges",
      "20 Skater Jumps",
      "Play your favorite song & move to the beat!"
    ],
    4: [
      "5-Minute Full-Body Stretch",
      "30-Second Butterfly Stretch",
      "30-Second Child's Pose",
      "Focus on breathing & relaxation today!"
    ],
    5: [
      "10 Squats",
      "10 Glute Bridges",
      "10 Lunges (each leg)",
      "15 Calf Raises",
      "Want more? Do 2-3 rounds!"
    ],
    6: [
      "10 Knee Push-ups",
      "15 Shoulder Taps",
      "15 Triceps Dips (using a chair)",
      "30-Second Plank Hold",
      "Feel the strength building!"
    ],
    7: [
      "Pick your favorite workout from this week & repeat it!",
      "Try dancing for 10 minutes if you want a fun alternative!",
      "Celebrate your progress & plan for next week!",
      "Share your achievement on social media!"
    ]
  }

  return (
    <ul className="list-disc pl-5 text-gray-700 space-y-4">
      {workouts[day]?.map((exercise, index) => (
        <li key={index}>{exercise}</li>
      ))}
    </ul>
  )
} 