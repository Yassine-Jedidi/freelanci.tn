"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BriefcaseIcon, MenuIcon, X } from 'lucide-react'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <BriefcaseIcon className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Khedma</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/jobs" className="text-foreground/60 hover:text-foreground">
                Find Work
              </Link>
              <Link href="/talents" className="text-foreground/60 hover:text-foreground">
                Hire Talent
              </Link>
              <Link href="/about" className="text-foreground/60 hover:text-foreground">
                About
              </Link>
              <ModeToggle />
              <Button asChild variant="default">
                <Link href="/signin">Sign In</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/signup">Join Now</Link>
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <div className="flex items-center space-x-2">
              <ModeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/jobs" className="block px-3 py-2 text-foreground/60 hover:text-foreground">
            Find Work
          </Link>
          <Link href="/talents" className="block px-3 py-2 text-foreground/60 hover:text-foreground">
            Hire Talent
          </Link>
          <Link href="/about" className="block px-3 py-2 text-foreground/60 hover:text-foreground">
            About
          </Link>
          <div className="px-3 py-2 space-y-2">
            <Button asChild className="w-full">
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild variant="secondary" className="w-full">
              <Link href="/signup">Join Now</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar