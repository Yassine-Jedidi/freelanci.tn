"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TalentCard } from "@/components/talent-card"
import { Search } from "lucide-react"

// Mock data - replace with real API calls
const TALENTS = [
  {
    id: 1,
    name: "Sarah Ben Ali",
    title: "Full Stack Developer",
    location: "Sfax, Tunisia",
    rating: 4.8,
    hourlyRate: "$35",
    skills: ["React", "Node.js", "MongoDB"],
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Ahmed Mansour",
    title: "UI/UX Designer",
    location: "Tunis, Tunisia",
    rating: 4.9,
    hourlyRate: "$40",
    skills: ["Figma", "Adobe XD", "Webflow"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop"
  },
  // Add more mock talents...
]

export default function Talents() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold">Find Expert Freelancers</h1>
          <p className="text-xl text-muted-foreground">
            Connect with talented professionals for your projects
          </p>
        </motion.div>

        <div className="flex gap-4 max-w-2xl mx-auto">
          <Input
            placeholder="Search talents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-12"
          />
          <Button size="lg" className="w-32">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {TALENTS.map((talent) => (
            <TalentCard key={talent.id} {...talent} />
          ))}
        </div>
      </div>
    </div>
  )
}