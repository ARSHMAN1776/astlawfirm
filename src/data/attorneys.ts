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
    descriptor: "ADVOCATE HIGH COURT · MANAGING PARTNER",
    isFounder: true,
    shortBio:
      "Co-Founder & Managing Partner of AST Law Firm. Advocate High Court. Directs the firm's legal practice, client intake, and strategic consultations across Pakistan. Specialized in Mines & Minerals jurisprudence across KPK and Punjab, corporate advisory, and high-stakes criminal defense before superior courts.",
    biography: [
      "Ahmed Hussain Tanoli is the Co-Founder & Managing Partner of AST Law Firm, directing the firm's multi-city practice and serving as the primary executive lead for all client intake conferences, formal bookings, and strategic case reviews.",
      "As Advocate High Court, he personally conducts all client consultations and case evaluations across AST Law Firm's chambers. Every brief entrusted to the firm undergoes his direct scrutiny to formulate actionable litigation roadmaps, evidentiary theories, and superior court appellate strategies.",
      "Ahmed Hussain Tanoli maintains extensive domain authority in Mines & Minerals Jurisprudence across Khyber Pakhtunkhwa (KPK) and the Province of Punjab. His mining practice encompasses statutory concession licensing, prospecting titles, mining leases, royalty assessment controversies, and appellate writ litigation under the Khyber Pakhtunkhwa Mines and Minerals Act 2017 and the Punjab Mining Concession Rules 2002 before the Peshawar and Lahore High Courts.",
      "In trial advocacy and criminal jurisprudence, he provides measured, authoritative defense in white-collar investigations, high-stakes quashment petitions under Section 561-A Cr.P.C. against vexatious proceedings, urgent pre-arrest and post-arrest bail hearings under Sections 497 & 498 Cr.P.C., and constitutional protection of personal liberty under Article 199.",
      "Following the 2026 merger of Tanawal Law Associates (TLA, founded 1992) and AST Law Firm, he has consolidated the firm's 34-year courtroom heritage with modern legal advisory, orchestrating seamless chamber operations between Islamabad Principal Chambers, Abbottabad, and regional commercial hubs.",
    ],
    practiceAreas: [
      // Listed in pairs: the profile grid shows two per row, left then right.
      "Mines & Minerals Concessions (KPK & Punjab)",
      "Mining Joint Ventures & Concession Leases",
      "Corporate & Commercial Advisory",
      "Alternate Dispute Resolution (ADR) & Arbitration",
      "High Court & Appellate Advocacy",
      "Constitutional & Fundamental Rights Writs",
      "Expert in Land Acquisition Litigation",
      "Detailed Advisory in Pre-Award Proceedings to the Acquiring Department",
      "Criminal Defense & High Court Writs (Sec 561-A Cr.P.C.)",
      "Pre-Arrest & Post-Arrest Bail Jurisprudence",
      "Banking & Financial Dispute Resolution",
      "Tax Advisory & Revenue Jurisprudence",
    ],
    admissions: [
      "Advocate, High Courts of Pakistan",
      "Khyber Pakhtunkhwa Bar Council Enrolled Practitioner",
      "High Court Bar Association, Abbottabad & Islamabad",
      "District & Subordinate Courts of Pakistan",
    ],
    education: [
      "Bachelor of Laws (LL.B)",
      "Mines & Minerals Concession Jurisprudence (KPK & Punjab)",
      "Advanced Criminal Procedure & Appellate Advocacy",
      "Corporate Law, Commercial Drafting & Regulatory Frameworks",
      "Land Acquisition & Revenue Settlement Litigation",
    ],
    memberships: [
      "High Court Bar Association, Abbottabad",
      "Islamabad Bar Association (IBA)",
      "District Bar Association, Abbottabad",
      "Managing Partner & Chamber Director, AST Law Firm",
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
      "Partner & Corporate Counsel (Karachi) at AST Law Firm. Advocate High Court, Sindh. Leads commercial advisory, corporate compliance, and superior court litigation across Karachi and Sindh. Holds LL.B from a recognised institution and LL.M from S.M. Law College, Karachi, affiliated with University of Karachi. Founder Member of the Corporate & Banking Lawyers Association Karachi.",
    biography: [
      "Muhammad Javed Khan Tanoli is a Partner and Corporate Counsel at AST Law Firm, leading the firm's Karachi and Sindh legal practice.",
      "As Advocate High Court of Sindh (Karachi), he counsels corporate enterprises, financial institutions, and private clients on high-value commercial transactions, regulatory frameworks, and superior court dispute resolution.",
      "With seasoned courtroom advocacy and transactional experience before the High Court of Sindh and specialized tribunals, he provides strategic counsel across banking, commercial contracts, civil law, and corporate governance.",
      "He manages the firm's legal practice and superior court litigation exclusively within Karachi and Sindh, providing dedicated client representation before the High Court of Sindh, appellate benches, and provincial judicial forums.",
      "A Founder Member of the Corporate & Banking Lawyers Association Karachi, he holds an LL.M from S.M. Law College, Karachi, affiliated with University of Karachi.",
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
      "LL.M — S.M. Law College, Karachi (University of Karachi)",
      "Corporate Law & Commercial Governance Practice",
      "Civil Procedure & Appellate Jurisprudence",
    ],
    memberships: [
      "Founder Member, Corporate & Banking Lawyers Association Karachi",
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
