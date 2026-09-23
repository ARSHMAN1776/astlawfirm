export interface PracticeArea {
  number: string;
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  overview: string;
  statutoryFramework: string[];
  proceduralStages: {
    title: string;
    desc: string;
  }[];
  scopeOfServices: string[];
  keyConsiderations: string[];
  clientTypes: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    number: "01",
    slug: "litigation",
    title: "Litigation & Trial Advocacy",
    tagline: "Formidable courtroom representation across Subordinate Courts, High Courts, and the Supreme Court of Pakistan.",
    summary: "Comprehensive civil, commercial, banking, constitutional, and revenue litigation across trial and appellate benches.",
    overview:
      "AST Law Firm provides authoritative courtroom advocacy rooted in more than three decades of judicial practice. Backed by senior Supreme Court and High Court enrollment, our advocates represent individuals, family offices, commercial enterprises, and financial institutions in high-stakes disputes. We combine deep mastery of substantive law with tactical procedural command, rigorous evidentiary scrutiny, and persuasive oral advocacy. From urgent stay applications and interlocutory injunctions to full-scale trials and final appellate proceedings, our chambers provide relentless legal representation.",
    statutoryFramework: [
      "Code of Civil Procedure, 1908 (CPC)",
      "Constitution of the Islamic Republic of Pakistan, 1973 (Articles 199, 185)",
      "Specific Relief Act, 1877 & Contract Act, 1872",
      "Qanun-e-Shahadat Order, 1984 (Law of Evidence)",
      "Financial Institutions (Recovery of Finances) Ordinance, 2001",
      "High Court Rules and Orders & Supreme Court Rules, 1980",
    ],
    proceduralStages: [
      {
        title: "Evidentiary Audit & Case Theory",
        desc: "Exhaustive review of documentary exhibits, title deeds, correspondence, and limitation thresholds to formulate an ironclad case strategy before institution.",
      },
      {
        title: "Pleadings & Urgent Interlocutory Relief",
        desc: "Drafting high-precision plaints, written statements, and urgent applications under Order XXXIX Rules 1 & 2 CPC for preservation of status quo and restraining orders.",
      },
      {
        title: "Framing of Issues & Examination of Witnesses",
        desc: "Meticulous cross-examination, production of certified public and private records, and strategic witness examination in accordance with Qanun-e-Shahadat provisions.",
      },
      {
        title: "Appellate Writs & Supreme Court Petitions",
        desc: "Instituting constitutional writ petitions under Article 199, regular first and second civil appeals (RFA/RSA), civil revisions (Section 115 CPC), and Civil Petitions for Leave to Appeal (CPLA) before the Supreme Court.",
      },
      {
        title: "Execution & Enforcement Proceedings",
        desc: "Relentless pursuit of decree satisfaction under Order XXI CPC, including attachment of assets, appointment of local commissioners, and realization of awarded claims.",
      },
    ],
    scopeOfServices: [
      "Civil & Property Litigation (Declaration, Injunction, Partition, Specific Performance)",
      "Commercial & Corporate Disputes (Shareholder Deadlocks, Contractual Breaches)",
      "Banking & Financial Recovery Proceedings before Specialized Banking Courts",
      "Constitutional Petitions & Fundamental Rights Enforcement under Article 199",
      "Supreme Court Appeals (Civil Petitions for Leave to Appeal - CPLA)",
      "Revenue & Land Settlement Litigation before Collectors, Commissioners & Board of Revenue",
      "Rent Restriction & Eviction Proceedings before Rent Controllers and Appellate Authorities",
      "Insolvency, Winding-Up & Company Litigation before High Court Company Benches",
    ],
    keyConsiderations: [
      "Early limitation analysis under the Limitation Act 1908 to safeguard actionable causes of action",
      "Strategic evaluation between summary suits, ordinary civil suits, or constitutional writ remedies",
      "Securing urgent injunctive relief to protect disputed immovable and financial assets pendente lite",
      "Rigorous discovery and witness preparation to withstand relentless judicial cross-examination",
      "Anticipation of jurisdictional objections, forum non conveniens, and statutory arbitration clauses",
    ],
    clientTypes: [
      "Public and Private Limited Companies & Corporate Conglomerates",
      "Commercial Developers, Real Estate Groups & Landowners",
      "Financial Institutions, Modarabas & Asset Management Entities",
      "High-Net-Worth Individuals & Family Business Dynasties",
      "Statutory Authorities & Non-Profit Institutions",
    ],
  },
  {
    number: "02",
    slug: "legal-advisory",
    title: "Strategic Legal Advisory",
    tagline: "Incisive counsel, regulatory risk mitigation, and authoritative legal opinions on complex matters.",
    summary: "Preventative legal strategy, statutory compliance, risk diagnostics, and formal legal opinions.",
    overview:
      "AST Law Firm delivers strategic legal counsel designed to empower executive decision-makers, boards of directors, investors, and individuals with absolute legal clarity. Our advisory practice operates on the principle that superior legal foresight preempts costly litigation. We conduct deep-dive legal diagnostics, parse ambiguous regulatory regimes, and issue formal written legal opinions that withstand institutional scrutiny. Whether navigating federal compliance, structuring high-value transactions, or managing statutory investigations, our counsel provides unambiguous clarity and fiduciary protection.",
    statutoryFramework: [
      "Companies Act, 2017 & SECP Regulations",
      "Federal Board of Revenue (FBR) & Provincial Revenue Statutes",
      "Competition Act, 2010 & Foreign Exchange Regulation Act, 1947",
      "Employment, Industrial Relations & Labour Statutes",
      "Environmental Protection Acts & Municipal Zoning Regulations",
    ],
    proceduralStages: [
      {
        title: "Fact-Finding & Document Discovery",
        desc: "Systematic collation of relevant contracts, institutional authorizations, and correspondence to map the precise legal landscape.",
      },
      {
        title: "Statutory & Precedential Research",
        desc: "Cross-referencing statutory enactments, delegated notifications (SROs), and binding Supreme Court case law directly on point.",
      },
      {
        title: "Risk Exposure Matrix",
        desc: "Evaluating criminal, civil, regulatory, and reputational liabilities under applicable Pakistani jurisprudence.",
      },
      {
        title: "Formal Written Opinion Delivery",
        desc: "Formulating unambiguous, reasoned legal opinions equipped with defensible recommendations and actionable courses of action.",
      },
    ],
    scopeOfServices: [
      "Formal Legal Opinions on Complex Questions of Law & Regulatory Compliance",
      "Pre-Litigation Risk Diagnostics & Actionable Dispute Avoidance Strategies",
      "Corporate Governance, Director Fiduciary Duties & Board Advisory",
      "Regulatory Approvals & Liaison with SECP, CCP, SBP, and Line Ministries",
      "Labor, Executive Employment, Termination Protocols & Gratuity Schemes",
      "Commercial Land Tenures, Title Scrutiny & Municipal Zoning Compliance",
      "Foreign Direct Investment (FDI) & SBP Foreign Exchange Remittance Clearances",
    ],
    keyConsiderations: [
      "Identifying latent exposure under evolving delegated legislation, statutory rules, and SROs",
      "Balancing aggressive commercial goals against criminal and administrative regulatory liabilities",
      "Structuring fiduciary protections for board members and managing executives",
      "Establishing audit-ready paper trails to justify corporate governance decisions",
    ],
    clientTypes: [
      "Multinational Corporations & Foreign Entities Operating in Pakistan",
      "Domestic Enterprises, Manufacturing Concerns & Trade Associations",
      "Educational Institutions, Hospitals & Healthcare Networks",
      "Private Investors, Overseas Pakistanis & Executive Boards",
    ],
  },
  {
    number: "03",
    slug: "corporate-commercial",
    title: "Corporate & Commercial Affairs",
    tagline: "End-to-end legal architecture for enterprise formation, governance, commercial contracts, and transactions.",
    summary: "Corporate structuring, mergers, commercial transactions, regulatory licensing, and joint ventures.",
    overview:
      "AST Law Firm serves as corporate counsel to leading enterprises, entrepreneurs, and industrial groups across Pakistan. Our Corporate & Commercial Division covers every stage of the business lifecycle—from entity incorporation and joint venture structuring to multi-layered commercial negotiations and regulatory compliance before the Securities and Exchange Commission of Pakistan (SECP). We align legal rigor with commercial reality, ensuring our corporate clients execute transactions with confidence, enforceability, and ironclad liability protection.",
    statutoryFramework: [
      "Companies Act, 2017 & Listed/Unlisted Companies Regulations",
      "Partnership Act, 1932 & Limited Liability Partnership Act, 2017",
      "Contract Act, 1872 & Sale of Goods Act, 1930",
      "Securities Act, 2015 & Anti-Money Laundering Act, 2010",
      "SECP Corporate Governance Regulations",
    ],
    proceduralStages: [
      {
        title: "Corporate Structuring & Incorporation",
        desc: "Determining optimal corporate vehicles (Private/Public Limited, Single Member Company, LLP) and drafting customized constitutional charters.",
      },
      {
        title: "Transaction Architecture & Term Sheets",
        desc: "Drafting binding Letters of Intent, Non-Disclosure Agreements, and preliminary condition precedent frameworks.",
      },
      {
        title: "Comprehensive Legal Due Diligence",
        desc: "Auditing corporate books, statutory registers, title deeds, pending litigation, encumbrances, and regulatory standing.",
      },
      {
        title: "Definitive Agreement Execution & Filings",
        desc: "Negotiating Shareholder Agreements, Share Purchase Agreements, and completing mandatory statutory returns before the SECP Registrar.",
      },
    ],
    scopeOfServices: [
      "Incorporation of Private, Public, Section 42 Non-Profit, and Foreign Branch Companies",
      "Joint Venture (JV), Consortium, and Public-Private Partnership (PPP) Structuring",
      "Drafting & Negotiation of Complex Cross-Border Commercial Agreements",
      "Mergers, Acquisitions, Scheme of Arrangements & Capital Restructuring",
      "Shareholder Agreements, Voting Trusts, and Anti-Dilution / Pre-emption Rights",
      "Franchising, Supply Chain, Logistics, Distribution, and Licensing Agreements",
      "Corporate Secretaryship, Board Resolutions & SECP Annual Filing Compliance",
    ],
    keyConsiderations: [
      "Crafting decisive dispute resolution, deadlock resolution, and drag-along / tag-along clauses",
      "Mitigating exposure through balanced limitation of liability and indemnity indemnification provisions",
      "Securing compliance with mandatory stamp duty, registration, and witness attestation formalities",
      "Safeguarding intellectual property and proprietary trade secrets within commercial collaborations",
    ],
    clientTypes: [
      "Established Corporate Groups & Mid-Market Enterprises",
      "Emerging Technology Startups & Venture Capital Backed Entities",
      "Importers, Exporters, Logistics & Supply Chain Networks",
      "Real Estate Developers, Contractors & Project Sponsors",
    ],
  },
  {
    number: "04",
    slug: "documentation",
    title: "Legal Documentation & Conveyancing",
    tagline: "Precision legal drafting of deeds, contracts, security instruments, and conveyancing deeds.",
    summary: "Impermeable drafting and registration of commercial, real estate, and statutory legal instruments.",
    overview:
      "AST Law Firm provides expert legal conveyancing and documentation services. A contract or deed is the first line of defense against future litigation; ambiguity invites conflict. Our chambers draft, examine, and verify legal instruments with forensic accuracy. We guarantee full alignment with the Stamp Act 1899, the Registration Act 1908, the Transfer of Property Act 1882, and the Contract Act 1872. Whether drafting high-value real estate conveyance deeds, banking security debentures, or multi-party settlements, our documents provide absolute legal finality.",
    statutoryFramework: [
      "Transfer of Property Act, 1882 & Registration Act, 1908",
      "Stamp Act, 1899 & Court Fees Act, 1870",
      "Contract Act, 1872 & Specific Relief Act, 1877",
      "Land Revenue Act, 1967 & Provincial Tenancy Acts",
      "Powers of Attorney Act, 1882 & Notaries Ordinance",
    ],
    proceduralStages: [
      {
        title: "Title Investigation & Search Certificate",
        desc: "Verifying 30-year ownership pedigree through revenue records (Fard, Jamabandi, Aks Shajra) and Sub-Registrar books to guarantee unencumbered title.",
      },
      {
        title: "Customized Drafting & Covenant Structuring",
        desc: "Authoring unambiguous covenants, warranty representations, default conditions, and force majeure parameters.",
      },
      {
        title: "Stamp Duty & Registration Formalities",
        desc: "Accurately calculating statutory stamp duty, capital value tax, registration fees, and attending Sub-Registrar offices for formal execution and endorsement.",
      },
    ],
    scopeOfServices: [
      "Sale Deeds, Conveyance Instruments, and Agreements to Sell for Immovable Property",
      "Commercial Leases, Tenancy Agreements & Build-Operate-Transfer (BOT) Contracts",
      "Mortgage Deeds, Hypothecation Agreements, Debentures & Collateral Security Creation",
      "Partnership Deeds, Dissolution Deeds, and Settlement Agreements",
      "General & Special Powers of Attorney with Verifiable Consular/Sub-Registrar Attestation",
      "Wills, Codicils, Gift Deeds (Hiba), and Family Trust Settlements",
      "Non-Disclosure Agreements (NDAs), Employment Contracts & Service Agreements",
    ],
    keyConsiderations: [
      "Rigorous verification of property title to eliminate threats of fraudulent benami transactions",
      "Ensuring strict compliance with mandatory registration requirements under Section 17 Registration Act",
      "Drafting watertight indemnification clauses against title defects and third-party encumbrances",
      "Eliminating contradictory or unenforceable covenants under Pakistani contract jurisprudence",
    ],
    clientTypes: [
      "Property Owners, Buyers & Institutional Real Estate Investors",
      "Corporate Retainers & Industrial Commercial Lessees",
      "Financial Institutions Requiring Perfection of Security Documents",
      "Overseas Pakistanis Securing Ancestral and Acquired Assets",
    ],
  },
  {
    number: "05",
    slug: "dispute-resolution",
    title: "Dispute Resolution & ADR",
    tagline: "Strategic settlement negotiation, statutory arbitration, and commercial mediation services.",
    summary: "Efficient, confidential out-of-court dispute resolution, commercial arbitration, and mediation.",
    overview:
      "AST Law Firm delivers strategic Alternative Dispute Resolution (ADR) services designed to secure decisive results while preserving commercial relationships, confidentiality, and financial capital. Litigation through protracted court trials is not always the only or most efficient recourse. Our advocates possess extensive training and courtroom credibility in commercial negotiation, conciliation, and statutory arbitration under the Arbitration Act, 1940 and international rules. When disputes arise, we formulate aggressive negotiation positions, represent clients before arbitral tribunals, and enforce arbitral awards before civil courts.",
    statutoryFramework: [
      "Arbitration Act, 1940 & Alternative Dispute Resolution Act, 2017",
      "Recognition and Enforcement (Arbitration Agreements and Foreign Arbitral Awards) Act, 2011",
      "Civil Procedure Code, 1908 (Section 89-A - Court-Annexed Mediation)",
      "High Court ADR Rules & International Chamber of Commerce (ICC) Arbitration Rules",
    ],
    proceduralStages: [
      {
        title: "Arbitration Clause Review & Strategy",
        desc: "Interpreting the scope of arbitration agreements, appointment mechanisms, seat of arbitration, and governing substantive law.",
      },
      {
        title: "Tribunal Constitution & Interim Measures",
        desc: "Filing Section 8/20 applications for appointment of arbitrators, and securing interim protective orders under Section 41 Arbitration Act.",
      },
      {
        title: "Statement of Claims & Hearing Proceedings",
        desc: "Formulating structured pleadings, presenting expert technical testimony, and conducting evidentiary arbitral hearings.",
      },
      {
        title: "Award Filing & Rule of Court Decree",
        desc: "Instituting proceedings under Section 14 & 17 of the Arbitration Act to have the arbitral award made Rule of the Court with executive force of a decree.",
      },
    ],
    scopeOfServices: [
      "Representation in Domestic Arbitration Proceedings under Arbitration Act 1940",
      "Enforcement and Defense against International Arbitral Awards under the 2011 Act",
      "Structured Commercial Mediation & Court-Annexed Alternative Dispute Resolution",
      "High-Value Settlement Negotiations & Drafting Comprehensive Compromise Deeds",
      "Pre-Dispute Risk Evaluation, Claims Analysis & Tactical Strategy Formulation",
      "Challenging or Defending Arbitral Awards on Grounds of Misconduct or Jurisdictional Excess",
    ],
    keyConsiderations: [
      "Careful assessment of whether to pursue expedited settlement or binding arbitral adjudication",
      "Preventing court intervention through Section 34 stay applications when arbitration clauses exist",
      "Drafting arbitration agreements with unambiguous seat, governing law, and appointment procedures",
      "Ensuring compliance with procedural timelines to secure enforceable awards without remittal",
    ],
    clientTypes: [
      "General Contractors, Infrastructure Developers & Engineering Firms",
      "Corporate Commercial Partners in Contractual Disputes",
      "Shareholders and Partners Seeking Structured Amicable Exits",
      "Entities Requiring Absolute Confidentiality Beyond Public Courtrooms",
    ],
  },
  {
    number: "06",
    slug: "legal-representation",
    title: "Superior Court Representation",
    tagline: "Dedicated appellate representation before High Courts and the Supreme Court of Pakistan.",
    summary: "Senior appellate advocacy, constitutional law, judicial reviews, and regulatory appellate tribunals.",
    overview:
      "AST Law Firm provides dedicated senior legal representation before the highest judicial forums of Pakistan. Led by Founder & Senior Partner Haji Sabir Hussain Tanoli (Advocate Supreme Court of Pakistan) and Co-Founder & Managing Partner Ahmed Hussain Tanoli (Advocate High Court), our chambers handle critical matters requiring exceptional legal intellect and courtroom presence. We represent clients across High Court Benches (Islamabad, Rawalpindi, Peshawar, Abbottabad, Lahore, Karachi) and the Supreme Court of Pakistan in constitutional, appellate, and public interest litigation.",
    statutoryFramework: [
      "Constitution of the Islamic Republic of Pakistan, 1973 (Part VII - The Judicature)",
      "Supreme Court Rules, 1980 & High Court Rules and Orders",
      "Legal Practitioners and Bar Councils Act, 1973",
      "General Clauses Act, 1897 & Specific Relief Act, 1877",
    ],
    proceduralStages: [
      {
        title: "Record Audit & Certified Copy Extraction",
        desc: "Forensic examination of trial court trial records, judgment decrees, and framing grounds of appeal within strict statutory limitation periods.",
      },
      {
        title: "Appellate Drafting & Constitutional Writs",
        desc: "Drafting high-precision grounds of appeal, writ petitions under Article 199, and Civil Petitions for Leave to Appeal (CPLAs) under Article 185(3).",
      },
      {
        title: "Senior Courtroom Oral Advocacy",
        desc: "Arguing questions of constitutional interpretation, statutory construction, and misreading of evidence before Division Benches and Full Benches.",
      },
    ],
    scopeOfServices: [
      "Representation before the Supreme Court of Pakistan in Constitutional and Civil Petitions",
      "High Court Writ Jurisdiction under Article 199 (Mandamus, Certiorari, Prohibition, Habeas Corpus)",
      "Regular First Appeals (RFA) and Regular Second Appeals (RSA) on Substantial Questions of Law",
      "Civil Revision Petitions under Section 115 CPC Against Misexercise of Jurisdiction",
      "Representation before Appellate Tribunals (Customs, Tax, Environmental, and Service Tribunals)",
      "Contempt of Court Proceedings for Non-Compliance of Superior Court Judgments",
    ],
    keyConsiderations: [
      "Formulating substantial questions of law of general public importance for Supreme Court leave",
      "Overcoming preliminary maintainability hurdles under Article 199 where alternative remedies exist",
      "Securing protective interim relief pending final appellate determination",
      "Mastery of landmark authoritative precedents of the Supreme Court of Pakistan",
    ],
    clientTypes: [
      "Litigants Appealing from Adverse Trial Court or High Court Decisions",
      "Aggrieved Citizens & Corporate Bodies Seeking Constitutional Redress",
      "Civil Servants, Statutory Employees & Regulated Sector Entities",
      "Corporations Defending Against Unlawful Administrative or Regulatory Orders",
    ],
  },
  {
    number: "07",
    slug: "tax-advisory",
    title: "Tax Advisory & Revenue Jurisprudence",
    tagline: "Strategic fiscal counsel, direct & indirect tax planning, FBR compliance, and contentious revenue litigation across appellate tribunals and High Courts.",
    summary: "Corporate & individual tax planning, FBR regulatory defense, sales tax compliance, and appellate tax litigation before ATIR and High Courts.",
    overview:
      "AST Law Firm delivers comprehensive tax advisory, fiscal planning, and contentious revenue controversy representation across Pakistan. Navigating the country's intricate and rapidly evolving tax landscape demands both forensic statutory interpretation and fearless courtroom advocacy. Our chambers counsel corporate enterprises, multinational ventures, financial institutions, and high-net-worth individuals across federal and provincial fiscal regimes—including the Federal Board of Revenue (FBR), Punjab Revenue Authority (PRA), Sindh Revenue Board (SRB), and Khyber Pakhtunkhwa Revenue Authority (KPRA). From proactive tax diagnostic audits, cross-border treaty structuring, and withholding tax compliance to high-stakes defense before the Commissioner Inland Revenue (Appeals), Appellate Tribunal Inland Revenue (ATIR), and High Court reference benches, our advocates ensure robust legal protection against arbitrary assessments, unlawful bank attachments, and statutory penalties.",
    statutoryFramework: [
      "Income Tax Ordinance, 2001 & Income Tax Rules, 2002",
      "Sales Tax Act, 1990 & Federal Excise Act, 2005",
      "Provincial Sales Tax on Services Statutes (PRA, SRB, KPRA & BRA Acts)",
      "Federal Board of Revenue (FBR) Act, 2007 & SRO Regulatory Notifications",
      "Customs Act, 1969 & Appellate Tribunal Rules",
      "Constitution of the Islamic Republic of Pakistan, 1973 (Article 199 - Fiscal Writs)",
    ],
    proceduralStages: [
      {
        title: "Fiscal Audit Diagnostic & Exposure Scrutiny",
        desc: "Forensic scrutiny of statutory accounts, withholding statements, sales tax returns, and transaction records to identify latent audit exposure before statutory notices are triggered.",
      },
      {
        title: "Show-Cause Response & Assessment Scrutiny",
        desc: "Drafting rigorous, evidence-backed legal replies to audit questionnaires, Section 122/177 notices under the Income Tax Ordinance, and show-cause proceedings under Section 11 of the Sales Tax Act.",
      },
      {
        title: "First Appellate Forum: Commissioner (Appeals)",
        desc: "Instituting statutory appeals before the Commissioner Inland Revenue (Appeals), formulating grounds of appeal, and securing protective interim orders against arbitrary tax recovery.",
      },
      {
        title: "Second Appellate Forum: Appellate Tribunal (ATIR)",
        desc: "Conducting evidentiary and legal arguments before the Appellate Tribunal Inland Revenue (ATIR) against erroneous assessments, arbitrary disallowances, and unlawful penalties.",
      },
      {
        title: "High Court Tax References & Constitutional Writs",
        desc: "Instituting Tax Reference Applications under Section 133 ITO before High Court Benches on questions of law, and filing Article 199 Constitutional Writ Petitions challenging ultra vires levies or coercive bank attachments under Section 140.",
      },
    ],
    scopeOfServices: [
      "Corporate & Commercial Income Tax Planning, Structuring & Advisory",
      "Federal (FBR) & Provincial Sales Tax on Services Compliance (SRB, PRA, KPRA, BRA)",
      "Representation before Commissioner Inland Revenue (Appeals) & Appellate Tribunal (ATIR)",
      "High Court Tax References (Section 133 ITO) & Constitutional Fiscal Writs (Article 199)",
      "Withholding Tax (WHT) Audits, Monitoring Notices & Annual Return Scrutiny",
      "Securing Urgent Interim Restraining Orders against Coercive Recovery (Section 140 ITO)",
      "Cross-Border Taxation, Double Taxation Avoidance Agreements (DTAA) & Foreign Remittances",
      "Tax Exemption Petitions, Non-Profit Organization (NPO) Section 100C Approvals & Advance Rulings",
      "Customs Valuation Disputes, Tariff Classification & Anti-Dumping Appeals",
      "Defense in Criminal Tax Proceedings, Concealment Allegations & Penalty Mitigation",
    ],
    keyConsiderations: [
      "Strict monitoring of jurisdictional limitation thresholds (30/60-day deadlines) to maintain statutory appeal rights",
      "Preempting coercive bank account attachments under Section 140 through timely High Court injunctive relief",
      "Challenging ultra vires statutory regulatory orders (SROs) and arbitrary reassessment notices under Section 122(5A)",
      "Harmonizing inter-provincial sales tax disputes to eliminate double taxation across multiple revenue authorities",
      "Ensuring corporate transaction documents and transfer pricing protocols withstand FBR anti-avoidance scrutiny",
    ],
    clientTypes: [
      "Public & Private Limited Companies across Manufacturing, Energy, Tech & Telecom",
      "Multinational Corporations & Foreign Direct Investors Entering Pakistan",
      "Commercial Developers, Contractors & Engineering Project Sponsors",
      "High-Net-Worth Individuals, Family Business Dynasties & Asset Holding Trusts",
      "Importers, Exporters, Logistics Networks & Supply Chain Operators",
      "Non-Profit Foundations & Statutory Institutions Seeking Fiscal Exemptions",
    ],
  },
];
