import { useEffect } from 'react'
import { PageWrapper } from '@/components/ui'
import { ProjectCaseStudy } from '@/components/projects'
import { caseStudiesData } from '@/data/caseStudiesData'

export function CreditCardAnalysisPage() {
  const projectData = caseStudiesData['credit-card-analysis']

  useEffect(() => {
    document.title = 'Credit Card Customer Analysis — Case Study | Raj Jadav'
  }, [])

  return (
    <PageWrapper withGrid={true} className="overflow-x-hidden">
      <ProjectCaseStudy data={projectData} />
    </PageWrapper>
  )
}
