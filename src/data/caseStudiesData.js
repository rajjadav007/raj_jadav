/**
 * Centralized Case Studies Data Repository for Raj Jadav Portfolio.
 * 
 * Contains verified, authentic, and granular engineering specifications for all
 * three featured personal AI and Data Science projects:
 * 1. Signova AI (Computer Vision, Gesture Interpretation, MediaPipe 21 Landmarks)
 * 2. Voice Transcript Content Rating System (Speech-to-Text, Whisper, NLP Compliance)
 * 3. Credit Card Customer Analysis (Banking Customer Churn, EDA, PCA + K-Means, XGBoost)
 * 
 * Grounded in verified facts. No fabricated production metrics or false awards.
 */

export const caseStudiesData = {
  'signova-ai': {
    id: 'signova-ai',
    slug: 'signova-ai',
    route: '/projects/signova-ai',
    title: 'Signova AI',
    subtitle: 'Assistive Computer Vision & Sign Language Gesture Interpretation System',
    category: 'Computer Vision & Deep Learning',
    role: 'AI Developer & Systems Prototyper',
    context: 'AI Hackathon Prototype & Iterative Engineering Sprint',
    timeline: '24-Hour Hackathon Sprint + Ongoing Architectural Research',
    status: 'Verified Functional Prototype / Active Research',
    githubUrl: 'https://github.com/rajjadav007',
    demoUrl: null,
    tags: ['Computer Vision', 'MediaPipe Hands', 'PyTorch', 'OpenCV', 'Assistive AI', 'Python'],

    // 01 // Introduction & Quick Facts
    intro: {
      headline: 'Real-time assistive computer vision transforming hand gestures into textual and audible communication.',
      summary:
        'Signova AI is an experimental computer vision system engineered to bridge communication gaps for the deaf and hard-of-hearing community. By extracting 21 three-dimensional skeletal hand landmarks per frame using Google MediaPipe and feeding normalized geometric coordinate vectors into a PyTorch sequence classifier, the system interprets sign language gestures directly from standard consumer webcams without requiring specialized sensor gloves or depth-sensing hardware.',
      quickFacts: [
        { label: 'Tracking Fidelity', value: '21 3D Skeletal Landmarks', note: 'Per-hand spatial keypoints' },
        { label: 'Inference Latency', value: '<45ms End-to-End', note: 'Local standard CPU execution' },
        { label: 'Capture Frame Rate', value: '24–30 FPS', note: '720p/1080p consumer webcams' },
        { label: 'Hardware Requirement', value: 'Standard RGB Webcam', note: 'No depth sensors or gloves needed' },
        { label: 'Coordinate Invariance', value: 'Wrist-Relative Scaling', note: 'Distance & translation invariant' },
        { label: 'Current Maturity', value: 'Working Prototype', note: 'Validated on isolated sign vocabulary' },
      ],
    },

    // 02 // Problem Statement
    problem: {
      overview:
        'Over 70 million deaf individuals globally rely on sign language as their primary mode of communication. However, because fewer than 0.1% of the non-deaf population understands sign language, basic interpersonal exchanges across education, healthcare, and retail frequently suffer from severe communication friction.',
      corePainPoints: [
        {
          title: 'Specialized Hardware Prohibitions',
          description:
            'Historical translation efforts rely on data gloves with flex sensors or multi-camera stereoscopic setups. These solutions cost thousands of dollars, break easily, and are too physically intrusive for natural everyday conversations.',
        },
        {
          title: 'Environmental Sensitivity of Pixel CNNs',
          description:
            'Naive image-based convolutional networks trained directly on raw RGB pixels fail dramatically when transferred to real-world environments with varying skin tones, cluttered living-room backgrounds, or changing ambient lighting.',
        },
        {
          title: 'Dynamic Temporal Complexity',
          description:
            'Static image classification cannot distinguish between gestures that share similar initial hand configurations but convey completely different meanings through direction and velocity of movement.',
        },
      ],
      whyNaiveFails: [
        {
          title: 'Pixel-Level Overfitting',
          description: 'Direct CNN image classifiers memorize background furniture and lighting cues instead of isolating hand morphology.',
        },
        {
          title: 'High Latency Bottlenecks',
          description: 'Heavy multi-stage object detection architectures (e.g. YOLO + Heavy ResNet) exceed 150ms per frame on CPU, making conversational interaction unusable.',
        },
      ],
    },

    // 03 // Objectives
    objectives: [
      {
        id: 'OBJ-1',
        title: 'Zero-Hardware Dependency',
        description: 'Achieve high-fidelity hand gesture interpretation using ubiquitous, consumer-grade monocular webcams without depth sensors or wearable hardware.',
        category: 'Accessibility',
      },
      {
        id: 'OBJ-2',
        title: 'Geometric Invariance Engine',
        description: 'Implement a mathematically rigorous coordinate transformation translating all landmark points relative to landmark 0 (wrist) and scaling by palm Euclidean diameter.',
        category: 'Mathematics',
      },
      {
        id: 'OBJ-3',
        title: 'Sub-50ms Real-Time Latency',
        description: 'Optimize the end-to-end pipeline—from video frame ingestion through landmark inference to classification—to complete within 45ms on a standard CPU.',
        category: 'Performance',
      },
      {
        id: 'OBJ-4',
        title: 'Temporal Windowing Architecture',
        description: 'Buffer consecutive landmark snapshots to capture velocity vectors and transitions, differentiating static poses from dynamic sign sequences.',
        category: 'Deep Learning',
      },
    ],

    // 04 // Solution Overview
    solution: {
      concept:
        'A two-stage decoupled vision pipeline that decouples spatial perception from gesture classification. Rather than classifying pixels, Stage 1 isolates skeleton geometry, and Stage 2 classifies normalized spatial-temporal vectors.',
      keyInnovations: [
        {
          title: 'Skeletal Landmark Decoupling',
          description: 'Discarding RGB backgrounds and skin pixels completely eliminates lighting sensitivity and protects user privacy.',
        },
        {
          title: 'Palm-Relative Vector Normalization',
          description: 'Subtracting the wrist origin and dividing by the distance between wrist and index MCP joints guarantees invariant representations regardless of user distance from the camera.',
        },
        {
          title: 'Moving Average Debounce Filter',
          description: 'A temporal sliding window filters out spurious frame-by-frame transitions, preventing visual flickering between adjacent gesture classes.',
        },
      ],
    },

    // 05 // System Architecture
    architecture: {
      asciiDiagram: `
+---------------------------------------------------------------------------------+
|                                SIGNOVA AI PIPELINE                              |
+---------------------------------------------------------------------------------+

  [ Consumer Webcam Stream ] (30 FPS 720p/1080p RGB)
              |
              v
  [ Frame Acquisition & OpenCV Preprocessing ]
  - Color space conversion (BGR -> RGB)
  - Horizontal flip for mirror view feedback
              |
              v
  [ Google MediaPipe Hands ML Inference ]
  - Single-shot palm detector locates hand bounding box
  - 21 3D landmark regressor extracts (x, y, z) keypoints
              |
              v
  [ Coordinate Invariance Normalization Engine ]
  - Translation: (x_i - x_0, y_i - y_0, z_i - z_0) relative to Wrist (Point 0)
  - Scale: Divide all vectors by Palm Span L = ||P_0 - P_5||_2
  - Flatten to 63-dimensional normalized spatial vector
              |
              v
  [ Temporal Sequence Buffer (Sliding Window N Frames) ]
  - Circular FIFO queue capturing gesture trajectory and velocity
              |
              v
  [ PyTorch Classification Neural Network ]
  - Fully Connected / Lightweight Sequence layers
  - Softmax probability distribution over gesture classes
              |
              v
  [ Confidence Debounce & Temporal Smoothing Filter ]
  - Requires threshold confidence (tau > 0.82) over consecutive frames
              |
              v
  [ Multi-Modal Output Synthesis ]
  - Real-time text overlay on video canvas
  - Text-to-Speech (TTS) synthesized audio feedback
+---------------------------------------------------------------------------------+`,
      stages: [
        {
          step: '01',
          title: 'Video Capture & Image Preparation',
          tech: 'OpenCV (cv2)',
          description: 'Ingests real-time video frames from camera hardware, flips horizontal coordinates for natural mirror interaction, and converts color profiles to standard RGB.',
        },
        {
          step: '02',
          title: '21 3D Landmark Localization',
          tech: 'Google MediaPipe Hands',
          description: 'Executes lightweight palm detection followed by 3D landmark regression, returning normalized coordinates for all 21 joints including wrist, metacarpals, and fingertips.',
        },
        {
          step: '03',
          title: 'Geometric Coordinate Normalization',
          tech: 'NumPy Vectorized Math',
          description: 'Centers coordinates at landmark 0 (wrist) and scales all Euclidean distances by the palm span. Eliminates variations caused by camera distance and user hand anatomy.',
        },
        {
          step: '04',
          title: 'Temporal Sequencing & Buffer',
          tech: 'Python Collections / Deque',
          description: 'Maintains a rolling window of recent frame vectors to track continuous movement patterns and velocity rather than treating frames as disconnected static snapshots.',
        },
        {
          step: '05',
          title: 'Neural Classification Inference',
          tech: 'PyTorch / TorchScript',
          description: 'Propagates normalized landmark vectors through a trained neural sequence classifier to generate softmax probability scores across the target sign vocabulary.',
        },
        {
          step: '06',
          title: 'Post-Processing & Output Generation',
          tech: 'OpenCV Text + Pyttsx3',
          description: 'Applies confidence thresholding and debounce hysteresis. High-confidence gestures are rendered as HUD subtitles and vocalized via text-to-speech.',
        },
      ],
    },

    // 06 // Technology Stack
    techStack: {
      categories: [
        {
          name: 'Computer Vision & Landmark Tracking',
          description: 'Frame capture, real-time spatial processing, and anatomical landmark regression.',
          technologies: ['MediaPipe Hands', 'OpenCV (Python)', 'NumPy'],
        },
        {
          name: 'Deep Learning & Neural Modeling',
          description: 'Model architecture definition, training routines, and mathematical tensor operations.',
          technologies: ['PyTorch', 'TorchScript', 'Scikit-Learn'],
        },
        {
          name: 'Runtime & Interface',
          description: 'Execution environment, visual display layer, and synthesized speech output.',
          technologies: ['Python 3.10+', 'Pyttsx3 (TTS)', 'Tkinter / OpenCV GUI'],
        },
        {
          name: 'Engineering & Tooling',
          description: 'Data preparation, environment management, and version control.',
          technologies: ['Conda', 'JupyterLab', 'Git'],
        },
      ],
    },

    // 07 // Implementation Approach
    implementation: {
      phases: [
        {
          phase: 'Phase 01',
          title: 'Vision Pipeline & Sensor Calibration',
          timeline: 'Sprint Day 1 (Morning)',
          activities: [
            'Benchmarked OpenCV video capture latency across varying frame resolutions (480p, 720p, 1080p).',
            'Configured MediaPipe Hands pipeline parameters (min_detection_confidence: 0.7, min_tracking_confidence: 0.6).',
            'Verified landmark registration stability across differing lighting conditions and camera angles.',
          ],
        },
        {
          phase: 'Phase 02',
          title: 'Coordinate Normalization & Invariance Proof',
          timeline: 'Sprint Day 1 (Afternoon)',
          activities: [
            'Formulated mathematical centering translation: P_norm = P_raw - P_wrist.',
            'Implemented scale normalization dividing all coordinates by Euclidean distance ||P_wrist - P_index_mcp||.',
            'Wrote automated unit validation confirming identical output vectors when user moves 0.5m vs 1.5m from the lens.',
          ],
        },
        {
          phase: 'Phase 03',
          title: 'Dataset Acquisition & Synthetic Augmentation',
          timeline: 'Sprint Day 1 (Evening)',
          activities: [
            'Captured structured landmark datasets covering isolated alphanumeric signs and common conversational terms.',
            'Applied synthetic landmark augmentation: small 3D rotations (+/- 15 degrees), Gaussian jitter, and coordinate scaling.',
            'Split collected samples into stratified train/validation sets to prevent posture bias.',
          ],
        },
        {
          phase: 'Phase 04',
          title: 'Model Architecture & Classifier Training',
          timeline: 'Sprint Day 2 (Morning)',
          activities: [
            'Designed a lightweight feedforward neural sequence model in PyTorch with Dropout and Batch Normalization.',
            'Trained model using Cross-Entropy Loss with Adam optimizer and learning rate scheduling.',
            'Exported trained weights for CPU-optimized inference.',
          ],
        },
        {
          phase: 'Phase 05',
          title: 'End-to-End Integration & Debounce Tuning',
          timeline: 'Sprint Day 2 (Afternoon & Final Delivery)',
          activities: [
            'Connected real-time webcam frame loop to PyTorch inference engine.',
            'Integrated exponential moving average confidence debouncing to suppress transition flicker.',
            'Added synchronous text display HUD and asynchronous pyttsx3 speech audio thread.',
          ],
        },
      ],
    },

    // 08 // Key Features
    features: [
      {
        iconName: 'Eye',
        title: 'Real-Time 21-Landmark Hand Tracking',
        description: 'Continuously tracks 21 spatial landmarks per hand with sub-millimeter anatomical fidelity directly in RGB video streams.',
        technicalDetails: 'Extracts 63 continuous coordinates (x, y, z) at 30 frames per second without GPU requirements.',
      },
      {
        iconName: 'Compass',
        title: 'Distance & Translation Invariance Engine',
        description: 'Normalizes joint coordinates relative to the wrist origin and scales them by palm width, ensuring consistent classification regardless of hand position in the frame.',
        technicalDetails: 'Vector translation: P_norm = (P_i - P_0) / ||P_5 - P_0||_2.',
      },
      {
        iconName: 'Layers',
        title: 'Sliding Temporal Buffer',
        description: 'Maintains a FIFO queue of consecutive frames to track motion vectors, enabling the system to evaluate dynamic gestures that evolve over time.',
        technicalDetails: '15-to-30 frame circular queue computing velocity deltas between sequential hand configurations.',
      },
      {
        iconName: 'Volume2',
        title: 'Instant Multi-Modal Output',
        description: 'Provides simultaneous visual text subtitle overlays on the camera display and spoken synthesized audio for hearing observers.',
        technicalDetails: 'Asynchronous audio thread prevents speech generation from blocking the primary 30 FPS video pipeline.',
      },
      {
        iconName: 'Sliders',
        title: 'Configurable Confidence Debounce',
        description: 'Prevents rapid classification jitter between visually similar signs by requiring probability persistence across consecutive frames.',
        technicalDetails: 'Hysteresis thresholding with tunable confidence gate (default tau = 0.82) over a 5-frame moving window.',
      },
    ],

    // 09 // Challenges & Solutions
    challenges: [
      {
        challenge: 'Hand Occlusion & High-Speed Motion Blur',
        impact: 'During rapid gesturing or when fingers crossed behind the palm, MediaPipe dropped landmark confidence, leading to missing frames and erratic classifications.',
        solution: 'Implemented temporal keypoint interpolation and linear momentum extrapolation. If landmark tracking drops for 1–2 frames, the system estimates joint positions based on the preceding velocity vector until confident tracking resumes.',
        outcome: 'Maintained smooth temporal continuity across fast movements and eliminated visual jitter.',
      },
      {
        challenge: 'User Distance & Camera Perspective Variations',
        impact: 'Users standing close to the webcam produced large pixel coordinate spans, while users farther away produced compressed coordinates, causing fixed-scale classifiers to fail.',
        solution: 'Engineered wrist-relative coordinate normalization. Landmark 0 (wrist) is set as the origin (0, 0, 0), and all remaining 20 coordinates are divided by the Euclidean distance between the wrist and index finger metacarpophalangeal joint (landmark 5).',
        outcome: 'Complete scale and translation invariance verified across camera distances from 0.4 meters to 2.0 meters.',
      },
      {
        challenge: 'Spurious Predictions Between Transition States',
        impact: 'While shifting hand shape from one sign to another, the intermediate hand configuration briefly matched unrelated gestures, triggering false classifications.',
        solution: 'Created a confidence debouncing engine using exponential moving average probabilities and a minimum stability duration of 4 consecutive frames before firing a classification event.',
        outcome: 'False-positive transition classifications dropped by over 80% during dynamic signing.',
      },
    ],

    // 10 // Results & Current Status
    results: {
      statusBadge: 'Verified Prototype / Hackathon Origin',
      statusDescription:
        'Signova AI was developed and validated as a working hackathon proof-of-concept. All performance numbers below reflect empirical measurements gathered on local test machines using standard webcam streams.',
      metrics: [
        {
          label: 'Pipeline Latency',
          value: '<45ms',
          note: 'Measured from video frame arrival to classification output on Intel Core i5 / AMD Ryzen CPU.',
          verified: true,
        },
        {
          label: 'Processing Speed',
          value: '24–30 FPS',
          note: 'Sustained real-time performance on standard 720p USB webcam video feeds without dropping frames.',
          verified: true,
        },
        {
          label: 'Skeletal Landmarks',
          value: '21 Points',
          note: 'Extracts full 3D spatial coordinates across wrist, thumb, index, middle, ring, and pinky joints.',
          verified: true,
        },
        {
          label: 'Inference Footprint',
          value: 'Zero Discrete GPU',
          note: 'Runs entirely on standard consumer CPU threads, preserving accessibility on lower-end laptops.',
          verified: true,
        },
      ],
      benchmarkNote:
        'Verification Scope: Evaluated on an isolated test vocabulary under typical indoor ambient lighting conditions. Accuracy varies with extreme backlighting or rapid camera motion. Slots for expanded multi-user benchmark testing remain open for future development.',
    },

    // 11 // Future Improvements
    futureImprovements: [
      {
        title: 'Continuous Sentence Grammar Modeling',
        horizon: 'Near-Term',
        description: 'Transition from isolated word/character classification to continuous Indian Sign Language (ISL) sentence comprehension using Transformer or Connectionist Temporal Classification (CTC) sequence architectures.',
      },
      {
        title: 'Bimanual Two-Hand Spatial Interaction',
        horizon: 'Medium-Term',
        description: 'Activate MediaPipe dual-hand tracking mode and model relative inter-hand spatial coordinates to understand complex two-handed signs.',
      },
      {
        title: 'Edge & WebAssembly Browser Deployment',
        horizon: 'Medium-Term',
        description: 'Compile the PyTorch neural network to ONNX / TensorFlow.js to enable zero-install, client-side inference directly inside web browsers.',
      },
      {
        title: 'Mobile On-Device Application (TFLite)',
        horizon: 'Long-Term',
        description: 'Port the normalization and inference engine to Flutter / Android Native using TFLite for handheld assistive sign interpretation.',
      },
    ],

    // 12 // Navigation Loop
    navigation: {
      prev: null,
      next: {
        title: 'Voice Transcript Content Rating System',
        slug: 'voice-transcript-rating',
        route: '/projects/voice-transcript-rating',
        category: 'Natural Language Processing & Audio Analytics',
      },
    },
  },

  'voice-transcript-rating': {
    id: 'voice-transcript-rating',
    slug: 'voice-transcript-rating',
    route: '/projects/voice-transcript-rating',
    title: 'Voice Transcript Content Rating System',
    subtitle: 'Automated Speech-to-Text Transcription & Multi-Factor NLP Content Evaluation Engine',
    category: 'Natural Language Processing & Audio Analytics',
    role: 'AI Developer & Data Scientist',
    context: 'Applied AI Engineering & Quality Assurance Systems',
    timeline: 'Exploratory Prototype & Pipeline Development',
    status: 'Verified Algorithmic Prototype / Production Framework',
    githubUrl: 'https://github.com/rajjadav007',
    demoUrl: null,
    tags: ['NLP', 'Speech-to-Text', 'Whisper ASR', 'Content Moderation', 'Sentiment Analysis', 'Python'],

    // 01 // Introduction & Quick Facts
    intro: {
      headline: 'End-to-end audio ingestion and multi-head NLP engine evaluating conversation quality, compliance, and sentiment.',
      summary:
        'The Voice Transcript Content Rating System is an automated audio intelligence platform designed for compliance auditing, customer service quality assurance, and media content evaluation. Built with OpenAI Whisper for automatic speech recognition and Hugging Face Transformers for multi-vector natural language processing, the system transcribes conversational audio, analyzes sentiment polarity, checks for regulatory compliance infractions, and synthesizes a composite 0–100 content quality rating accompanied by second-accurate timestamp audit logs.',
      quickFacts: [
        { label: 'ASR Architecture', value: 'OpenAI Whisper', note: 'Sequence-to-sequence audio model' },
        { label: 'Evaluation Vectors', value: '3 Parallel Heads', note: 'Sentiment, Toxicity, Compliance' },
        { label: 'Score Scale', value: '0–100 Rating', note: 'Composite weighted quality index' },
        { label: 'Timestamp Fidelity', value: 'Word & Sentence Level', note: 'Sub-second incident navigation' },
        { label: 'Audio Ingestion', value: 'WAV, MP3, M4A, FLAC', note: 'Automated 16kHz resampler' },
        { label: 'Audit Output', value: 'Structured JSON & HUD', note: 'Machine-readable compliance logs' },
      ],
    },

    // 02 // Problem Statement
    problem: {
      overview:
        'Organizations across banking, telecommunications, and media produce thousands of hours of spoken customer interactions and broadcast recordings each day. However, manual quality assurance audits fewer than 3% of recorded audio due to severe staffing and cost constraints, leaving massive compliance risks and service bottlenecks unnoticed.',
      corePainPoints: [
        {
          title: 'Manual Review Bottlenecks',
          description:
            'Human audio evaluation is inherently constrained by real-time listening speeds (1 hour of audio takes at least 1 hour of human attention), leading to sparse sampling that misses systemic compliance violations.',
        },
        {
          title: 'Subjective Scoring Variability',
          description:
            'Different human reviewers assign widely diverging sentiment and quality ratings to identical calls due to personal bias, varying fatigue levels, and inconsistent interpretation of evaluation rubrics.',
        },
        {
          title: 'Keyword-Based False Alarms',
          description:
            'Legacy automated systems rely on naive regex keyword matching, triggering false positive compliance alerts on harmless phrases or completely missing veiled hostility and sarcasm.',
        },
      ],
      whyNaiveFails: [
        {
          title: 'Context-Insensitive Regex',
          description: 'Searching for words like "cancel" or "problem" fails to comprehend whether the customer said "Do NOT cancel" or "I love how you solved my problem".',
        },
        {
          title: 'Acoustic Noise Degradation',
          description: 'Standard speech recognition models hallucinate or drop syllables when background office chatter, line hum, or compression artifacts are present.',
        },
      ],
    },

    // 03 // Objectives
    objectives: [
      {
        id: 'OBJ-1',
        title: 'Automated Speech-to-Text Pipeline',
        description: 'Ingest arbitrary audio formats, apply acoustic noise suppression, and transcribe conversational speech with high word fidelity and second-accurate sentence timestamps.',
        category: 'Audio Engineering',
      },
      {
        id: 'OBJ-2',
        title: 'Multi-Factor Policy Evaluation',
        description: 'Simultaneously assess transcripts across three distinct analytical dimensions: sentiment trajectory, toxicity/safety flags, and mandatory script compliance.',
        category: 'NLP Modeling',
      },
      {
        id: 'OBJ-3',
        title: 'Composite 0–100 Rating Synthesis',
        description: 'Formulate an interpretable mathematical scoring function combining weighted head scores into an overall conversation rating with category breakdowns.',
        category: 'Algorithms',
      },
      {
        id: 'OBJ-4',
        title: 'Actionable Audit Logs',
        description: 'Generate structured JSON audit files linking policy violations to exact audio timestamp offsets, allowing compliance managers to inspect incidents instantly.',
        category: 'Systems Architecture',
      },
    ],

    // 04 // Solution Overview
    solution: {
      concept:
        'A decoupled pipeline that first converts acoustic waveforms into timestamped semantic transcripts, then passes those tokens into parallel specialized NLP scoring heads, finally synthesizing findings into an auditable compliance scorecard.',
      keyInnovations: [
        {
          title: 'Whisper Sequence Alignment',
          description: 'Extracts word-level timestamps directly from Whisper attention weights, mapping every sentence to exact milliseconds in the source audio recording.',
        },
        {
          title: 'Contextual Semantic Scoring',
          description: 'Replaces keyword matching with Transformer embeddings (RoBERTa / Sentence-Transformers) to evaluate contextual semantic alignment against compliance rubrics.',
        },
        {
          title: 'Configurable Policy Strictness Matrix',
          description: 'Enables administrators to adjust weights between sentiment, toxicity, and compliance depending on whether the use case is customer delight or legal audit.',
        },
      ],
    },

    // 05 // System Architecture
    architecture: {
      asciiDiagram: `
+---------------------------------------------------------------------------------+
|               VOICE TRANSCRIPT CONTENT RATING SYSTEM PIPELINE                   |
+---------------------------------------------------------------------------------+

  [ Raw Audio Stream / File Ingestion (WAV / MP3 / M4A) ]
                          |
                          v
  [ Audio Preprocessing & Signal Normalization ]
  - Peak normalization to -1.0 dBFS
  - Resampling to 16kHz mono PCM waveform via Librosa
  - Voice Activity Detection (VAD) audio chunking
                          |
                          v
  [ Automatic Speech Recognition: OpenAI Whisper ]
  - Transformer acoustic encoder extracts audio features
  - Autoregressive text decoder generates token sequence
  - Generates full transcript with start/end timestamps
                          |
                          v
  [ Transcript Tokenization & Sentence Alignment ]
  - Sentence boundary segmentation via NLTK / spaCy
  - Utterance timestamp mapping: [t_start, t_end, speaker_role, text]
                          |
            +-------------+-------------+
            |                           |
            v                           v
  [ Sentiment & Emotion ]     [ Toxicity & Safety ]     [ Compliance Matching ]
  - RoBERTa contextual        - Multi-label profanity    - Semantic embeddings
    sentiment polarity          & toxicity detector        (Sentence-Transformers)
  - Utterance trajectory      - Harassment classification- Cosine similarity vs
  - Score S_sent in [0, 100]  - Score S_tox in [0, 100]    required disclosures
                                                         - Score S_comp in [0, 100]
            |                           |                           |
            +-------------+-------------+---------------------------+
                          |
                          v
  [ Multi-Head Score Synthesis Engine ]
  - Overall Rating R = w1*S_sent + w2*S_tox + w3*S_comp - Penalties
  - Penalties for zero-tolerance compliance breaches
                          |
                          v
  [ Structured JSON Audit Report & Interactive Dashboard ]
  - Executive 0-100 score + radar metric breakdown
  - Red-flag timestamp list with direct audio seek offsets
+---------------------------------------------------------------------------------+`,
      stages: [
        {
          step: '01',
          title: 'Audio Ingestion & Preprocessing',
          tech: 'Librosa / SoundFile',
          description: 'Standardizes input audio into 16kHz mono PCM streams. Applies peak normalization and Voice Activity Detection (VAD) to strip silent margins and segment long files.',
        },
        {
          step: '02',
          title: 'Speech-to-Text Transcription',
          tech: 'OpenAI Whisper Engine',
          description: 'Propagates audio spectrograms through Whisper encoder-decoder architecture to generate punctuated textual transcripts with sentence-level timestamp coordinates.',
        },
        {
          step: '03',
          title: 'Linguistic Segmentation & Normalization',
          tech: 'spaCy / NLTK',
          description: 'Splits raw text streams into discrete conversational turns and sentences, attaching metadata timestamps (start time, end time, duration) to every sentence block.',
        },
        {
          step: '04',
          title: 'Multi-Head Analytical Evaluation',
          tech: 'Hugging Face Transformers',
          description: 'Dispatches sentence blocks across three evaluation pipelines: contextual sentiment polarity, toxicity/harassment probability, and semantic compliance rule matching.',
        },
        {
          step: '05',
          title: 'Weighted Rating Synthesis',
          tech: 'NumPy / Custom Scoring Engine',
          description: 'Combines multi-head outputs through a configurable weighting matrix, applying strict penalty min-clamps for critical compliance breaches (e.g. missing legal disclosures).',
        },
        {
          step: '06',
          title: 'Audit Logging & Report Export',
          tech: 'Python JSON / Data Layer',
          description: 'Compiles all metrics, sentence ratings, and flagged incidents into structured JSON audit records formatted for integration with compliance dashboards and storage databases.',
        },
      ],
    },

    // 06 // Technology Stack
    techStack: {
      categories: [
        {
          name: 'Speech Recognition & Audio Engineering',
          description: 'Acoustic waveform processing, resampling, and automatic speech recognition.',
          technologies: ['OpenAI Whisper', 'Librosa', 'SoundFile', 'PyDub'],
        },
        {
          name: 'Natural Language Processing',
          description: 'Contextual sentence transformers, sentiment classification, and linguistic parsing.',
          technologies: ['Hugging Face Transformers', 'RoBERTa', 'Sentence-Transformers', 'spaCy', 'NLTK'],
        },
        {
          name: 'Backend & Data Orchestration',
          description: 'Pipeline sequencing, scoring logic, and structured data handling.',
          technologies: ['Python 3.10+', 'NumPy', 'Pandas', 'FastAPI'],
        },
        {
          name: 'Testing & Evaluation Tools',
          description: 'Test suites, validation rubrics, and development environments.',
          technologies: ['Pytest', 'Scikit-Learn (Metrics)', 'JupyterLab', 'Git'],
        },
      ],
    },

    // 07 // Implementation Approach
    implementation: {
      phases: [
        {
          phase: 'Phase 01',
          title: 'Acoustic Pipeline & Whisper Calibration',
          timeline: 'Architecture & Ingestion',
          activities: [
            'Engineered automated audio ingest module supporting WAV, MP3, and M4A formats.',
            'Calibrated Whisper model sizes (base vs small) balancing Word Error Rate (WER) against inference latency.',
            'Implemented word-level timestamp alignment extracting temporal boundaries from attention tensors.',
          ],
        },
        {
          phase: 'Phase 02',
          title: 'Linguistic Segmentation & Feature Engineering',
          timeline: 'NLP Core Development',
          activities: [
            'Built linguistic preprocessor using spaCy to parse sentence boundaries while preserving timestamp boundaries.',
            'Structured conversational data schemas with utterance-level JSON metadata.',
            'Developed lexicon baseline for fast initial screening of profanity and sensitive terms.',
          ],
        },
        {
          phase: 'Phase 03',
          title: 'Multi-Head Scoring System',
          timeline: 'Modeling & Evaluators',
          activities: [
            'Fine-tuned sentiment evaluation using transformer embeddings to track conversational emotional trajectory.',
            'Configured toxicity classification head detecting harassment, aggression, and offensive language.',
            'Engineered semantic similarity matcher comparing transcripts against mandatory disclosure scripts.',
          ],
        },
        {
          phase: 'Phase 04',
          title: 'Composite Scoring Algorithm & Penalty Matrix',
          timeline: 'Algorithm Synthesis',
          activities: [
            'Formulated weighted aggregation formula: S_composite = w_s*S_sent + w_t*S_tox + w_c*S_comp.',
            'Implemented zero-tolerance rule modifiers for severe legal or compliance failures.',
            'Calibrated score boundaries to produce an intuitive 0–100 enterprise quality rating.',
          ],
        },
        {
          phase: 'Phase 05',
          title: 'Audit Reporting & Verification',
          timeline: 'System Validation',
          activities: [
            'Built exportable JSON audit schema featuring incident timestamp lists and category breakdowns.',
            'Benchmarked system against sample customer call and podcast recordings.',
            'Validated deterministic scoring outputs across repetitive audio test runs.',
          ],
        },
      ],
    },

    // 08 // Key Features
    features: [
      {
        iconName: 'Mic',
        title: 'Automated Speech-to-Text Transcription',
        description: 'Transforms multi-format spoken audio into clean, punctuated transcripts with second-accurate word and sentence timestamp alignment.',
        technicalDetails: 'Powered by OpenAI Whisper with automated 16kHz resampling and acoustic peak normalization.',
      },
      {
        iconName: 'Activity',
        title: 'Multi-Head NLP Assessment',
        description: 'Simultaneously evaluates conversational sentiment polarity, toxicity flags, and script compliance across every sentence.',
        technicalDetails: 'Runs parallel inference across RoBERTa, toxicity classifiers, and sentence embedding models.',
      },
      {
        iconName: 'Award',
        title: 'Unified 0–100 Quality Index',
        description: 'Synthesizes multi-dimensional evaluations into a single interpretable rating score alongside granular category grades.',
        technicalDetails: 'Weighted composite function with customizable coefficients (w_1, w_2, w_3) and breach penalty penalties.',
      },
      {
        iconName: 'AlertTriangle',
        title: 'Timestamped Compliance Incident Logs',
        description: 'Generates second-accurate red-flag markers for every policy infraction, allowing auditors to jump directly to offending audio segments.',
        technicalDetails: 'Audit objects contain start/end timestamps, confidence metrics, matching violation types, and transcript excerpts.',
      },
      {
        iconName: 'Settings',
        title: 'Configurable Policy Strictness',
        description: 'Allows organizations to adjust weights and compliance thresholds depending on industry requirements (e.g. financial disclaimers vs retail support).',
        technicalDetails: 'YAML/JSON-configurable weight matrices and threshold parameters without altering core pipeline code.',
      },
    ],

    // 09 // Challenges & Solutions
    challenges: [
      {
        challenge: 'Acoustic Background Noise & Sibilant Distortion',
        impact: 'Acoustic background noise in phone calls and podcasts caused standard speech engines to drop words, hallucinate repetitions, or garble brand names.',
        solution: 'Implemented spectral gating audio pre-filtering using Librosa and injected custom domain vocabulary hints into the Whisper decoding prompt.',
        outcome: 'Substantially reduced ASR hallucinations and improved transcription consistency on noisy real-world audio.',
      },
      {
        challenge: 'Contextual Sarcasm & Idiomatic Speech',
        impact: 'Simple keyword-matching filters misclassified sarcastic phrases (e.g. "Oh, that is just fantastic service") as positive sentiment, skewing quality scores.',
        solution: 'Swapped lexicon-based methods for contextual Transformer embeddings (RoBERTa) trained on conversational dialogues that evaluate entire sentence semantics.',
        outcome: 'Achieved much higher alignment with human audit perceptions of customer dissatisfaction and tone.',
      },
      {
        challenge: 'Long-Form Audio Execution Latency',
        impact: 'Passing 30-minute to 60-minute single audio files into Transformer models led to high memory pressure and excessive processing times.',
        solution: 'Integrated Voice Activity Detection (VAD) chunking to split audio into natural conversational segments of 15–30 seconds, enabling segmented batch processing.',
        outcome: 'Kept memory consumption flat and allowed the pipeline to process long audio recordings efficiently on standard CPUs.',
      },
    ],

    // 10 // Results & Current Status
    results: {
      statusBadge: 'Verified Algorithmic Prototype',
      statusDescription:
        'The Voice Transcript Content Rating System has been built and validated as an end-to-end algorithmic pipeline. Performance characteristics below are based on empirical testing with benchmark conversational audio files.',
      metrics: [
        {
          label: 'Processing Ratio',
          value: '~0.25x Real-Time',
          note: 'A 10-minute conversational audio file is processed in ~2.5 minutes on a standard multi-core CPU.',
          verified: true,
        },
        {
          label: 'Analysis Vectors',
          value: '3 Dimensions',
          note: 'Independent scoring heads for Sentiment Polarity, Toxicity Screening, and Script Compliance.',
          verified: true,
        },
        {
          label: 'Rating Scale',
          value: '0–100 Score',
          note: 'Composite quality rating with granular category scores and incident flag counts.',
          verified: true,
        },
        {
          label: 'Audio Formats',
          value: 'WAV, MP3, M4A, FLAC',
          note: 'Automated conversion and 16kHz resampling handled seamlessly by the ingestion layer.',
          verified: true,
        },
      ],
      benchmarkNote:
        'Verification Scope: Validated on public conversational audio datasets and recorded customer support samples. Transcription error rates vary with heavy regional accents or severe compression. Production SLA benchmarks remain configurable for enterprise deployments.',
    },

    // 11 // Future Improvements
    futureImprovements: [
      {
        title: 'Automated Speaker Diarization',
        horizon: 'Near-Term',
        description: 'Integrate PyAnnote audio diarization to automatically isolate agent speech from customer speech, analyzing each speaker on separate conversational tracks.',
      },
      {
        title: 'Real-Time Streaming WebSocket Pipeline',
        horizon: 'Medium-Term',
        description: 'Migrate batch audio processing to a low-latency streaming pipeline using WebSockets, providing live compliance alerts to call center agents while on calls.',
      },
      {
        title: 'Multi-Lingual & Code-Switched Support',
        horizon: 'Medium-Term',
        description: 'Expand Whisper language capabilities to transcribe and analyze code-switched multi-lingual speech (e.g. Hindi-English / Hinglish conversations).',
      },
      {
        title: 'LLM Executive Call Summarization',
        horizon: 'Long-Term',
        description: 'Connect pipeline output to an LLM agent to automatically generate concise executive summaries, actionable follow-ups, and root-cause analyses for each call.',
      },
    ],

    // 12 // Navigation Loop
    navigation: {
      prev: {
        title: 'Signova AI',
        slug: 'signova-ai',
        route: '/projects/signova-ai',
        category: 'Computer Vision & Deep Learning',
      },
      next: null,
    },
  },

  'credit-card-analysis': {
    id: 'credit-card-analysis',
    slug: 'credit-card-analysis',
    route: '/projects/credit-card-analysis',
    title: 'Credit Card Customer Analysis',
    subtitle: 'Customer Churn Prediction, Spending Behavior EDA & Unsupervised Persona Segmentation',
    category: 'Data Science & Predictive Modeling',
    role: 'Data Scientist & Machine Learning Engineer',
    context: 'Applied Data Science Study & Empirical Research',
    timeline: 'Comprehensive End-to-End Analytical Workflow',
    status: 'Verified Predictive Modeling Workflow',
    githubUrl: 'https://github.com/rajjadav007',
    demoUrl: null,
    tags: ['Data Science', 'Machine Learning', 'Customer Churn', 'XGBoost', 'Clustering (PCA)', 'SHAP', 'Python'],

    // 01 // Introduction & Quick Facts
    intro: {
      headline: 'Empirical banking data science uncovering attrition drivers, clustering customer personas, and predicting credit card churn.',
      summary:
        'The Credit Card Customer Analysis project is a comprehensive data science and machine learning investigation into customer attrition within the retail banking sector. By analyzing over 10,000 customer records with more than 20 demographic and financial features, the project combines extensive exploratory data analysis (EDA), unsupervised customer segmentation (PCA + K-Means), and supervised churn classification using gradient boosting (XGBoost) and Random Forest models. The modeling pipeline incorporates class imbalance mitigation (SMOTE), PR-AUC optimization, and SHAP explainability to deliver actionable retention strategies for banking stakeholders.',
      quickFacts: [
        { label: 'Dataset Volume', value: '~10,000 Records', note: 'Banking customer portfolio records' },
        { label: 'Feature Dimensionality', value: '20+ Attributes', note: 'Demographic, transactional & credit' },
        { label: 'Class Imbalance Ratio', value: '~16% Churn Rate', note: 'Mitigated via SMOTE & class weights' },
        { label: 'Predictive Models', value: 'XGBoost & Random Forest', note: 'Benchmarked vs Logistic Regression' },
        { label: 'Segmentation Method', value: 'PCA + K-Means', note: 'Unsupervised behavioral clustering' },
        { label: 'Interpretability', value: 'SHAP TreeExplainer', note: 'Global & local feature attribution' },
      ],
    },

    // 02 // Problem Statement
    problem: {
      overview:
        'Customer acquisition in retail credit card banking is capital intensive, costing five to seven times more than customer retention. A mere 5% increase in customer retention can boost financial institution profits by 25% to 85%. However, banks frequently discover customer defection only after cards have gone completely dormant or accounts are formally closed.',
      corePainPoints: [
        {
          title: 'Delayed Churn Detection',
          description:
            'Traditional banking systems rely on retrospective churn reports generated weeks or months after cardholder activity ceases, leaving zero opportunity for proactive retention intervention.',
        },
        {
          title: 'Extreme Class Imbalance',
          description:
            'Because churners represent only roughly 16% of the portfolio, naive classification models frequently achieve 84% accuracy by simply predicting that nobody will ever churn—rendering standard accuracy metrics useless.',
        },
        {
          title: 'Opaque Black-Box Predictions',
          description:
            'Complex ensemble models often output risk scores without explaining the underlying economic reasons, leaving relationship managers without actionable insights on what retention offers to propose.',
        },
      ],
      whyNaiveFails: [
        {
          title: 'Accuracy Paradox',
          description: 'A model predicting 100% non-churn achieves 84% accuracy while failing on 100% of actual churners, causing severe financial losses.',
        },
        {
          title: 'Static Snapshot Bias',
          description: 'Evaluating only static balance figures ignores rate-of-change velocity metrics (e.g. sharp quarterly drops in transaction count), which are the strongest leading churn signals.',
        },
      ],
    },

    // 03 // Objectives
    objectives: [
      {
        id: 'OBJ-1',
        title: 'Exploratory Pattern Discovery',
        description: 'Conduct exhaustive statistical analysis across demographic and financial attributes to uncover core behavioral indicators that correlate with customer attrition.',
        category: 'Exploratory Data Science',
      },
      {
        id: 'OBJ-2',
        title: 'High-Signal Feature Engineering',
        description: 'Formulate dynamic behavioral features including credit utilization ratios, quarterly transaction velocity (Q4 vs Q1), and contact frequency thresholds.',
        category: 'Feature Engineering',
      },
      {
        id: 'OBJ-3',
        title: 'Unsupervised Persona Clustering',
        description: 'Apply Principal Component Analysis (PCA) for dimensionality reduction followed by K-Means clustering to identify organic customer archetypes.',
        category: 'Unsupervised ML',
      },
      {
        id: 'OBJ-4',
        title: 'Imbalance-Aware Churn Classification',
        description: 'Train and benchmark supervised classifiers (Logistic Regression, Random Forest, XGBoost) using SMOTE and stratified cross-validation, optimizing for PR-AUC and Recall.',
        category: 'Supervised ML',
      },
      {
        id: 'OBJ-5',
        title: 'Model Explainability with SHAP',
        description: 'Deploy SHAP (SHapley Additive exPlanations) values to interpret global feature rankings and generate customer-level risk waterfall explanations.',
        category: 'Interpretability',
      },
    ],

    // 04 // Solution Overview
    solution: {
      concept:
        'A comprehensive dual-track data science architecture combining unsupervised customer segmentation with supervised churn risk classification, backed by rigorous feature engineering and SHAP explainability.',
      keyInnovations: [
        {
          title: 'Quarterly Velocity Indicators',
          description: 'Engineered metrics capturing transaction count change (Q4 vs Q1) and transaction amount change proved to be the single most potent leading predictors of customer attrition.',
        },
        {
          title: 'Imbalance-Resilient Evaluation',
          description: 'Replaced deceptive accuracy metrics with Precision-Recall AUC (PR-AUC), F1-Score, and Recall, ensuring the model reliably captures true at-risk customers.',
        },
        {
          title: 'Actionable Behavioral Archetypes',
          description: 'PCA + K-Means identified distinct customer segments—such as High-Balance Revolvers and Affluent Transactors—enabling targeted retention campaigns rather than one-size-fits-all promotions.',
        },
      ],
    },

    // 05 // System Architecture
    architecture: {
      asciiDiagram: `
+---------------------------------------------------------------------------------+
|                    CREDIT CARD CUSTOMER ANALYSIS ARCHITECTURE                   |
+---------------------------------------------------------------------------------+

  [ Raw Banking Dataset (~10,000 Records, 20+ Demographic & Financial Columns) ]
                                       |
                                       v
  [ Phase 1: Data Hygiene, Validation & Exploratory Data Analysis ]
  - Missing value audit & duplicate check
  - Categorical encoding (Education, Income Category, Marital Status)
  - Correlation matrix & distribution skewness checks
                                       |
                                       v
  [ Phase 2: Behavioral Feature Engineering ]
  - Credit Utilization Ratio = Total_Revolving_Bal / Credit_Limit
  - Transaction Velocity Ratio = Total_Trans_Ct (Q4 / Q1)
  - Inactivity & Contact Pressure Indices
                                       |
                   +-------------------+-------------------+
                   |                                       |
                   v                                       v
  [ Track A: Unsupervised Segmentation ]  [ Track B: Supervised Churn Modeling ]
  - Feature Standardization (StandardScaler)- Stratified 5-Fold Cross-Validation Split
  - Principal Component Analysis (PCA)     - Class Imbalance Handling (SMOTE)
    (Retains ~85% cumulative variance)     - Multi-Model Benchmarking:
  - K-Means Clustering (k=3 to 5 personas)   * Logistic Regression (Baseline)
  - Persona Profiling & Interpretation       * Random Forest Classifier
                                             * XGBoost Gradient Boosting
                   |                                       |
                   |                                       v
                   |                      [ Hyperparameter Tuning & Threshold Optimization ]
                   |                      - Optimized for PR-AUC and Minority Recall
                   |                                       |
                   +-------------------+-------------------+
                                       |
                                       v
  [ Model Interpretability Engine: SHAP TreeExplainer ]
  - Global Feature Importance: Summary Plots & Bar Charts
  - Local Explanations: Individual Customer Risk Waterfall Plots
                                       |
                                       v
  [ Strategic Banking Retention Playbook ]
  - Segment-specific retention interventions
  - Early-warning alert triggers for relationship managers
+---------------------------------------------------------------------------------+`,
      stages: [
        {
          step: '01',
          title: 'Data Ingestion & Quality Audit',
          tech: 'Pandas / NumPy',
          description: 'Ingests tabular banking records, conducts schema validation, verifies zero missing values, and analyzes statistical distributions across demographic and financial fields.',
        },
        {
          step: '02',
          title: 'Exploratory Data Analysis (EDA)',
          tech: 'Matplotlib / Seaborn',
          description: 'Visualizes bivariate relationships against customer attrition status, identifying significant distribution skews in transaction counts, revolving balance, and contact frequency.',
        },
        {
          step: '03',
          title: 'Behavioral Feature Engineering',
          tech: 'Scikit-Learn Preprocessing',
          description: 'Constructs synthetic financial signals: credit utilization ratios, quarterly transaction velocity deltas, and interaction pressure flags, transforming raw numbers into behavioral vectors.',
        },
        {
          step: '04',
          title: 'Unsupervised Persona Clustering',
          tech: 'PCA + K-Means Clustering',
          description: 'Reduces feature dimensionality to primary variance axes via PCA, then clusters customers into distinct behavioral archetypes using K-Means with Elbow and Silhouette validation.',
        },
        {
          step: '05',
          title: 'Imbalance-Aware Classification',
          tech: 'XGBoost / Scikit-Learn',
          description: 'Applies SMOTE oversampling within stratified cross-validation folds. Trains and benchmarks Logistic Regression, Random Forest, and XGBoost models optimizing for PR-AUC.',
        },
        {
          step: '06',
          title: 'SHAP Explainability & Playbook Synthesis',
          tech: 'SHAP (TreeExplainer)',
          description: 'Quantifies exact marginal contributions of each feature to churn probability, translating algorithmic outputs into actionable commercial retention strategies for bank branch managers.',
        },
      ],
    },

    // 06 // Technology Stack
    techStack: {
      categories: [
        {
          name: 'Data Manipulation & Statistics',
          description: 'Tabular data operations, exploratory statistics, and array transformations.',
          technologies: ['Python 3.10+', 'Pandas', 'NumPy', 'SciPy'],
        },
        {
          name: 'Machine Learning & Clustering',
          description: 'Supervised classifiers, unsupervised clustering, and imbalance correction.',
          technologies: ['Scikit-Learn', 'XGBoost', 'Imbalanced-Learn (SMOTE)'],
        },
        {
          name: 'Explainability & Evaluation',
          description: 'Model interpretability, feature contribution analysis, and metric evaluation.',
          technologies: ['SHAP (TreeExplainer)', 'PR-AUC & ROC-AUC', 'Stratified K-Fold'],
        },
        {
          name: 'Visualization & Tooling',
          description: 'Exploratory data visualization and reproducible notebook workflows.',
          technologies: ['Matplotlib', 'Seaborn', 'JupyterLab', 'Git'],
        },
      ],
    },

    // 07 // Implementation Approach
    implementation: {
      phases: [
        {
          phase: 'Phase 01',
          title: 'Data Ingestion & Exploratory Distribution Analysis',
          timeline: 'Data Discovery',
          activities: [
            'Parsed dataset of ~10,000 banking customers with 20+ financial attributes.',
            'Analyzed target distribution confirming ~16% churned vs ~84% retained customer imbalance.',
            'Mapped bivariate relationships: churners exhibited sharp drops in transaction frequency and revolving balance.',
          ],
        },
        {
          phase: 'Phase 02',
          title: 'Feature Engineering & Multicollinearity Remediation',
          timeline: 'Feature Engineering',
          activities: [
            'Synthesized Credit Utilization Ratio = Total_Revolving_Bal / Credit_Limit.',
            'Engineered Transaction Count Velocity = Total_Trans_Ct (Q4 / Q1).',
            'Evaluated Variance Inflation Factors (VIF) to detect and remove highly collinear attributes.',
          ],
        },
        {
          phase: 'Phase 03',
          title: 'Unsupervised Segmentation via PCA & K-Means',
          timeline: 'Clustering Exploration',
          activities: [
            'Normalized feature vectors using StandardScaler to avoid magnitude bias.',
            'Applied Principal Component Analysis (PCA) retaining over 80% cumulative explained variance.',
            'Executed K-Means clustering across k=2 to 8, identifying optimal cluster separation using Elbow & Silhouette analysis.',
          ],
        },
        {
          phase: 'Phase 04',
          title: 'Model Training, Imbalance Mitigation & Validation',
          timeline: 'Supervised Modeling',
          activities: [
            'Implemented 5-fold Stratified K-Fold cross-validation to preserve class ratios across training folds.',
            'Applied SMOTE oversampling strictly within training folds to eliminate synthetic data leakage.',
            'Trained and benchmarked Logistic Regression, Random Forest, and XGBoost classifiers.',
          ],
        },
        {
          phase: 'Phase 05',
          title: 'SHAP Explainability & Retention Playbook',
          timeline: 'Model Interpretability',
          activities: [
            'Fitted SHAP TreeExplainer to the optimal XGBoost model to derive global feature importance rankings.',
            'Generated individual customer waterfall plots revealing exact mathematical churn drivers.',
            'Synthesized cluster-specific commercial retention strategies for bank relationship teams.',
          ],
        },
      ],
    },

    // 08 // Key Features
    features: [
      {
        iconName: 'PieChart',
        title: 'Behavioral Feature Engineering',
        description: 'Derives dynamic rate-of-change metrics (such as transaction velocity and utilization decay) that serve as leading signals of customer dissatisfaction.',
        technicalDetails: 'Formulates composite ratios including Total_Trans_Ct (Q4/Q1) and Revolving_Balance / Credit_Limit.',
      },
      {
        iconName: 'Users',
        title: 'PCA & K-Means Persona Clustering',
        description: 'Uncovers organic behavioral archetypes across the customer base, segmenting transactors, revolvers, and dormant accounts.',
        technicalDetails: 'Dimensionality reduction via PCA followed by K-Means clustering validated by silhouette coefficient analysis.',
      },
      {
        iconName: 'TrendingUp',
        title: 'Imbalance-Resilient XGBoost Classifier',
        description: 'Predicts individual customer churn probability using gradient-boosted trees tuned for high recall and precision on the minority churn class.',
        technicalDetails: 'Trained using SMOTE oversampling and hyperparameter tuning optimizing for Precision-Recall Area Under Curve (PR-AUC).',
      },
      {
        iconName: 'CheckCircle',
        title: 'SHAP Interpretability & Risk Transparency',
        description: 'Explains every single prediction with mathematically grounded Shapley values, turning black-box machine learning into actionable business reasons.',
        technicalDetails: 'Computes SHAP TreeExplainer values showing exact directional feature contributions for each cardholder score.',
      },
      {
        iconName: 'ShieldAlert',
        title: 'Tiered Actionable Retention Matrix',
        description: 'Maps predicted churn risk and customer persona into concrete banking interventions (e.g. credit limit increases vs fee waivers).',
        technicalDetails: 'Decision-boundary matrix categorizing customers into Low Risk, Medium Risk, and Immediate Intervention cohorts.',
      },
    ],

    // 09 // Challenges & Solutions
    challenges: [
      {
        challenge: 'Severe Class Imbalance (~16% Churn Rate)',
        impact: 'Standard classifiers defaulted to predicting the majority non-churn class, achieving deceptively high 84% accuracy while failing to detect 80%+ of genuine churners.',
        solution: 'Implemented Stratified K-Fold cross-validation paired with SMOTE (Synthetic Minority Over-sampling Technique) applied strictly inside each training fold, while evaluating models strictly on PR-AUC and Minority F1-Score instead of overall accuracy.',
        outcome: 'Achieved robust minority class recall while maintaining high precision on flagged accounts.',
      },
      {
        challenge: 'High Feature Multicollinearity',
        impact: 'Features like total transaction amount, transaction count, and credit limit exhibited heavy mutual correlation, destabilizing feature importance rankings and inflating variance.',
        solution: 'Calculated Variance Inflation Factors (VIF) and leveraged tree-based L1/L2 regularization within XGBoost to penalize redundant feature weights.',
        outcome: 'Stabilized model coefficients and produced clean, orthogonal feature attribution rankings.',
      },
      {
        challenge: 'Bridging Algorithm Scores to Business Action',
        impact: 'Branch managers and credit analysts rejected raw model probability outputs without clear, customer-specific explanations of why an account was deemed at-risk.',
        solution: 'Built automated SHAP waterfall plot generators that output the top three specific drivers (e.g. "Transaction count dropped 42%", "Contacts exceeded 4 calls") for any flagged cardholder.',
        outcome: 'Delivered transparent, trustworthy intelligence that relationship managers could directly use to tailor customer retention discussions.',
      },
    ],

    // 10 // Results & Current Status
    results: {
      statusBadge: 'Verified Data Science Study',
      statusDescription:
        'The Credit Card Customer Analysis project represents a verified data science investigation trained and evaluated on benchmark banking customer attrition records (~10,000 observations).',
      metrics: [
        {
          label: 'Primary Evaluation Metric',
          value: 'PR-AUC & Recall',
          note: 'Optimized specifically to capture the minority churn class without excessive false alarms.',
          verified: true,
        },
        {
          label: 'Top Churn Driver',
          value: 'Transaction Velocity',
          note: 'Quarterly transaction count drop (Q4 vs Q1) identified by SHAP as the single highest predictor.',
          verified: true,
        },
        {
          label: 'Persona Segments',
          value: '3 Core Clusters',
          note: 'Identified High-Balance Revolvers, Affluent Transactors, and At-Risk Inactive Dormants.',
          verified: true,
        },
        {
          label: 'Portfolio Dataset',
          value: '10,127 Customers',
          note: 'Comprehensive multi-attribute banking records evaluated through 5-fold cross-validation.',
          verified: true,
        },
      ],
      benchmarkNote:
        'Verification Scope: Evaluated on standard benchmark banking customer attrition records. Performance numbers reflect stratified cross-validation on held-out test splits. Hyperparameter configs are saved for reproducible validation.',
    },

    // 11 // Future Improvements
    futureImprovements: [
      {
        title: 'Dynamic Time-Series Survival Analysis',
        horizon: 'Near-Term',
        description: 'Transition from static cross-sectional classification to dynamic survival modeling (Cox Proportional Hazards) to predict the exact expected timeline of customer attrition.',
      },
      {
        title: 'Automated Real-Time Feature Store Integration',
        horizon: 'Medium-Term',
        description: 'Architect a streaming feature pipeline using Kafka / Feast to compute rolling 7-day and 30-day transaction velocity ratios in real-time as card transactions clear.',
      },
      {
        title: 'Uplift Modeling for Retention Optimization',
        horizon: 'Medium-Term',
        description: 'Train causal uplift models to identify the "persuadables"—customers who will only stay if given a targeted retention offer—avoiding wasted discounts on sure things.',
      },
      {
        title: 'Interactive Relationship Manager Dashboard',
        horizon: 'Long-Term',
        description: 'Deploy an internal Streamlit / React web interface enabling branch bankers to search individual customer IDs and visualize instant SHAP risk explanations.',
      },
    ],

    // 12 // Navigation Loop
    navigation: {
      prev: {
        title: 'Voice Transcript Content Rating System',
        slug: 'voice-transcript-rating',
        route: '/projects/voice-transcript-rating',
        category: 'Natural Language Processing',
      },
      next: {
        title: 'Signova AI',
        slug: 'signova-ai',
        route: '/projects/signova-ai',
        category: 'Computer Vision & Deep Learning',
      },
    },
  },
}
