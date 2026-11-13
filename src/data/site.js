// Global site content — edit placeholders in [brackets] before launch.
export const site = {
  name: "The Pearl",
  legal: "Pearl Edu Ventures",
  tagline: "Learning. Skills. Technology.",
  blurb: "A group of education brands built and run from Chennai.",
  email: "hello@thepearl.world",
  phone: "+91-877 859 3044",
  offices: [
    { label: "L&D Lab", lines: ["101/15A, Kutcheri Road,", "Virudhunagar,", "Tamil Nadu 626001"] },
    { label: "GTM Team", lines: ["528, TTK Road, Alwarpet,", "Chennai,", "Tamil Nadu 600018"] },
  ],
  instagram: "@thepearl.world",
  hours: "Monday – Friday, 9:30 am – 5:30 pm",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/brands", label: "Brands" },
  { to: "/team", label: "Team" },
];

export const stats = [
  { value: "5 lakh", label: "learners trained since [year]" },
  { value: "150+", label: "institutions we have worked inside" },
  { value: "150+", label: "trainers on the group faculty" },
  { value: "6", label: "brands under Pearl Edu Ventures" },
];

export const founders = [
  {
    name: "A. Shyamraj",
    role: "Founder",
    bio: [
      "Shyamraj is a professional speaker and Toastmasters champion who has spent [X] years in classrooms, auditoriums and boardrooms teaching people to speak with confidence.",
      "He started The Pearl to take what worked in his own sessions and build it into programmes that other trainers can deliver to the same standard — in schools, colleges and companies across Tamil Nadu.",
    ],
    quote:
      "I start with fear, not grammar.",
    links: [{ label: "shyamraj.in", href: "https://shyamraj.in" }],
  },
  {
    name: "[Co-founder name]",
    role: "Co-founder",
    bio: [
      "[Short paragraph on background — academic, operations or business experience.]",
      "[What they lead at The Pearl — e.g. operations, partnerships, curriculum or finance.]",
    ],
    quote: "[A one-line belief about learning, in their own words.]",
    links: [],
  },
];

export const milestones = [
  { year: "[Year]", text: "Shyamraj begins running communication workshops independently." },
  { year: "[Year]", text: "Beehive Communication Club opens its first open batch in Chennai." },
  { year: "[Year]", text: "Project Punch launches with its first engineering-college partner." },
  { year: "[Year]", text: "Smart3 Tuitions and Abacus of English join the group." },
  { year: "[Year]", text: "Pearl Edu Ventures formed to run all six brands under one standard." },
];

export const values = [
  {
    title: "Speak first, polish later",
    text: "Every session gets learners talking in the first ten minutes. Grammar and structure follow once the nerve is there.",
  },
  {
    title: "Small rooms, real feedback",
    text: "Batches are kept small enough that every learner is heard and corrected by name, every week.",
  },
  {
    title: "One standard everywhere",
    text: "A Pearl session in Madurai is the same session as one in Chennai — same plan, same assessment, same trainer training.",
  },
];

// Team page — photos are hosted on ImageKit; set `image` to the full ImageKit URL.
export const team = {
  memorial: {
    name: "Muthu V R",
    role: "Guiding Light",
    image: "https://ik.imagekit.io/vftyrvygo/Pearl%20World/Muthu%20annachi.png",
    bio: [
      "In loving memory of Muthu V R, whose vision, wisdom and values continue to inspire THE PEARL EDU VENTURES. His legacy remains a guiding force, shaping the organisation's purpose and inspiring its leadership. His belief in education, excellence and service will continue to illuminate the Pearl journey and the generations it seeks to empower.",
    ],
  },
  members: [
    {
      name: "Shyamraj",
      role: "Founder & CEO",
      image: "https://ik.imagekit.io/vftyrvygo/Pearl%20World/aboutus_profile_picture.jpg",
      bio: [
        "The visionary behind THE PEARL EDU VENTURES, Shyamraj leads the group's mission to transform learning through education, communication, skills and technology. He drives the development of its diverse brands, creating opportunities that empower teachers, students and individuals to become confident, capable and future-ready.",
      ],
    },
    {
      name: "Esther",
      role: "Director – Academics & L&D",
      image: "https://ik.imagekit.io/vftyrvygo/Pearl%20World/Esther.png",
      bio: [
        "Esther leads academic excellence and Learning & Development across THE PEARL brands - Beehive, ProjectPunch, Pearl Academy and Smart3Tuitions.",
        "She drives curriculum development, teaching methodologies, educator training and learning standards, ensuring that every programme delivers engaging, structured and impactful learning experiences for teachers, students and individuals.",
      ],
    },
    {
      name: "Kalyan",
      role: "Director – Growth & Partnerships",
      image: "https://ik.imagekit.io/vftyrvygo/Pearl%20World/Kalyan%20Web.jpg",
      bio: [
        "Kalyan drives strategic growth, business development and partnerships across THE PEARL ecosystem. With over 25 years of cross-industry leadership experience, he focuses on market expansion, institutional collaborations, brand positioning and scalable business models to build sustainable education ventures and create long-term value.",
      ],
    },
    {
      name: "Bamini",
      role: "Director – Operations & Schools",
      image: "https://ik.imagekit.io/vftyrvygo/Pearl%20World/Bamini.png",
      imagePosition: "top",
      bio: [
        "Bamini leads operational excellence and school partnerships across THE PEARL. She focuses on programme implementation, institutional relationships, process management and service delivery, ensuring that educational initiatives reach schools effectively and create meaningful learning experiences for students and educators.",
      ],
    },
    {
      name: "Kamala",
      role: "Director – Human Resources & Finance",
      image: "https://ik.imagekit.io/vftyrvygo/Pearl%20World/Kamala.png",
      bio: [
        "Kamala leads people management and financial operations at THE PEARL. She focuses on talent development, organisational culture, financial planning, budgeting and resource management, building a strong, accountable and financially sustainable organisation that supports the group's growth and ambitions.",
      ],
    },
    {
      name: "Maheswari",
      role: "Brand Head – BeeHive Communication Club",
      image: "https://ik.imagekit.io/vftyrvygo/Pearl%20World/Maheswari.png",
      imagePosition: "top",
      bio: [
        "Maheswari leads BeeHive Communication Club, focused on building confident school communicators and leaders. She drives school engagement and programme delivery, helping students develop communicative English, public speaking, self-expression and leadership skills to find their voice and dare to speak.",
      ],
    },
    {
      name: "Selvarubini",
      role: "Brand Head – Abacus of English",
      image: "https://ik.imagekit.io/vftyrvygo/Pearl%20World/rubini.png",
      imagePosition: "top",
      bio: [
        "Selvarubini leads Abacus of English, offering spoken English products for everyone. She focuses on brand development, product outreach and learner engagement, making English learning accessible, practical and engaging while helping individuals build communication skills and confidence for everyday life.",
      ],
    },
    {
      name: "Aruljothi",
      role: "Brand Head – Pearl Academy",
      image: "https://ik.imagekit.io/vftyrvygo/Pearl%20World/Aruljothi.png",
      imagePosition: "top",
      bio: [
        "Aruljothi leads Pearl Academy, dedicated to training teachers to teach English. She drives the academy's programmes and institutional engagement, empowering educators with effective teaching methodologies, language proficiency and classroom confidence to create better learning experiences for students.",
      ],
    },
  ],
};
