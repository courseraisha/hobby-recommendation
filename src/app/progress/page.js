"use client"

import { useState, useEffect } from "react"
import { Calendar, Trophy, Clock, Plus, Trash2, Save, X, Target, FlameIcon as Fire } from "lucide-react"

export default function ProgressTracker() {
  const [hobbies, setHobbies] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [newHobby, setNewHobby] = useState({
    name: "",
    startDate: new Date().toISOString().split("T")[0],
    milestones: [],
    timeSpent: 0,
    level: "Beginner",
    streak: 0,
    lastActive: new Date().toISOString().split("T")[0],
  })
  const [editingMilestone, setEditingMilestone] = useState(null)
  const [newMilestone, setNewMilestone] = useState("")

  const levels = ["Beginner", "Intermediate", "Advanced", "Expert"]

  useEffect(() => {
    const savedHobbies = localStorage.getItem("hobbies")
    if (savedHobbies) {
      setHobbies(JSON.parse(savedHobbies))
    } else {
      setHobbies([
        {
          id: 1,
          name: "Photography",
          startDate: "2024-01-15",
          milestones: [
            { title: "Learned basic composition", completed: true, completedAt: "2024-01-20" },
            { title: "Manual mode mastery", completed: false },
            { title: "First photo exhibition", completed: false },
          ],
          timeSpent: 25,
          level: "Beginner",
          streak: 5,
          lastActive: "2024-02-10",
          notes: "Working on understanding aperture and shutter speed",
        },
      ])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("hobbies", JSON.stringify(hobbies))
  }, [hobbies])

  const getStats = () => {
    return {
      totalTime: hobbies.reduce((acc, hobby) => acc + hobby.timeSpent, 0),
      totalMilestones: hobbies.reduce((acc, hobby) => acc + hobby.milestones.filter((m) => m.completed).length, 0),
      activeStreak: Math.max(...hobbies.map((h) => h.streak), 0),
      totalHobbies: hobbies.length,
    }
  }

  const stats = getStats()

  const getProgressPercentage = (hobby) => {
    if (!hobby.milestones.length) return 0
    return Math.round((hobby.milestones.filter((m) => m.completed).length / hobby.milestones.length) * 100)
  }

  const addHobby = () => {
    if (newHobby.name.trim()) {
      setHobbies([...hobbies, { ...newHobby, id: Date.now() }])
      setNewHobby({
        name: "",
        startDate: new Date().toISOString().split("T")[0],
        milestones: [],
        timeSpent: 0,
        level: "Beginner",
        streak: 0,
        lastActive: new Date().toISOString().split("T")[0],
      })
      setShowAddModal(false)
    }
  }

  const deleteHobby = (index) => {
    if (confirm("Are you sure you want to delete this hobby?")) {
      const updatedHobbies = hobbies.filter((_, i) => i !== index)
      setHobbies(updatedHobbies)
    }
  }

  const addMilestone = (hobbyIndex) => {
    if (newMilestone.trim()) {
      const updatedHobbies = [...hobbies]
      updatedHobbies[hobbyIndex].milestones.push({
        title: newMilestone,
        completed: false,
      })
      setHobbies(updatedHobbies)
      setNewMilestone("")
      setEditingMilestone(null)
    }
  }

  const updateTimeSpent = (index, hours) => {
    const updatedHobbies = [...hobbies]
    updatedHobbies[index].timeSpent = Math.max(0, updatedHobbies[index].timeSpent + hours)
    setHobbies(updatedHobbies)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Time</p>
              <p className="text-xl font-semibold">{stats.totalTime}h</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Trophy className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Milestones</p>
              <p className="text-xl font-semibold">{stats.totalMilestones}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Fire className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Best Streak</p>
              <p className="text-xl font-semibold">{stats.activeStreak}d</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Target className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active</p>
              <p className="text-xl font-semibold">{stats.totalHobbies}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hobbies Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-gray-100"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold text-[#8B1E3F]">{hobby.name}</h2>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>Started {new Date(hobby.startDate).toLocaleDateString()}</span>
                </div>
              </div>
              <button onClick={() => deleteHobby(index)} className="text-red-500 hover:text-red-700">
                <Trash2 className="h-5 w-5" />
              </button>
            </div>

            {/* Progress Circle */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="32" cy="32" r="28" stroke="#f3f4f6" strokeWidth="8" fill="none" />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#8B1E3F"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${getProgressPercentage(hobby) * 1.76} 176`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                  {getProgressPercentage(hobby)}%
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm">
                  <Fire className="h-4 w-4 text-orange-500" />
                  <span>{hobby.streak} day streak</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{hobby.timeSpent}h spent</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-[#8B1E3F] flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Milestones
                </h3>
                <button
                  onClick={() => setEditingMilestone(index)}
                  className="text-sm bg-[#8B1E3F]/10 text-[#8B1E3F] px-3 py-1 rounded-full hover:bg-[#8B1E3F]/20 transition-colors"
                >
                  Add Milestone
                </button>
              </div>

              {editingMilestone === index && (
                <div className="flex gap-2 animate-fade-in">
                  <input
                    type="text"
                    value={newMilestone}
                    onChange={(e) => setNewMilestone(e.target.value)}
                    className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#8B1E3F]/20 focus:border-[#8B1E3F] outline-none"
                    placeholder="New milestone..."
                  />
                  <button
                    onClick={() => addMilestone(index)}
                    className="bg-[#8B1E3F] text-white rounded-lg px-3 hover:bg-[#8B1E3F]/90 transition-colors"
                  >
                    <Save className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setEditingMilestone(null)}
                    className="bg-gray-100 text-gray-600 rounded-lg px-3 hover:bg-gray-200 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              )}

              <div className="space-y-2">
                {hobby.milestones.map((milestone, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="relative pt-1">
                      <input
                        type="checkbox"
                        checked={milestone.completed}
                        onChange={() => {
                          const updatedHobbies = [...hobbies]
                          updatedHobbies[index].milestones[idx].completed = !milestone.completed
                          updatedHobbies[index].milestones[idx].completedAt = milestone.completed
                            ? null
                            : new Date().toISOString()
                          setHobbies(updatedHobbies)
                        }}
                        className="peer h-5 w-5 rounded-md border-2 border-[#8B1E3F] text-[#8B1E3F] focus:ring-[#8B1E3F]"
                      />
                      <div className="absolute inset-0 bg-[#8B1E3F] scale-0 peer-checked:scale-100 transition-transform duration-200 rounded-md opacity-20 mt-1"></div>
                    </div>
                    <div className="flex-1">
                      <p
                        className={`transition-all duration-200 ${milestone.completed ? "line-through text-gray-400" : ""}`}
                      >
                        {milestone.title}
                      </p>
                      {milestone.completedAt && (
                        <p className="text-xs text-gray-400 mt-0.5">
                          Completed {new Date(milestone.completedAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-[#8B1E3F]" />
                <span className="font-medium">{hobby.timeSpent}h spent</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => updateTimeSpent(index, -1)}
                    className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <button
                    onClick={() => updateTimeSpent(index, 1)}
                    className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              <select
                value={hobby.level}
                onChange={(e) => {
                  const updatedHobbies = [...hobbies]
                  updatedHobbies[index].level = e.target.value
                  setHobbies(updatedHobbies)
                }}
                className="border rounded-lg px-3 py-1 text-sm bg-white focus:ring-2 focus:ring-[#8B1E3F]/20 focus:border-[#8B1E3F] outline-none"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
        >
          <Plus className="h-5 w-5" />
          Add New Hobby
        </button>
      </div>

      {/* Add Hobby Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl animate-scale-in">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-transparent bg-clip-text mb-6">
              Add New Hobby
            </h2>
            <input
              type="text"
              value={newHobby.name}
              onChange={(e) => setNewHobby({ ...newHobby, name: e.target.value })}
              placeholder="Hobby name"
              className="w-full border rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-[#8B1E3F]/20 focus:border-[#8B1E3F] outline-none"
            />
            <input
              type="date"
              value={newHobby.startDate}
              onChange={(e) => setNewHobby({ ...newHobby, startDate: e.target.value })}
              className="w-full border rounded-lg px-4 py-3 mb-6 focus:ring-2 focus:ring-[#8B1E3F]/20 focus:border-[#8B1E3F] outline-none"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-5 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={addHobby}
                className="px-5 py-2.5 bg-gradient-to-r from-[#8B1E3F] to-[#E3425F] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Add Hobby
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

