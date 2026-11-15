import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { PageWrapper } from '@/components/ui'
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  AdditionalProjectsSection,
  ExperienceSection,
  AchievementsSection,
  EducationSection,
  ExploringSection,
  ContactSection,
} from '@/components/sections'

export function HomePage() {
  const { hash } = useLocation()
  const shouldReduceMotion = useReducedMotion()

  // Ensure document title reflects portfolio identity
  useEffect(() => {
    document.title = 'Raj Jadav | AI Engineer'
  }, [])

  // Handle smooth scroll when navigating to hash directly
  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '')
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [hash])

  return (
    <PageWrapper withGrid={true} className="overflow-x-hidden">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        {/* 01 // Hero: Identity, Verified Tagline, CTAs, Social */}
        <HeroSection />

        {/* 02 // Background: Narrative, REVA / Atmiya Academic Context, 4 Tenets */}
        <AboutSection />

        {/* 03 // Capabilities: 4 Categorized Skill Taxonomy */}
        <SkillsSection />

        {/* 04 // Featured Work: 2 Selected Applications with Case Study Links */}
        <ProjectsSection />

        {/* 04B // Additional Projects: 3 Short Showcases */}
        <AdditionalProjectsSection />

        {/* 05 // Track Record: Hackathon Sprints, Signova AI Prototype Highlight */}
        <ExperienceSection />

        {/* 06 // Recognition: Applied Research & Systems Engineering Milestones */}
        <AchievementsSection />

        {/* 07 // Academic Background: MSc Data Science (REVA) & BCA (Atmiya) */}
        <EducationSection />

        {/* 08 // Continuous Learning: 4 Emerging AI Paradigms */}
        <ExploringSection />

        {/* 09 // Get In Touch: Direct Contact Panel, Verified Mailto, Socials */}
        <ContactSection />
      </motion.div>
    </PageWrapper>
  )
}
