"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TeamMemberCardProps {
  name: string
  role: string
  avatar: string
  bio: string
}

export function TeamMemberCard({ name, role, avatar, bio }: TeamMemberCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="pt-6 text-center">
          <Avatar className="h-24 w-24 mx-auto mb-4">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-primary font-medium">{role}</p>
          <p className="mt-4 text-muted-foreground">{bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}