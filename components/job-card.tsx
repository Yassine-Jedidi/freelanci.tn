"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Briefcase, Clock, DollarSign, MapPin } from "lucide-react"

interface JobCardProps {
  title: string
  company: string
  location: string
  salary: string
  type: string
  skills: string[]
  postedAt: string
}

export function JobCard({
  title,
  company,
  location,
  salary,
  type,
  skills,
  postedAt,
}: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-muted-foreground">{company}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {location}
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                {salary}
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                {type}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {postedAt}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}