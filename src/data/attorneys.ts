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
      "High Court & Appellate Advocacy",
      "ADR (Alternate Dispute Resolution)",
      "Tax Advisory & Revenue Jurisprudence",
      "Banking & Financial Dispute Resolution",
      "Contract Drafting & Documentation",
      "Civil & Constitutional Representation",
    ],
    admissions: [
      "Advocate, High Courts of Pakistan",
      "Islamabad Bar Council Registered Practitioner",
      "KPK Bar Council Registered Practitioner",
      "District & Subordinate Courts of Pakistan",
    ],
    education: [
      "Bachelor of Laws (LL.B)",
      "Corporate Law & Civil Procedure Practice",
      "Commercial Drafting & Regulatory Jurisprudence",
    ],
    memberships: [
      "High Court Bar Association, Abbottabad",
      "District Bar Association, Abbottabad",
      "Islamabad Bar Association (IBA)",
      "Managing Partner, AST Law Firm Chambers",
    ],
    publications: [],
  },
  {
    // ─── Partner / Corporate Counsel at Karachi ───────────────────
    slug: "muhammad-javed-khan-tanoli",
    name: "Muhammad Javed Khan Tanoli",
    image: "/javed-tanoli-portrait.jpg",
    designation: "Advocate High Court, Sindh (Karachi)",
    role: "Partner / Corporate Counsel at Karachi",
    descriptor: "ADVOCATE HIGH COURT, SINDH",
    isFounder: false,
    shortBio:
      "Partner & Corporate Counsel (Karachi) at AST Law Firm. Advocate High Court, Sindh. Leads commercial advisory, corporate compliance, and superior court litigation across Karachi and Sindh.",
    biography: [
      "Muhammad Javed Khan Tanoli is a Partner and Corporate Counsel at AST Law Firm, leading the firm's Karachi and Sindh legal practice.",
      "As Advocate High Court of Sindh (Karachi), he counsels corporate enterprises, financial institutions, and private clients on high-value commercial transactions, regulatory frameworks, and superior court dispute resolution.",
      "With seasoned courtroom advocacy and transactional experience before the High Court of Sindh and specialized tribunals, he provides strategic counsel across banking, commercial contracts, civil law, and corporate governance.",
      "He manages the firm's legal practice and superior court litigation exclusively within Karachi and Sindh, providing dedicated client representation before the High Court of Sindh, appellate benches, and provincial judicial forums.",
    ],
    practiceAreas: [
      "Corporate & Commercial Advisory",
      "Taxation & Fiscal Advisory (FBR & SRB)",
      "High Court Trial & Appellate Advocacy (Sindh)",
      "Banking & Financial Dispute Resolution",
      "Corporate Governance & Regulatory Compliance",
      "Commercial Drafting & Documentation",
    ],
    admissions: [
      "Advocate, High Court of Sindh",
      "Sindh Bar Council Registered Practitioner",
      "Karachi Bar Association & Subordinate Courts (Sindh)",
    ],
    education: [
      "Bachelor of Laws (LL.B)",
      "Corporate Law & Commercial Governance Practice",
      "Civil Procedure & Appellate Jurisprudence",
    ],
    memberships: [
      "Sindh High Court Bar Association (SHCBA)",
      "Karachi Bar Association (KBA)",
      "Partner & Corporate Counsel, AST Law Firm (Karachi)",
    ],
    publications: [],
  },
  {
    // ─── Partner / Head of Abbottabad Office (Hazara Division) ────
    slug: "muhammad-amjad-hussain-tanoli",
    name: "Muhammad Amjad Hussain Tanoli",
    image: "/amjad-tanoli-portrait.jpg",
    designation: "Advocate High Court",
    role: "Partner / Abbottabad Office & Hazara Division",
    descriptor: "ADVOCATE HIGH COURT · ABBOTTABAD & ISLAMABAD",
    isFounder: false,
    shortBio:
      "Partner and Head of Abbottabad Office (Hazara Division) at AST Law Firm. Advocate High Court. Holds an LL.B, M.Sc in Economics, and a Bachelor in Accounting & Finance from Australia, specializing in complex financial matters, banking disputes, corporate advisory, and superior court litigation across Hazara Division and Islamabad.",
    biography: [
      "Muhammad Amjad Hussain Tanoli is a Partner at AST Law Firm and leads the firm's Abbottabad Office and Hazara Division legal practice, maintaining an active superior court practice extending into Islamabad.",
      "He brings a distinguished interdisciplinary background to legal practice, holding a Bachelor of Laws (LL.B), a Master of Science (M.Sc) in Economics, and a Bachelor in Accounting and Finance from Australia.",
      "As an authority on financial matters and banking disputes, he advises corporate entities, commercial clients, and private litigants on high-stakes fiscal controversies, balance sheet examinations, and regulatory compliance.",
      "With extensive courtroom experience across High Courts and subordinate judiciaries throughout the Hazara Division, he seamlessly coordinates regional matters with the firm's principal Islamabad chambers.",
    ],
    practiceAreas: [
      "Financial Matters & Banking Jurisprudence",
      "Corporate & Commercial Advisory",
      "Accounting & Fiscal Dispute Advisory",
      "High Court & Appellate Advocacy",
      "Land Acquisition & Revenue Litigation",
      "Civil & Constitutional Representation",
      "Islamabad & Regional Inter-Chamber Liaison",
    ],
    admissions: [
      "Advocate, High Courts of Pakistan",
      "KPK Bar Council Registered Practitioner (BC-17-1527)",
      "High Court & Subordinate Courts (Hazara Division)",
    ],
    education: [
      "Bachelor of Laws (LL.B)",
      "M.Sc in Economics",
      "Bachelor in Accounting and Finance (Australia)",
    ],
    memberships: [
      "High Court Bar Association, Abbottabad",
      "District Bar Association, Abbottabad",
      "Partner, AST Law Firm Chambers",
    ],
    publications: [],
  },
];
