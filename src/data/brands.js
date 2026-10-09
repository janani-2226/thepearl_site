// Brand content — one object per brand. Each detail page is built from this file.
// `color` must match a key in tailwind.config.js → theme.extend.colors.brand
export const brands = [
  {
    slug: "beehive",
    name: "Beehive Communication Club",
    short: "Beehive",
    category: "Communication training",
    tagline: "Dare to speak",
    color: "#D49A1C",
    summary:
      "Communication and spoken-English training for school students, college students, teaching faculty and working professionals, delivered on campus or in open batches.",
    intro:
      "Beehive is where most learners meet The Pearl for the first time. It is a club, not a class: every session is built around learners speaking, listening and giving each other feedback, with a trainer guiding the room.",
    audience: ["School students (Class 6–12)", "College students", "Teaching faculty", "Working professionals"],
    programmes: [
      { title: "Spoken English Foundation", duration: "[8] weeks", text: "Everyday conversation, pronunciation and the confidence to start speaking." },
      { title: "Public Speaking Club", duration: "[12] weeks", text: "Prepared speeches, impromptu topics and structured peer evaluation." },
      { title: "Faculty Communication", duration: "[3]-day workshop", text: "Classroom voice, questioning and presentation skills for teachers." },
    ],
    formats: ["On campus", "Open weekend batches", "Online cohorts"],
    outcomes: [
      "Speak for two minutes on an unseen topic without notes",
      "Introduce themselves clearly in any formal setting",
      "Give and receive structured feedback",
    ],
  },
  {
    slug: "project-punch",
    name: "Project Punch",
    short: "Project Punch",
    category: "Campus English",
    tagline: "Power your English",
    color: "#4A2F86",
    summary:
      "An 18-hour placement programme for final-year students: group discussion, interview answers and the confidence to speak in the first five minutes of a room.",
    intro:
      "Project Punch is built for the months before campus placements. It focuses on the exact moments students lose marks — the self-introduction, the group discussion opener and the HR round — and drills them until they feel routine.",
    audience: ["Final-year engineering students", "Final-year arts and science students", "Placement cells"],
    programmes: [
      { title: "Placement Sprint", duration: "18 hours", text: "Six sessions covering GD, HR interviews, email writing and self-introduction." },
      { title: "Mock Interview Day", duration: "1 day", text: "One-to-one mock interviews with written feedback for every student." },
      { title: "Placement Cell Partnership", duration: "Full semester", text: "Planned delivery across departments, with pre- and post-assessment reports." },
    ],
    formats: ["On campus", "Hybrid with recorded practice"],
    outcomes: [
      "A rehearsed, two-minute self-introduction",
      "Confidence to open and steer a group discussion",
      "Clear answers to the ten most common HR questions",
    ],
  },
  {
    slug: "smart3-tuitions",
    name: "Smart3 Tuitions",
    short: "Smart3 Tuitions",
    category: "School tuition",
    tagline: "Learn smart. Score more.",
    color: "#7B3FA0",
    summary:
      "After-school tuition for Classes 6–12 across State Board, CBSE and ICSE, with small batches and weekly parent updates.",
    intro:
      "Smart3 brings the same discipline that runs our communication programmes to academic tuition: small batches, a written plan for every week and a progress note to parents so nobody is surprised at exam time.",
    audience: ["Class 6–10 students", "Class 11–12 students", "Parents"],
    programmes: [
      { title: "Foundation (Class 6–8)", duration: "Academic year", text: "Maths, science and English with a focus on concepts and reading habits." },
      { title: "Board Prep (Class 9–10)", duration: "Academic year", text: "Syllabus completion, weekly tests and full-length revision papers." },
      { title: "Higher Secondary (Class 11–12)", duration: "Academic year", text: "Subject-wise coaching for Maths, Physics, Chemistry, Biology and Accountancy." },
    ],
    formats: ["Centre batches", "Small-group home tuition", "Online"],
    outcomes: [
      "Weekly test scores shared with parents",
      "Batches of [12] students or fewer",
      "Revision plans built around each school's exam calendar",
    ],
  },
  {
    slug: "abacus-of-english",
    name: "Abacus of English",
    short: "Abacus of English",
    category: "English fundamentals",
    tagline: "[Tagline]",
    color: "#17795C",
    summary:
      "Grammar and sentence-building from the ground up, for learners who were taught English but never got to use it.",
    intro:
      "Abacus of English treats grammar the way an abacus treats numbers — as something you build with your hands, one bead at a time. Learners construct sentences step by step until correct English becomes automatic.",
    audience: ["Adults returning to English", "Students from regional-medium schools", "Job seekers"],
    programmes: [
      { title: "Sentence Builder", duration: "[6] weeks", text: "Tenses, word order and the 20 sentence patterns used in everyday English." },
      { title: "Writing Clinic", duration: "[4] weeks", text: "Emails, short paragraphs and forms — written, corrected and rewritten." },
      { title: "Bridge to Speaking", duration: "[4] weeks", text: "Moving from correct sentences on paper to correct sentences out loud." },
    ],
    formats: ["Weekday evening batches", "Weekend batches", "Online"],
    outcomes: [
      "Write a correct, clear paragraph without help",
      "Use all major tenses accurately",
      "Move into a Beehive speaking batch with confidence",
    ],
  },
  {
    slug: "shyamraj",
    name: "Shyamraj",
    short: "Shyamraj",
    category: "Speaking and coaching",
    tagline: "Inspire. Influence. Ignite.",
    color: "#C0392B",
    summary:
      "The founder's own practice — keynotes, teacher workshops and leadership communication sessions for institutions and companies.",
    intro:
      "A. Shyamraj is a professional speaker and Toastmasters champion. His practice is where new ideas are tested before they become Pearl programmes — on stages, in staff rooms and in leadership teams.",
    audience: ["Schools and colleges", "Corporate teams", "Leadership groups", "Conferences and events"],
    programmes: [
      { title: "Keynotes", duration: "45–90 minutes", text: "Talks on confidence, communication and leadership for events and annual days." },
      { title: "Teacher Workshops", duration: "Half day / full day", text: "Classroom presence, voice and student engagement for teaching staff." },
      { title: "Leadership Communication", duration: "[2]-day programme", text: "Presenting, persuading and running meetings for managers and leaders." },
    ],
    formats: ["In person", "Virtual sessions"],
    outcomes: [
      "Talks tailored to the audience and the occasion",
      "Practical tools participants use the next day",
      "Follow-up material for every session",
    ],
    external: { label: "Visit shyamraj.in", href: "https://shyamraj.in" },
  },
];

export const getBrand = (slug) => brands.find((b) => b.slug === slug);
