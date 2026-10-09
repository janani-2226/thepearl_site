// Global site content — edit placeholders in [brackets] before launch.
export const site = {
  name: "The Pearl",
  legal: "Pearl Edu Ventures",
  tagline: "Learning. Skills. Technology.",
  blurb: "A group of education brands built and run from Chennai.",
  email: "hello@thepearl.world",
  phone: "+91 [00000 00000]",
  address: ["[Street address],", "Choolaimedu, Chennai,", "Tamil Nadu [600094]"],
  instagram: "@thepearl.world",
  hours: "Monday – Saturday, 9:30 am – 6:30 pm",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/brands", label: "Brands" },
  { to: "/founders", label: "Founders" },
  { to: "/team", label: "Team" },
];

export const stats = [
  { value: "1,000+", label: "learners trained since [year]" },
  { value: "50+", label: "institutions we have worked inside" },
  { value: "10+", label: "trainers on the group faculty" },
  { value: "5", label: "brands under Pearl Edu Ventures" },
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
      "Most of our students already know the answer. What they need is twenty seconds of nerve to say it out loud — and that can be taught.",
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
  { year: "[Year]", text: "Pearl Edu Ventures formed to run all five brands under one standard." },
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

export const team = {
  leadership: [
    { name: "[Name]", role: "Head of Academics", note: "Owns curriculum and assessment across all five brands." },
    { name: "[Name]", role: "Head of Operations", note: "Runs scheduling, venues and institution partnerships." },
    { name: "[Name]", role: "Faculty Lead", note: "Trains and observes every trainer before they take a batch." },
  ],
  faculty: [
    { name: "[Trainer name]", role: "Communication Trainer", brand: "Beehive" },
    { name: "[Trainer name]", role: "Placement Trainer", brand: "Project Punch" },
    { name: "[Trainer name]", role: "Placement Trainer", brand: "Project Punch" },
    { name: "[Trainer name]", role: "Maths & Science Tutor", brand: "Smart3 Tuitions" },
    { name: "[Trainer name]", role: "English Tutor", brand: "Smart3 Tuitions" },
    { name: "[Trainer name]", role: "Grammar Trainer", brand: "Abacus of English" },
    { name: "[Trainer name]", role: "Corporate Trainer", brand: "Shyamraj" },
    { name: "[Trainer name]", role: "Communication Trainer", brand: "Beehive" },
  ],
};
