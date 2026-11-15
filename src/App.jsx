import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { HomePage } from '@/pages/HomePage'
import { SignovaAiPage } from '@/pages/projects/SignovaAiPage'
import { VoiceTranscriptRatingPage } from '@/pages/projects/VoiceTranscriptRatingPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/signova-ai" element={<SignovaAiPage />} />
          <Route path="/projects/voice-transcript-rating" element={<VoiceTranscriptRatingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
