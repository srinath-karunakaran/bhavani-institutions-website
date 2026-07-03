// Compact list still used by the Home page "Popular Courses" chip grid.
export const popularCourses = [
  'CBSE Maths',
  'CBSE Science',
  'Olympiad',
  'Cambridge',
  'ICSE',
  'Vedic Maths',
  'Abacus',
  'NEET Foundation',
  'Phonics',
  'Handwriting',
  'Creative Writing',
  'Science Olympiad',
]

// Full Courses page — grouped categories, each course now carries level,
// mode and a short description so cards are informative, not just labels.
export const courseCategories = [
  {
    emoji: '📘',
    title: 'Academic Syllabus Support',
    description:
      'Subject coaching aligned to your school board, powered by our 5X Centum Precision Formula — structured, concept-strong and result-oriented.',
    courses: [
      {
        name: 'CBSE Maths',
        level: 'Grades 6 – 10',
        mode: 'Online & Offline',
        desc: 'Concept-first maths coaching mapped to the CBSE syllabus with weekly assessments.',
      },
      {
        name: 'CBSE Science',
        level: 'Grades 6 – 10',
        mode: 'Online & Offline',
        desc: 'Clear, experiment-backed science teaching that builds real understanding.',
      },
      {
        name: 'ICSE',
        level: 'Grades 6 – 10',
        mode: 'Offline',
        desc: 'Focused ICSE coaching with detailed, application-oriented problem practice.',
      },
      {
        name: 'Cambridge',
        level: 'Grades 6 – 10',
        mode: 'Offline',
        desc: 'Structured support for the Cambridge curriculum and assessment style.',
      },
      {
        name: 'NEET Foundation',
        level: 'Grades 8 – 10',
        mode: 'Offline',
        desc: 'Early foundation in Physics, Chemistry and Biology for future medical aspirants.',
      },
    ],
  },
  {
    emoji: '🧮',
    title: 'Mental Math & Skill Building',
    description:
      'Proven techniques that build speed, accuracy and lifelong numerical confidence in young learners.',
    courses: [
      {
        name: 'Abacus',
        level: 'Ages 5 – 14',
        mode: 'Online & Offline',
        desc: 'An 8-level mental arithmetic program that sharpens focus and calculation speed.',
      },
      {
        name: 'Vedic Maths',
        level: 'Ages 8+',
        mode: 'Online & Offline',
        desc: 'Ancient shortcut methods that make big calculations fast and effortless.',
      },
      {
        name: 'Speed Mental Math',
        level: 'Ages 6+',
        mode: 'Offline',
        desc: 'Timed drills and brain exercises that build confidence with numbers.',
      },
    ],
  },
  {
    emoji: '🏆',
    title: 'Olympiad Preparation',
    description:
      'Focused mock tests, concept deep-dives and performance tracking for competitive examination success.',
    courses: [
      {
        name: 'Maths Olympiad',
        level: 'Grades 3 – 10',
        mode: 'Offline',
        desc: 'Higher-order problem solving with regular mock tests and analysis.',
      },
      {
        name: 'Science Olympiad',
        level: 'Grades 3 – 10',
        mode: 'Offline',
        desc: 'Concept mastery and application practice for science competitions.',
      },
    ],
  },
  {
    emoji: '✍️',
    title: 'Language & Communication Skills',
    description:
      'Building strong reading, writing and expression skills for academic confidence and everyday communication.',
    courses: [
      {
        name: 'Phonics',
        level: 'Ages 4 – 8',
        mode: 'Offline',
        desc: 'Sound-based reading foundation that helps young children read with confidence.',
      },
      {
        name: 'Handwriting Improvement',
        level: 'All ages',
        mode: 'Offline',
        desc: 'Structured correction for neat, legible cursive and print handwriting.',
      },
      {
        name: 'Creative Writing',
        level: 'Grades 4+',
        mode: 'Offline',
        desc: 'Story, essay and expression skills that make writing enjoyable.',
      },
    ],
  },
]

// Highlight band on the Courses page — the 5 pillars of the flagship method.
export const courseMethod = [
  { step: '1', label: 'Free Assessment', desc: 'We understand your child\'s current level before recommending a course.' },
  { step: '2', label: 'Right Course & Batch', desc: 'Placement into the batch that matches age, level and goals.' },
  { step: '3', label: 'Structured Learning', desc: 'Concept-first teaching with regular practice — never rote.' },
  { step: '4', label: 'Weekly Assessment', desc: 'Frequent tests catch gaps early and keep progress on track.' },
  { step: '5', label: 'Parent Reports', desc: 'Regular updates so you always know how your child is growing.' },
]
