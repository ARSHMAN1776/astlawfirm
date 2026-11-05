export interface Vacancy {
  id: string;
  title: string;
  intro: string;
  responsibilities: string[];
  experience: string;
  employment: { label: string; value: string }[];
  eligibility: string[];
  howToApply: {
    lead: string;
    addressLines: string[];
    note: string;
  };
}

/**
 * The chambers' current vacancy announcement. Edit the text here and the
 * Careers page updates. Candidates can apply by email, on WhatsApp, or by
 * submitting a CV at the address below.
 */
export const vacancy: Vacancy = {
  id: "office-clerk-legal-office-assistant",
  title: "Office Clerk / Legal Office Assistant",
  intro:
    "AST Law Firm is seeking a responsible, well-organized, motivated and professionally presentable individual to join our legal team.",
  responsibilities: [
    "Maintain and organize legal files and office records.",
    "Prepare, scan, photocopy and arrange legal documents.",
    "Maintain registers and case-related records.",
    "Assist Advocates with court filings and legal documentation.",
    "Handle the dispatch/receipt of letters, notices and official documents.",
    "Maintain daily office correspondence and records.",
    "Assist in scheduling meetings, appointments and official engagements.",
    "Perform basic computer operations, including MS Word and MS Excel.",
    "Maintain strict confidentiality of clients, cases and office matters.",
    "Perform other administrative and office duties assigned by the management.",
  ],
  experience: "Fresh candidates may apply; relevant office/legal experience will be an advantage.",
  employment: [
    { label: "Employment", value: "Full-Time" },
    { label: "Location", value: "Islamabad, Pakistan" },
    { label: "Salary", value: "Competitive — commensurate with qualification and experience." },
  ],
  eligibility: [
    "Minimum Intermediate qualification; Bachelor’s degree will be preferred.",
    "Good command of English and Urdu.",
    "Basic computer knowledge, particularly MS Word & MS Excel.",
    "Good typing, drafting and documentation skills.",
    "Previous experience in a law firm, court, chamber or professional office will be preferred.",
    "Honest, punctual, disciplined and professionally presentable.",
    "Ability to work independently as well as effectively within a professional team.",
  ],
  howToApply: {
    lead: "Interested candidates should submit their updated CV to:",
    addressLines: [
      "AST Law Firm",
      "Flat No. 1, Barrister Arcade,",
      "Opposite Family Courts Complex,",
      "G-10/1, Islamabad.",
    ],
    note: "Only shortlisted candidates will be contacted for an interview.",
  },
};

export const careerBenefits = [
  {
    title: "Mentorship at the bar",
    text: "Train under an Advocate Supreme Court and an Advocate High Court whose supervision runs through the chambers' work.",
  },
  {
    title: "Real courtroom exposure",
    text: "Take part in matters before district courts, the High Courts and specialised tribunals, from land acquisition and labour disputes to mining writs and banking recovery.",
  },
  {
    title: "Three chambers, one standard",
    text: "Work across Islamabad, Abbottabad and Karachi with the same research discipline and procedural rigour in every chamber.",
  },
];

export const careerValues = [
  { num: "01", title: "Integrity", text: "Courtroom honesty and transparent reporting to clients." },
  { num: "02", title: "Professionalism", text: "Rigorous research, meticulous drafting, composed advocacy." },
  { num: "03", title: "Diligence", text: "Every record, limitation period and exhibit checked twice." },
  { num: "04", title: "Confidentiality", text: "Absolute discretion over client files and information." },
  { num: "05", title: "Advocacy", text: "Assertive, persuasive representation before every bench." },
];

export const careerSteps = [
  { num: "01", title: "Apply", text: "Send your updated CV by email or WhatsApp, or submit it at our Islamabad chambers, naming the position." },
  { num: "02", title: "Review", text: "The chambers review your credentials and how they fit our practice areas." },
  { num: "03", title: "Conversation", text: "Shortlisted candidates meet the chambers to discuss their experience and interests." },
  { num: "04", title: "Join", text: "Begin under a supervising advocate with a defined scope of work." },
];
