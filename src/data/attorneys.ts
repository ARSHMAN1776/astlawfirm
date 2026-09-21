export interface Attorney {
  slug: string;
  name: string;
  designation: string;
  role: string;
  descriptor: string;
  shortBio: string;
  biography: string[];
  practiceAreas: string[];
  admissions: string[];
  education: string[];
  memberships: string[];
  publications: string[];
  isFounder?: boolean;
  image?: string;
}

export const attorneys: Attorney[] = [
  {
    // ─── Founder & Senior Partner ───────────────────────────────────
    slug: "haji-sabir-hussain-tanoli",
    name: "Haji Sabir Hussain Tanoli",
    image: "/haji-sabir-tanoli-portrait.jpg",
    designation: "Advocate Supreme Court of Pakistan",
    role: "Founder & Senior Partner",
    descriptor: "ADVOCATE SUPREME COURT OF PAKISTAN",
    isFounder: true,
    shortBio:
      "Founder & Senior Partner of AST Law Firm and its predecessor practice TANAWAL LAW ASSOCIATES (TLA), established in 1992. Advocate Supreme Court of Pakistan.",
    biography: [
      "Haji Sabir Hussain Tanoli is the Founder & Senior Partner of AST Law Firm and the founding principal of its predecessor practice, TANAWAL LAW ASSOCIATES (TLA), which was established in 1992.",
      "With a professional legal career spanning more than three decades, Haji Sabir Hussain Tanoli has built a distinguished reputation for principled advocacy, client dedication and professional integrity.",
      "As Advocate Supreme Court of Pakistan, he has represented clients across superior courts and contributed to building the firm's strong foundation of legal experience, professional values and client service.",
      "Throughout his career, he has guided complex litigation before the Supreme Court and High Courts, establishing rigorous chamber traditions in legal research and courtroom jurisprudence.",
    ],
    practiceAreas: [
      "Supreme Court & High Court Litigation",
      "Constitutional & Civil Law Representation",
      "Dispute Resolution & Trial Advocacy",
      "Revenue, Property & Land Jurisprudence",
    ],
    admissions: [
      "Advocate, Supreme Court of Pakistan",
      "Advocate, High Courts of Pakistan",
      "Pakistan Bar Council Enrolled Practitioner",
      "Subordinate & Appellate Judiciary",
    ],
    education: [
      "Bachelor of Laws (LL.B)",
      "Advocate Supreme Court Certification",
      "Senior Judicial & Chamber Practice",
    ],
    memberships: [
      "Supreme Court Bar Association (SCBA) of Pakistan",
      "High Court Bar Association",
      "Founding Principal, Tanawal Law Associates (Est. 1992)",
    ],
    publications: [],
  },
  {
    // ─── Co-Founder & Managing Partner ─────────────────────────────
    slug: "ahmed-hussain-tanoli",
    name: "Ahmed Hussain Tanoli",
    image: "/ahmed-tanoli-portrait.jpg",
    designation: "Advocate High Court",
    role: "Co-Founder & Managing Partner",
    descriptor: "ADVOCATE HIGH COURT",
    isFounder: true,
    shortBio:
      "Co-Founder & Managing Partner of AST Law Firm. Advocate High Court. Leads the firm's present-day legal practice across litigation, advisory, corporate and commercial matters.",
    biography: [
      "Ahmed Hussain Tanoli is the Co-Founder & Managing Partner of AST Law Firm.",
      "As Advocate High Court, Ahmed Hussain Tanoli leads the firm's present-day legal practice, overseeing client matters across litigation, legal advisory, corporate and commercial matters, documentation and dispute resolution.",
      "The merger in 2026 of TANAWAL LAW ASSOCIATES (TLA) and AST Law Firm brought together the firm's founding legacy with its contemporary professional identity under his management.",
      "He maintains an active litigation practice while providing executive counsel to corporate enterprises, financial institutions, and private clients on regulatory compliance and high-stakes dispute resolution.",
    ],
    practiceAreas: [
      "Corporate & Commercial Advisory",
      "High Court Trial & Appellate Advocacy",
      "Banking & Financial Dispute Resolution",
      "Contract Drafting & Documentation",
      "Civil & Constitutional Representation",
    ],
    admissions: [
      "Advocate, High Courts of Pakistan",
      "Islamabad Bar Council Registered Practitioner",
      "District & Subordinate Courts of Pakistan",
    ],
    education: [
      "Bachelor of Laws (LL.B)",
      "Corporate Law & Civil Procedure Practice",
      "Commercial Drafting & Regulatory Jurisprudence",
    ],
    memberships: [
      "High Court Bar Association",
      "Islamabad Bar Association (IBA)",
      "Managing Partner, AST Law Firm Chambers",
    ],
    publications: [],
  },
];
