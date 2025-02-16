"use client"
import { X, Download } from "lucide-react"
import jsPDF from 'jspdf'

export function PDFViewer({ isOpen, onClose }) {
  if (!isOpen) return null

  const handleDownload = () => {
    const doc = new jsPDF()
    
    // Set font
    doc.setFont('helvetica')
    
    // Title Page
    doc.setFontSize(28)
    doc.setTextColor(139, 30, 63) // #8B1E3F
    doc.text('7-Day Fitness Challenge', 20, 30)
    
    doc.setFontSize(14)
    doc.setTextColor(80, 80, 80)
    doc.text('Your Journey to a Healthier Lifestyle', 20, 45)

    // Introduction
    let yPos = 70
    doc.setFontSize(16)
    doc.setTextColor(139, 30, 63)
    doc.text('How It Works:', 20, yPos)
    
    yPos += 10
    doc.setFontSize(12)
    doc.setTextColor(0)
    doc.text('• Duration: 10-20 minutes per day', 25, yPos)
    doc.text('• No Equipment Needed', 25, yPos + 7)
    doc.text('• Perfect for All Fitness Levels!', 25, yPos + 14)
    
    // Preparation Tips
    yPos += 30
    doc.setFontSize(16)
    doc.setTextColor(139, 30, 63)
    doc.text('Preparation Tips:', 20, yPos)
    
    yPos += 10
    doc.setFontSize(12)
    doc.setTextColor(0)
    const prepTips = [
      'Set a consistent workout time each day',
      'Wear comfortable clothing',
      'Stay hydrated (drink water before/after)',
      'Clear a small space for movement',
      'Have a towel ready'
    ]
    prepTips.forEach(tip => {
      doc.text(`• ${tip}`, 25, yPos)
      yPos += 7
    })

    // Daily Workouts
    doc.addPage()
    yPos = 20

    for (let day = 1; day <= 7; day++) {
      if (yPos > 250) {
        doc.addPage()
        yPos = 20
      }

      doc.setFontSize(16)
      doc.setTextColor(139, 30, 63)
      doc.text(`Day ${day}`, 20, yPos)
      
      yPos += 10
      doc.setFontSize(12)
      doc.setTextColor(0)
      
      const workouts = getDayWorkout(day)
      workouts.props.children.forEach((workout) => {
        if (yPos > 280) {
          doc.addPage()
          yPos = 20
        }
        doc.text(`• ${workout.props.children}`, 25, yPos)
        yPos += 7
      })
      
      yPos += 15
    }

    // Tips for Success
    doc.addPage()
    yPos = 20
    
    doc.setFontSize(16)
    doc.setTextColor(139, 30, 63)
    doc.text('Tips for Success', 20, yPos)
    
    yPos += 10
    doc.setFontSize(12)
    doc.setTextColor(0)
    
    const tips = [
      'Start slowly and gradually increase intensity',
      'Listen to your body and rest when needed',
      'Celebrate small victories',
      'Take progress photos (optional)',
      'Join our community for support',
      'Share your journey on Instagram @HobbyConnectr',
      'Remember: consistency over perfection'
    ]
    
    tips.forEach(tip => {
      doc.text(`• ${tip}`, 25, yPos)
      yPos += 7
    })

    // Footer on each page
    const pageCount = doc.internal.getNumberOfPages()
    doc.setFontSize(10)
    doc.setTextColor(128)
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)
      doc.text(
        `Hobby Connectr Fitness Challenge - Page ${i} of ${pageCount}`,
        doc.internal.pageSize.getWidth() / 2,
        doc.internal.pageSize.getHeight() - 10,
        { align: 'center' }
      )
    }

    // Save the PDF
    doc.save('7-day-fitness-challenge.pdf')
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-4xl h-[80vh] relative animate-scale-in">
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={handleDownload}
            className="p-2 hover:bg-[#8B1E3F]/10 rounded-full transition-colors text-[#8B1E3F] flex items-center gap-2"
          >
            <Download className="h-6 w-6" />
            <span className="text-sm font-medium">Download PDF</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        
        <div id="pdf-content" className="p-8 h-full overflow-y-auto">
          <h2 className="text-3xl font-bold text-[#8B1E3F] mb-6">7-Day Beginner Fitness Challenge</h2>
          
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h3 className="text-xl font-semibold mb-4">How It Works:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Duration: 10-20 minutes per day</li>
                <li>No Equipment Needed</li>
                <li>Perfect for All Fitness Levels!</li>
              </ul>
            </section>

            {/* Daily Workouts */}
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <section key={day} className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-[#8B1E3F] mb-4">Day {day}</h3>
                <div className="space-y-4">
                  {getDayWorkout(day)}
                </div>
              </section>
            ))}

            {/* Extra Motivation */}
            <section className="p-6 bg-[#8B1E3F]/5 rounded-xl">
              <h3 className="text-xl font-semibold text-[#8B1E3F] mb-4">Extra Motivation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Take progress pictures on Day 1 & Day 7</li>
                <li>Create a workout playlist to keep moving</li>
                <li>Challenge a friend & do it together</li>
                <li>Share your progress on Instagram @HobbyConnectr</li>
              </ul>
            </section>
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
    <ul className="list-disc pl-6 space-y-2">
      {workouts[day]?.map((exercise, index) => (
        <li key={index} className="text-gray-700">{exercise}</li>
      )) || (
        <li className="text-gray-700">Rest and reflect on your progress!</li>
      )}
    </ul>
  )
} 