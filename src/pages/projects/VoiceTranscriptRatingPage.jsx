import { useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { PageWrapper } from '@/components/ui'
import { ProjectCaseStudy } from '@/components/projects'
import { caseStudiesData } from '@/data/caseStudiesData'

export function VoiceTranscriptRatingPage() {
  const shouldReduceMotion = useReducedMotion()
  const projectData = caseStudiesData['voice-transcript-rating']

  useEffect(() => {
    document.title = 'Voice Transcript Rating — Case Study | Raj Jadav'
  }, [])

  return (
    <PageWrapper withGrid={true} className="overflow-x-hidden">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <ProjectCaseStudy data={projectData} />
      </motion.div>
    </PageWrapper>
  )
}
