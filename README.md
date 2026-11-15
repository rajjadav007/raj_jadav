# Raj Jadav — Personal Portfolio

> Personal portfolio of **Raj Jadav**, an aspiring AI Engineer specializing in Machine Learning, Computer Vision, and Natural Language Processing systems.  
> *"Building intelligent systems. Turning ideas into practical AI applications."*

---

## 📌 Project Overview

This repository contains the production-ready personal portfolio web application for Raj Jadav. Built following the **Modern Minimal + Swiss Editorial** design system, the application highlights core AI/ML engineering competencies, verified education credentials, hackathon achievements, and three comprehensive technical case studies.

### Core Highlights
- **Design Philosophy**: Swiss Editorial minimalism — high-contrast monochrome typography, precision grid overlays, subtle ambient liquid glass optics, and functional micro-interactions.
- **Strict JavaScript Stack**: Pure JavaScript ES6+ implementation with **zero TypeScript (.ts/.tsx)** files and zero build overhead.
- **Dedicated Case Studies**: In-depth architectural case studies for three production-grade AI/ML projects with problem formulations, system architectures, technical trade-offs, and future roadmaps.
- **Component System**: 14 custom design system primitives for consistent spacing, typography hierarchy, and accessibility across all viewports.
- **Production Performance**: Vite 6 bundler delivering sub-second hot module replacement and optimized production chunks.

---

## 🛠 Tech Stack & Architecture

| Layer | Technologies |
|---|---|
| **Core Framework** | React 18 (`react`, `react-dom`) |
| **Language** | Pure JavaScript ES6+ (Strict: 0 TypeScript files) |
| **Build & Tooling** | Vite 6, PostCSS, Autoprefixer |
| **Routing** | React Router v6 (`react-router-dom`) with client-side SPA routing |
| **Styling** | Tailwind CSS 3, Custom CSS Variables / Design Tokens (`src/styles/globals.css`) |
| **Animation** | Motion (`motion/react`) for entrance, layout, and scroll animations |
| **Icons** | Lucide React |
| **Deployment Target** | Vercel (with `vercel.json` SPA rewrite rules) |

---

## 🗺 Application Routes

- `/` — **Homepage**: Full portfolio experience featuring:
  - **Navigation**: Responsive header with glass backdrop blur, section anchor scrolling, and mobile drawer menu.
  - **Hero**: Clean typographic presentation of Raj Jadav, core tagline, project/contact CTAs, and verified GitHub & LinkedIn profiles (no photograph).
  - **About**: Narrative on engineering principles, academic roots at REVA University & Atmiya University, and 4 core engineering tenets.
  - **Technical Skills**: Categorized taxonomy spanning AI/ML, Languages, Frameworks, and Tools.
  - **Featured Projects**: High-level overviews linking directly to dedicated case studies.
  - **Experience & Hackathons**: Rapid prototyping in competitive AI hackathons and prototype delivery.
  - **Achievements & Certifications**: Prototype engineering awards and academic accomplishments.
  - **Education**: MSc in Data Science (REVA University) and BCA (Atmiya University).
  - **Currently Exploring**: Active investigations into Autonomous Agents, Multimodal VLMs, RAG Architectures, and Edge AI.
  - **Contact & Footer**: Functional `mailto:rajjadav0906@gmail.com` link, social links, and copyright.
- `/projects/signova-ai` — **Signova AI Case Study**:
  - Real-time Sign Language Interpretation using Computer Vision.
  - 21 3D hand landmarks tracking with Google MediaPipe.
  - PyTorch lightweight classification model running with low inference latency.
  - Complete architecture diagrams, challenges, and roadmaps.
- `/projects/voice-transcript-rating` — **Voice Transcript Content Rating System Case Study**:
  - Automated voice recording transcription and semantic compliance evaluation.
  - OpenAI Whisper audio transcription pipeline.
  - Contextual NLP embeddings, sentiment evaluation, and policy rating scoring.
  - System pipeline and enterprise compliance workflows.
- **Additional Projects Showcase (Homepage)**:
  - **AI Attendance System**: An AI-based attendance application using computer vision.
  - **Stock Analysis ML**: A machine-learning project focused on stock data analysis.
  - **Voice-Based RAG System**: A voice-enabled Retrieval-Augmented Generation system.
- `/design-system` — **Design System Preview Route**:
  - Visual component catalog showcasing all 14 Swiss Editorial UI primitives, color swatches, typography hierarchy, and liquid glass cards.

---

## 💻 Local Development & Verification

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/rajjadav007/raj-jadav-portfolio.git
cd raj-jadav-portfolio

# Install dependencies
npm install
```

### Verification Commands

```bash
# Start local development server with Vite HMR
npm run dev

# Run ESLint across all files
npm run lint

# Build production bundle to dist/
npm run build

# Preview the local production build
npm run preview
```

---

## 🚀 Manual Vercel Deployment Guide

> **Security & Deployment Notice**:
> - **DO NOT** commit or expose sensitive credentials, API keys, or private tokens.
> - This application is a fully static client-side SPA; **no environment variables are required** for production build or deployment.
> - Follow the manual steps below to deploy directly via the Vercel CLI or the Vercel Web Dashboard.

### Method A: Deployment via Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   # Or run on-demand with npx:
   npx vercel
   ```

2. **Authenticate with Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy Preview**:
   Run the command in the project root:
   ```bash
   vercel
   ```
   Respond to the interactive setup prompts:
   - `Set up and deploy "~/Raj_Jadav"?` → **`y`**
   - `Which scope do you want to deploy to?` → *(Select your Vercel account)*
   - `Link to existing project?` → **`N`** (or `y` if previously linked)
   - `What's your project's name?` → **`raj-jadav-portfolio`**
   - `In which directory is your code located?` → **`./`**
   - `Want to modify these settings?` → **`N`** *(Vite preset is automatically detected)*

4. **Verify Preview Deployment**:
   Vercel will output a unique preview URL (e.g., `https://raj-jadav-portfolio-<hash>.vercel.app`). Open this URL in your browser to verify homepage and project routes.

5. **Deploy to Production**:
   Once satisfied with the preview, run:
   ```bash
   vercel --prod
   ```
   Vercel will build and deploy the production bundle to your primary domain (e.g., `https://raj-jadav-portfolio.vercel.app`).

---

### Method B: Deployment via Vercel Dashboard (Git Import)

1. **Push to Remote Repository**:
   Ensure all changes are committed and pushed to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete portfolio, case studies, and deployment setup"
   git push origin main
   ```

2. **Import Project in Vercel**:
   - Navigate to [https://vercel.com/dashboard](https://vercel.com/dashboard).
   - Click the **"Add New..."** button and select **"Project"**.
   - Select your Git provider (GitHub) and import `rajjadav007/raj-jadav-portfolio`.

3. **Configure Project Settings**:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   - **Environment Variables**: *(None required — leave empty)*

4. **Deploy**:
   - Click **"Deploy"**.
   - Vercel will clone the repository, run `npm install`, execute `npm run build`, and publish the generated `dist/` directory.

---

## ⚙️ SPA Routing Rewrites (`vercel.json`)

Single Page Applications (SPAs) that utilize client-side routing (such as `react-router-dom`) require web servers to route all requests back to `index.html`. Without rewrite rules, navigating directly or refreshing deep links such as `/projects/signova-ai` or `/design-system` on a static server produces an HTTP 404 Not Found error.

This repository includes a preconfigured `vercel.json` file in the project root:

```json
{
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### How It Works:
- The `source: "/(.*)"` pattern matches all incoming URLs that do not directly resolve to a static asset file in `dist/`.
- The rewrite destination `"/index.html"` returns the main HTML entrypoint while preserving the browser's address bar path.
- `react-router-dom` in the client executes in the browser and mounts the appropriate route component (`HomePage`, `SignovaAiPage`, `VoiceTranscriptRatingPage`, `CreditCardAnalysisPage`, or `DesignSystemPage`).

---

## 📄 License & Contact

- **Author**: Raj Jadav
- **Email**: [rajjadav0906@gmail.com](mailto:rajjadav0906@gmail.com)
- **GitHub**: [@rajjadav007](https://github.com/rajjadav007)
- **LinkedIn**: [raj-jadav90](https://www.linkedin.com/in/raj-jadav90/)

All rights reserved © 2026 Raj Jadav.
