"use client"

import { motion } from "framer-motion"
import { FeatureCard } from "@/components/feature-card"
import { TeamMemberCard } from "@/components/team-member-card"
import { Shield, Users, Zap, Globe } from "lucide-react"

const features = [
  {
    title: "Secure Payments",
    description: "Protected transactions and milestone-based payments for peace of mind.",
    icon: Shield
  },
  {
    title: "Verified Talents",
    description: "Thoroughly vetted freelancers with proven expertise and experience.",
    icon: Users
  },
  {
    title: "Fast Matching",
    description: "Advanced algorithms to connect you with the perfect match quickly.",
    icon: Zap
  },
  {
    title: "Local & Global",
    description: "Connect with Tunisian talent while reaching global opportunities.",
    icon: Globe
  }
]

const team = [
  {
    name: "Leila Mansour",
    role: "Founder & CEO",
    bio: "Former software engineer with a vision to empower Tunisian freelancers.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&auto=format&fit=crop"
  },
  {
    name: "Karim Ben Salem",
    role: "CTO",
    bio: "Tech leader with 15 years of experience in building marketplace platforms.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop"
  },
  {
    name: "Yasmine Trabelsi",
    role: "Head of Operations",
    bio: "Operations expert focused on creating seamless experiences for our community.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop"
  }
]

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl font-bold">Our Mission</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering Tunisian freelancers and businesses to connect, collaborate, 
              and grow in the digital economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Khedma</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="space-y-2"
            >
              <h3 className="text-4xl font-bold text-primary">10K+</h3>
              <p className="text-muted-foreground">Freelancers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="space-y-2"
            >
              <h3 className="text-4xl font-bold text-primary">5K+</h3>
              <p className="text-muted-foreground">Completed Projects</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="space-y-2"
            >
              <h3 className="text-4xl font-bold text-primary">95%</h3>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TeamMemberCard {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}