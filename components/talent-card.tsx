"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, MapPin } from "lucide-react"

interface TalentCardProps {
  name: string
  title: string
  location: string
  rating: number
  hourlyRate: string
  skills: string[]
  avatar: string
}

export function TalentCard({
  name,
  title,
  location,
  rating,
  hourlyRate,
  skills,
  avatar,
}: TalentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3 className="font-semibold">{name}</h3>
              <p className="text-muted-foreground">{title}</p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                {location}
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-1">
                  ({rating}/5)
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <p className="text-lg font-semibold">{hourlyRate}/hr</p>
          <Button>View Profile</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}