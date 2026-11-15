/**
 * Centralized projects repository for Raj Jadav.
 * Contains verified project identifiers, routes, and baseline metadata.
 */
export const featuredProjectsData = [
  {
    id: "signova-ai",
    slug: "signova-ai",
    route: "/projects/signova-ai",
    title: "Signova AI",
    category: "Computer Vision & AI",
    shortDescription: "An AI-powered system designed for assistive vision and gesture interpretation.",
    tags: ["Computer Vision", "Deep Learning", "Python", "AI System"],
    featured: true,
  },
  {
    id: "voice-transcript-rating",
    slug: "voice-transcript-rating",
    route: "/projects/voice-transcript-rating",
    title: "Voice Transcript Content Rating System",
    category: "Natural Language Processing",
    shortDescription: "Automated analysis and rating engine for voice transcription content.",
    tags: ["NLP", "Speech-to-Text", "Content Analysis", "Machine Learning"],
    featured: true,
  },
]

export const additionalProjectsData = [
  {
    id: "ai-attendance-system",
    title: "AI Attendance System",
    category: "Computer Vision",
    description: "An AI-based attendance application using computer vision.",
    tags: ["Computer Vision", "Python", "Machine Learning"],
  },
  {
    id: "stock-analysis-ml",
    title: "Stock Analysis ML",
    category: "Predictive Analytics",
    description: "A machine-learning project focused on stock data analysis.",
    tags: ["Machine Learning", "Data Analysis", "Python"],
  },
  {
    id: "voice-based-rag-system",
    title: "Voice-Based RAG System",
    category: "Speech & Retrieval AI",
    description: "A voice-enabled Retrieval-Augmented Generation system that converts speech into text, retrieves relevant information and generates contextual answers.",
    tags: ["Speech-to-Text", "RAG", "NLP", "Python"],
  },
]

// Backwards-compatible export representing featured projects
export const projectsData = featuredProjectsData

