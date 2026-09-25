export interface DomainScopeItem {
  lead: string;
  text: string;
}

export interface PracticeDomain {
  id: string;
  number: string;
  category: string;
  title: string;
  /** Short statute / forum tag shown under the title */
  authority: string;
  /** Statutory framework and forums paragraph */
  framework: string;
  scope: DomainScopeItem[];
}

// Text may use *asterisks* around transliterated terms to render them in italics.
export const practiceDomains: PracticeDomain[] = [
  {
    id: "kpk-mining",
    number: "01",
    category: "Provincial Regulatory Domain",
    title: "Khyber Pakhtunkhwa Mining Regime",
    authority: "KP Mines & Minerals Act 2017",
    framework:
      "Khyber Pakhtunkhwa Mines and Minerals Act, 2017 (as amended) and the rules framed under it, including the Minerals Titles (Large and Small Scale Mining) Governance Rules, 2017 and the allied auction, permit and enforcement rules; the Mineral Titles Committee; the Appellate Tribunal constituted under the Act; and the Peshawar High Court (Principal Seat and Abbottabad Bench).",
    scope: [
      {
        lead: "Concession Titles & Licensing",
        text: "Applications, renewals, assignments and conversions of mineral titles and mining leases before the Mineral Titles Committee and the Mines & Minerals Department of Khyber Pakhtunkhwa.",
      },
      {
        lead: "Hazara & Northern Mineral Belts",
        text: "Counsel on large-scale and small-scale concessions for marble, granite, nephrite/jade, limestone, phosphate, dolomite and silica sand across Abbottabad, Haripur, Swat, Nowshera and the newly merged tribal districts.",
      },
      {
        lead: "Appellate & High Court Writs",
        text: "Defending concessionaires before the Appellate Tribunal under the Act and filing Article 199 constitutional petitions before the Peshawar High Court against unlawful cancellations, arbitrary royalty reassessments, overlapping demarcations and coercive recovery notices.",
      },
    ],
  },
  {
    id: "punjab-mining",
    number: "02",
    category: "Provincial Regulatory Domain",
    title: "Province of Punjab Mining Concessions",
    authority: "Punjab Mining Concession Rules 2002",
    framework:
      "Punjab Mining Concession Rules, 2002 (as amended); the Punjab Mines and Minerals Act, 2025; the Mines & Minerals Department and Director General Mines & Minerals, Punjab; statutory appeals before the Secretary Mines & Minerals; and the Lahore High Court (Principal Seat and Rawalpindi Bench).",
    scope: [
      {
        lead: "Salt Range & Industrial Minerals",
        text: "Regulatory representation for coal, rock salt, limestone, silica sand, gypsum and bauxite concessions spanning Chakwal, Khushab, Mianwali, Jhelum, Attock and Dera Ghazi Khan.",
      },
      {
        lead: "Departmental Appeals & Revisions",
        text: "Navigating statutory appeals before the Secretary Mines & Minerals against adverse orders of the Director General and licensing authorities, including work-order revocations and forfeiture of security deposits.",
      },
      {
        lead: "Lahore High Court Writ Jurisdiction",
        text: "Challenging ultra vires administrative action and the unlawful re-tendering of granted concessions, and securing interlocutory status quo orders under Article 199 of the Constitution of Pakistan.",
      },
    ],
  },
  {
    id: "criminal-defense",
    number: "03",
    category: "Trial & Appellate Criminal Jurisprudence",
    title: "Criminal Defense & Quashment (Sec. 561-A)",
    authority: "Cr.P.C. 1898",
    framework:
      "Code of Criminal Procedure, 1898 (Cr.P.C.); Pakistan Penal Code, 1860 (PPC); Qanun-e-Shahadat Order, 1984; Courts of Session; High Courts of Pakistan.",
    scope: [
      {
        lead: "Quashment of Malicious FIRs (Sec. 561-A Cr.P.C.)",
        text: "Invoking the inherent jurisdiction of the High Court to quash vexatious FIRs, fabricated private complaints and civil controversies wrongfully converted into criminal offenses, to prevent abuse of the process of court.",
      },
      {
        lead: "Bail Jurisprudence (Sections 497 & 498 Cr.P.C.)",
        text: "Securing urgent ad-interim pre-arrest bail against unlawful police harassment, and arguing contested post-arrest bail in non-bailable matters before Sessions Courts and High Court Benches.",
      },
      {
        lead: "Evidentiary Audit & Trial Advocacy",
        text: "Scrutiny of police case diaries (*zimnis*), forensic cross-examination under the Qanun-e-Shahadat Order, 1984, and habeas corpus petitions under Article 199.",
      },
    ],
  },
  {
    id: "white-collar",
    number: "04",
    category: "Special Statutes & Regulatory Offenses",
    title: "White-Collar Crime & FIA Proceedings",
    authority: "Special Enactments",
    framework:
      "Federal Investigation Agency Act, 1974; Prevention of Electronic Crimes Act, 2016 (PECA); Anti-Money Laundering Act, 2010 (AMLA); Exit from Pakistan (Control) Ordinance, 1981 and the rules framed under it; Special Courts (Offences in Banks, Anti-Corruption).",
    scope: [
      {
        lead: "FIA Corporate Inquiries",
        text: "Strategic representation for corporate directors and executives facing inquiries by the Federal Investigation Agency (FIA) and the provincial Anti-Corruption Establishments (ACE).",
      },
      {
        lead: "Special Banking & Financial Courts",
        text: "Defense in commercial fraud allegations, unauthorized electronic fund transfers and cyber offenses under PECA, including bail and trial before the competent special courts.",
      },
      {
        lead: "Exit Control & Constitutional Remedies",
        text: "Challenging unlawful placement on the Exit Control List (ECL), the Provisional National Identification List (PNIL) or the Passport Control List (PCL), and enforcing the guarantee of due process and fair trial under Article 10-A.",
      },
    ],
  },
  {
    id: "corporate-commercial",
    number: "05",
    category: "Enterprise Structuring & Governance",
    title: "Corporate & Commercial Advisory",
    authority: "Companies Act 2017",
    framework:
      "Companies Act, 2017; Limited Liability Partnership Act, 2017; SECP regulations; Contract Act, 1872; Competition Act, 2010; High Court Company Benches.",
    scope: [
      {
        lead: "Entity Formation & Structuring",
        text: "Structuring private limited companies, single-member companies and LLPs, and drafting customized Memoranda and Articles of Association.",
      },
      {
        lead: "Commercial Drafting & Transactions",
        text: "Drafting and negotiating commercial supply contracts, concession joint ventures, shareholder agreements and cross-border commercial arrangements.",
      },
      {
        lead: "High Court Company Litigation",
        text: "Handling winding-up petitions and shareholder oppression and mismanagement petitions before the High Court Company Benches, and challenges to SECP orders through the statutory appellate route.",
      },
    ],
  },
  {
    id: "high-court-appellate",
    number: "06",
    category: "Superior Judiciary & Constitutional Review",
    title: "High Court & Appellate Advocacy",
    authority: "Article 199 Writs",
    framework:
      "Constitution of the Islamic Republic of Pakistan, 1973 (Part VII); High Court Rules and Orders; Code of Civil Procedure, 1908 (CPC); Islamabad, Lahore and Peshawar High Courts.",
    scope: [
      {
        lead: "Constitutional Writ Petitions (Article 199)",
        text: "Instituting and arguing writ petitions (mandamus, certiorari, prohibition) challenging ultra vires executive action, arbitrary license cancellations and government tender irregularities.",
      },
      {
        lead: "Civil & Commercial Appeals",
        text: "Regular First Appeals (Section 96 CPC), Regular Second Appeals on substantial questions of law (Section 100) and civil revisions (Section 115) against the orders of subordinate courts.",
      },
      {
        lead: "Interlocutory Injunctions & Stays",
        text: "Securing urgent restraining orders and status quo protection under Order XXXIX Rules 1 & 2 CPC to prevent irreversible prejudice pending final adjudication.",
      },
    ],
  },
  {
    id: "adr-arbitration",
    number: "07",
    category: "Dispute Resolution & Arbitration",
    title: "ADR & Commercial Arbitration",
    authority: "Arbitration Act 1940",
    framework:
      "Arbitration Act, 1940; Recognition and Enforcement (Arbitration Agreements and Foreign Arbitral Awards) Act, 2011; Civil Courts and High Courts of Pakistan.",
    scope: [
      {
        lead: "Domestic & Commercial Arbitration",
        text: "Representing corporate enterprises and concessionaires in contractual, infrastructure and commercial arbitral tribunals across Pakistan.",
      },
      {
        lead: "Rule of Court & Award Enforcement",
        text: "Instituting proceedings under Sections 14 and 17 of the Arbitration Act to make awards the rule of the court and enforceable as decrees, and defending against challenges to awards under Sections 30 and 33.",
      },
      {
        lead: "Structured Commercial Mediation",
        text: "Conducting private settlement sessions and formulating enforceable compromise deeds to avoid protracted litigation.",
      },
    ],
  },
  {
    id: "banking-finance",
    number: "08",
    category: "Financial Institutions & Recovery Defense",
    title: "Banking & Financial Disputes",
    authority: "Ordinance XLVI of 2001",
    framework:
      "Financial Institutions (Recovery of Finances) Ordinance, 2001; State Bank of Pakistan (SBP) Prudential Regulations; Banking Courts; and the High Courts in appeal.",
    scope: [
      {
        lead: "Leave to Defend (Section 10)",
        text: "Drafting applications for leave to defend that set out accounting discrepancies, excessive markup and uncredited finance repayments.",
      },
      {
        lead: "Collateral & Mortgaged Assets Protection",
        text: "Defending borrowers and corporate guarantors against illegal attachment, premature recall notices and the unlawful auction of mortgaged assets.",
      },
      {
        lead: "Banking Appellate Litigation",
        text: "Filing first appeals under Section 22 before the High Court and negotiating debt restructuring settlements with financial institutions.",
      },
    ],
  },
  {
    id: "tax-revenue",
    number: "09",
    category: "Fiscal Laws & Appellate Revenue",
    title: "Tax Advisory & Revenue Jurisprudence",
    authority: "Income & Sales Tax",
    framework:
      "Income Tax Ordinance, 2001; Sales Tax Act, 1990; provincial and Islamabad Capital Territory sales-tax-on-services laws (PRA, KPRA, SRB, ICT); Commissioner Inland Revenue (Appeals); Appellate Tribunal Inland Revenue (ATIR); High Court reference benches.",
    scope: [
      {
        lead: "Audit Defense & Notice Contestation",
        text: "Defending against Section 177 audit selections, show-cause notices for alleged concealment, best-judgment assessments (Section 121) and amended assessments (Section 122).",
      },
      {
        lead: "Appellate Tribunal Inland Revenue (ATIR)",
        text: "Advocating before the Commissioner Inland Revenue (Appeals) and the Appellate Tribunal Inland Revenue against arbitrary tax levies and penalties.",
      },
      {
        lead: "High Court Tax References (Section 133)",
        text: "Instituting reference applications before the High Court on questions of law arising from Tribunal orders, and seeking restraining orders against coercive bank account attachments.",
      },
    ],
  },
  {
    id: "civil-land-property",
    number: "10",
    category: "Land Revenue & Property Titles",
    title: "Civil, Land Tenures & Property Litigation",
    authority: "Specific Relief Act 1877",
    framework:
      "Specific Relief Act, 1877; Land Acquisition Act, 1894; Transfer of Property Act, 1882; West Pakistan Land Revenue Act, 1967; Subordinate Civil Courts and High Courts.",
    scope: [
      {
        lead: "Substantive Civil Suits",
        text: "Prosecuting and defending suits for declaration of title, permanent and mandatory injunctions, partition of commercial and ancestral properties, and specific performance of contracts.",
      },
      {
        lead: "Revenue Record & Mutation Scrutiny",
        text: "In-depth examination of revenue records (*fard*, *intiqal* / mutation, *jamabandi*, *khasra girdawari*) to remedy defects in title and prevent fraudulent alienation.",
      },
      {
        lead: "Land Acquisition & Valuation References",
        text: "Representing landholders and real estate developers before the Land Acquisition Collector and, under Section 18, the Reference Court for fair statutory compensation.",
      },
    ],
  },
];
