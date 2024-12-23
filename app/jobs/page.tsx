"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JobCard } from "@/components/job-card"
import { Search } from "lucide-react"

// Mock data - replace with real API calls
const JOBS = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Tunisia",
    location: "Tunis",
    salary: "$30-50/hr",
    type: "Full-time",
    skills: ["React", "TypeScript", "Next.js"],
    postedAt: "2 days ago"
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "DesignStudio",
    location: "Remote",
    salary: "$25-40/hr",
    type: "Contract",
    skills: ["Figma", "Adobe XD", "UI Design"],
    postedAt: "1 day ago"
  },
  // Add more mock jobs...
]

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold">Find Your Next Opportunity</h1>
          <p className="text-xl text-muted-foreground">
            Browse through hundreds of freelance opportunities
          </p>
        </motion.div>

        <div className="flex gap-4 max-w-2xl mx-auto">
          <Input
            placeholder="Search jobs..."
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
          {JOBS.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </div>
  )
}