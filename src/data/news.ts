export type NewsCategory = "Firm News" | "Case Updates" | "Legal Updates";

export const NEWS_CATEGORIES: NewsCategory[] = ["Firm News", "Case Updates", "Legal Updates"];

export type CoverIcon =
  | "gavel"
  | "landmark"
  | "scale"
  | "pickaxe"
  | "mountain"
  | "banknote"
  | "building"
  | "file"
  | "zap"
  | "handshake";

export type CoverMotif = "merger" | "columns" | "arches" | "scales";
export type CoverTone = "green" | "ink" | "sand";

export interface NewsSource {
  label: string;
  url: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  category: NewsCategory;
  /** Shown on the card, e.g. "6 July 2026" or "Since 2020" */
  dateLabel: string;
  excerpt: string;
  /** Optional closing phrase of `title` that the featured heading sets in gold italic */
  accent?: string;
  cover: {
    icon: CoverIcon;
    /** Line-art illustration drawn behind the kicker */
    motif?: CoverMotif;
    /** Overrides the colour normally implied by the category */
    tone?: CoverTone;
    /** Large gold headline on the typographic cover, e.g. "27th" or "489-F" */
    kicker: string;
    /** Small caption under the kicker */
    label: string;
  };
  body: { heading?: string; paragraphs: string[] }[];
  takeaways?: string[];
  sources?: NewsSource[];
  /** Practice area page this item relates to */
  relatedPractice?: { label: string; href: string };
  featured?: boolean;
}

/**
 * Display order = array order (curated, not date-sorted) so firm stories and
 * legal developments are mixed on the page.
 *
 * Public-development items summarise published reports and judgments in our own
 * words; each lists its sources. Firm items only restate what is already on the
 * Legacy and attorney profile pages.
 */
export const newsItems: NewsItem[] = [
  {
    slug: "ast-law-firm-unification-2026",
    title: "Two Legacies. One Firm. Introducing AST Law Firm.",
    accent: "Introducing AST Law Firm.",
    category: "Firm News",
    dateLabel: "2026",
    excerpt:
      "Thirty-four years of superior-court heritage and a modern multi-city practice come together under one name, with chambers in Islamabad, Abbottabad and Karachi.",
    cover: { icon: "handshake", kicker: "1992–2026", label: "One firm, one lineage", motif: "merger", tone: "green" },
    featured: true,
    body: [
      {
        paragraphs: [
          "In 2026 Tanawal Law Associates (TLA), founded in 1992 by Haji Sabir Hussain Tanoli, Advocate Supreme Court of Pakistan, and Ahmed Sabir Tanoli Law Firm formally merged under a single identity: AST Law Firm (Ahmed Sabir Tanoli).",
          "The union joins Haji Sabir Hussain Tanoli's senior Supreme Court heritage with the executive leadership of Ahmed Hussain Tanoli, Advocate High Court, who serves as Co-Founder and Managing Partner and directs client intake, consultations and case strategy across the firm.",
        ],
      },
      {
        heading: "Coordinated chambers",
        paragraphs: [
          "The consolidated practice operates from three chambers: the Islamabad principal chambers at Barrister Arcade, G 10/1; the Abbottabad chambers at Sherpao Lawyers Plaza; and the Karachi chamber at Namco Centre, Campbell Street.",
          "Clients now have a single point of contact for litigation, advisory and documentation work across the superior courts, district courts and specialised tribunals of Pakistan.",
        ],
      },
    ],
    takeaways: [
      "Founded in 1992 as Tanawal Law Associates by Haji Sabir Hussain Tanoli",
      "Unified in 2026 as AST Law Firm (Ahmed Sabir Tanoli)",
      "Executive management by Ahmed Hussain Tanoli, Advocate High Court",
      "Chambers in Islamabad, Abbottabad and Karachi",
    ],
    relatedPractice: { label: "Our legacy", href: "/legacy" },
  },
  {
    slug: "supreme-court-land-compensation-market-value-swabi",
    title: "Supreme Court: land compensation cannot rest on notified rates alone",
    category: "Case Updates",
    dateLabel: "6 July 2026",
    excerpt:
      "In a Swabi canal-acquisition case the Supreme Court upheld enhanced compensation, holding that market value, development potential and delay must all be weighed.",
    cover: { icon: "scale", kicker: "Sec. 23", label: "Land Acquisition Act, 1894" },
    body: [
      {
        paragraphs: [
          "As reported on 6 July 2026, the Supreme Court of Pakistan, in a judgment authored by Justice Muhammad Ali Mazhar, dismissed the government's appeals in a land-compensation dispute arising from the acquisition of land in Swabi for a canal project.",
          "The landowners had argued that the compensation offered was far below the true value of their land. Both the Reference Court and the Peshawar High Court had already enhanced the award, and the Supreme Court left those enhancements in place.",
        ],
      },
      {
        heading: "What the Court emphasised",
        paragraphs: [
          "Compensation cannot be fixed only by looking at government-notified rates. Authorities and courts must also consider the prevailing market value of the land, its potential future use and its prospects for development.",
          "Where acquisition proceedings are delayed, the rise in land prices and the effect of inflation over that period should be reflected in the compensation awarded.",
        ],
      },
      {
        heading: "Why it matters for landowners",
        paragraphs: [
          "For owners in Khyber Pakhtunkhwa and elsewhere, the ruling reinforces the evidentiary value of comparable sales, location and development potential when contesting an award before the Reference Court under Section 18 of the Land Acquisition Act, 1894. Land acquisition disputes and compensation claims are a continuing part of our chambers' practice.",
        ],
      },
    ],
    takeaways: [
      "Notified rates are a starting point, not a ceiling",
      "Location, potential and development prospects bear on market value",
      "Delay in acquisition can justify compensation that reflects price rises and inflation",
    ],
    sources: [
      {
        label: "Dunya News — Supreme Court rules landowners must receive fair market compensation",
        url: "https://dunyanews.tv/en/Pakistan/961099-supreme-court-rules-landowners-must-receive-fair-market-compensation-f",
      },
    ],
    relatedPractice: { label: "Litigation & Trial Advocacy", href: "/practice-areas/litigation" },
  },
  {
    slug: "sk-hydro-power-project-naran",
    title: "SK Hydro Power Project, Naran: legal advisory and litigation",
    category: "Firm News",
    dateLabel: "Since 2020",
    excerpt:
      "A landmark infrastructure engagement covering comprehensive advisories and full litigation before the district courts and the Peshawar High Court, Abbottabad Bench.",
    cover: { icon: "zap", kicker: "884 MW", label: "Kunhar River · Naran–Balakot" },
    body: [
      {
        paragraphs: [
          "Among the high-value infrastructure mandates entrusted to our chambers is the SK Hydro Power Project at Naran, for which the firm has provided comprehensive legal advisories together with full litigation.",
          "The work has spanned civil matters before the courts at Mansehra and Balakot and proceedings before the Peshawar High Court, Abbottabad Bench.",
        ],
      },
      {
        heading: "About the project",
        paragraphs: [
          "SK Hydro is the developer of the 884 MW Suki Kinari Hydropower Project on the Kunhar River in Balakot Tehsil, Mansehra District, Khyber Pakhtunkhwa. The run-of-the-river plant, built around four 221 MW Pelton turbines, entered commercial operation on 13 September 2024 and is one of the early-harvest projects of the China–Pakistan Economic Corridor.",
        ],
      },
    ],
    takeaways: [
      "Full advisory and litigation support for a major hydropower project",
      "Civil matters at Mansehra and Balakot; High Court matters at the Abbottabad Bench",
      "Illustrates the chambers' infrastructure, land and regulatory capability in Hazara",
    ],
    sources: [
      { label: "Wikipedia — Suki Kinari Hydropower Project", url: "https://en.wikipedia.org/wiki/Suki_Kinari_Hydropower_Project" },
      { label: "CPEC Secretariat — 884 MW Suki Kinari Hydropower Project", url: "https://cpec.gov.pk/project-details/15" },
    ],
    relatedPractice: { label: "Litigation & Trial Advocacy", href: "/practice-areas/litigation" },
  },
  {
    slug: "financial-institutions-recovery-amendment-bill-2026",
    title: "Senate approves Financial Institutions Recovery Amendment Bill 2026",
    category: "Legal Updates",
    dateLabel: "23 May 2026",
    excerpt:
      "Banks would be able to auction mortgaged property after three notices without prior court approval, and banking courts could not grant injunctions without hearing the lender. Reports focus on housing finance.",
    cover: { icon: "banknote", kicker: "FIRO 2026", label: "Ordinance XLVI of 2001" },
    body: [
      {
        paragraphs: [
          "On 23 May 2026 it was reported that the Senate had approved the Financial Institutions (Recovery of Finances) Amendment Bill 2026. The report said the law was expected to come into force after the President's assent, and did not confirm National Assembly passage, so the current status should be checked before relying on it.",
        ],
      },
      {
        heading: "Key changes as reported",
        paragraphs: [
          "Borrowers who default on mortgaged (housing) finance would receive three written notices, each 30 days apart. If the dues remain unpaid after the final notice, the financial institution could auction the mortgaged property without first obtaining court approval.",
          "An auction could not take place earlier than 15 business days after the notice is published. Borrowers would have five business days to match the highest bid, and banks would have to decide restructuring or settlement requests within 30 days. Deputy commissioners could be enlisted to secure possession, and banking courts would be barred from granting injunctions against recovery proceedings without first hearing the institution.",
        ],
      },
      {
        heading: "Practical impact",
        paragraphs: [
          "If enacted as reported, the timeline for defending mortgage enforcement would shorten considerably. Borrowers and guarantors should respond to each notice in writing, document repayments and restructuring requests, and seek advice before the final notice expires.",
        ],
      },
    ],
    takeaways: [
      "Three notices at 30-day intervals before a mortgage auction",
      "No prior court approval to auction, if enacted as reported",
      "Injunctions against recovery require the bank to be heard first",
      "Confirm the bill's current status before relying on it",
    ],
    sources: [
      {
        label: "ProPakistani — Banks can now sell mortgaged homes (23 May 2026)",
        url: "https://propakistani.pk/2026/05/23/bad-time-to-be-a-defaulter-in-pakistan-as-banks-can-now-sell-mortgaged-homes/",
      },
    ],
    relatedPractice: { label: "Litigation & Trial Advocacy", href: "/practice-areas/litigation" },
  },
  {
    slug: "federal-constitutional-court-27th-amendment",
    title: "The Federal Constitutional Court: what the 27th Amendment changes for litigants",
    category: "Legal Updates",
    dateLabel: "13 November 2025",
    excerpt:
      "A new apex forum for constitutional questions and federal–provincial disputes reshapes where constitutional appeals and fundamental-rights matters are heard.",
    cover: { icon: "landmark", kicker: "27th", label: "Constitutional Amendment", motif: "columns" },
    body: [
      {
        paragraphs: [
          "Parliament passed the Twenty-seventh Amendment to the Constitution in November 2025 and it received presidential assent. Among its principal features is the creation of a Federal Constitutional Court (FCC). The court was established on 13 November 2025, and Justice Aminuddin Khan was appointed its first Chief Justice on 14 November 2025. The reform has attracted considerable public and professional debate.",
        ],
      },
      {
        heading: "Jurisdiction",
        paragraphs: [
          "As summarised in published accounts, the FCC hears disputes between the federation and a province or among provinces, questions of constitutional interpretation, appeals from High Courts that involve substantial constitutional questions, and matters concerning the enforcement of fundamental rights that fall within its jurisdiction. Cases pending before other courts that fall within that jurisdiction stand transferred to it.",
        ],
      },
      {
        heading: "What litigants should do",
        paragraphs: [
          "Constitutional petitions, appeals and review applications should now be drafted with the correct apex forum in mind from the outset. Practitioners should confirm, for each pending or contemplated matter, whether it will proceed before the Supreme Court or the FCC, and track the rules and practice directions that govern the new court.",
        ],
      },
    ],
    takeaways: [
      "The FCC was established on 13 November 2025 in Islamabad",
      "It hears constitutional interpretation, federal–provincial disputes and certain fundamental-rights matters",
      "Pending matters within its jurisdiction stand transferred",
      "Confirm the correct apex forum before filing",
    ],
    sources: [
      { label: "Wikipedia — Federal Constitutional Court of Pakistan", url: "https://en.wikipedia.org/wiki/Federal_Constitutional_Court_of_Pakistan" },
      { label: "Wikipedia — Twenty-seventh Amendment to the Constitution of Pakistan", url: "https://en.wikipedia.org/wiki/Twenty-seventh_Amendment_to_the_Constitution_of_Pakistan" },
      {
        label: "The Express Tribune — NA approves 27th Constitutional Amendment",
        url: "https://tribune.com.pk/story/2577064/na-set-to-vote-on-27th-amendment-bill-today-amid-pti-lawyers-outrage",
      },
    ],
    relatedPractice: { label: "Superior Court Representation", href: "/practice-areas/legal-representation" },
  },
  {
    slug: "institutional-retainers-hazara-university-aust",
    title: "Continuing institutional retainers: Hazara University Mansehra and AUST",
    category: "Firm News",
    dateLabel: "Ongoing",
    excerpt:
      "Standing legal advisory and institutional representation for leading educational institutions, including service and employment matters.",
    cover: { icon: "building", kicker: "Retainers", label: "Educational institutions", motif: "arches" },
    body: [
      {
        paragraphs: [
          "Institutional counsel is a core strand of our practice. The firm continues to act as standing legal adviser to Hazara University Mansehra, providing advisory and institutional representation.",
          "It also holds a retained advisory mandate for AUST, which includes service and employment matters.",
        ],
      },
      {
        heading: "What an institutional retainer covers",
        paragraphs: [
          "Retained clients receive ongoing access to counsel for governance questions, contracts, employment and service disputes, and representation before the courts and tribunals where a matter escalates, all coordinated by a single chamber that knows the institution.",
        ],
      },
    ],
    takeaways: [
      "Standing advisory and representation for Hazara University Mansehra",
      "Retained advisory services for AUST, including service and employment matters",
    ],
    relatedPractice: { label: "Strategic Legal Advisory", href: "/practice-areas/legal-advisory" },
  },
  {
    slug: "punjab-mines-and-minerals-act-2025",
    title: "Punjab Assembly approves the Mines and Minerals Bill 2025",
    category: "Legal Updates",
    dateLabel: "10 December 2025",
    excerpt:
      "A new licensing authority, a dedicated Mines and Minerals Force and a modern title system: what concession-holders in Punjab should review.",
    cover: { icon: "pickaxe", kicker: "Act XCVIII", label: "Punjab Mines & Minerals Act, 2025" },
    body: [
      {
        paragraphs: [
          "On 10 December 2025 it was reported that the Punjab Assembly had approved the Punjab Mines and Minerals Bill 2025. The text now appears on the Punjab Code as the Punjab Mines and Minerals Act, 2025 (Act XCVIII of 2025).",
        ],
      },
      {
        heading: "Headline features as reported",
        paragraphs: [
          "The law establishes a dedicated licensing authority with power to issue, suspend and cancel licences and to run modernised procedures for granting and renewing titles. A Mines and Minerals Force headed by a Director General is to combat illegal mining, supported by special mining police stations and courts. An Exploration Promotion Division will maintain centralised geological information to promote exploration.",
          "Officials described the aim as legal certainty for investors, transparency and environmentally responsible mining. The report states that earlier mining legislation will be repealed once the Governor gives final approval. The text of the Act should be consulted for exactly which instruments are repealed and how existing titles are saved.",
        ],
      },
      {
        heading: "What concession-holders should check",
        paragraphs: [
          "Holders of licences and leases granted under the Punjab Mining Concession Rules, 2002 should review how the new Act's transitional and savings provisions treat existing titles, pending applications and appeals, and how the new licensing authority and enforcement powers affect day-to-day compliance.",
        ],
      },
    ],
    takeaways: [
      "New licensing authority and title procedures",
      "Dedicated Mines and Minerals Force with special police stations and courts",
      "Review the treatment of existing titles under the transitional provisions",
    ],
    sources: [
      {
        label: "Dunya News — Punjab Assembly approves new mining law (10 December 2025)",
        url: "https://dunyanews.tv/en/Pakistan/922972-punjab-assembly-approves-new-mining-law-to-attract-local-and-foreign-i",
      },
      {
        label: "Punjab Code — The Punjab Mines and Minerals Act, 2025 (Act XCVIII of 2025)",
        url: "https://punjabcode.punjab.gov.pk/uploads/articles/the-punjab-mines-and-minerals-act-2025-act-xcviii-of-2025-converted-pdf.pdf",
      },
    ],
    relatedPractice: { label: "Mines & Minerals practice — Ahmed Hussain Tanoli", href: "/attorneys/ahmed-hussain-tanoli#practice-domains" },
  },
  {
    slug: "finance-act-2026-faceless-tax-administration",
    title: "Finance Act 2026: faceless audits, e-invoicing and new withholding taxes",
    category: "Legal Updates",
    dateLabel: "July 2026",
    excerpt:
      "A National Faceless Center, mandatory e-invoicing and expanded bank reporting take effect from 1 July 2026.",
    cover: { icon: "file", kicker: "FA 2026", label: "Income tax & sales tax" },
    body: [
      {
        paragraphs: [
          "The Finance Act 2026, effective 1 July 2026, changes how taxpayers will deal with the tax authorities as well as what they pay.",
        ],
      },
      {
        heading: "Faceless administration",
        paragraphs: [
          "A National Faceless Center is established to allow algorithm-based, remote handling of audits and appeals, with the identity of the tax officer kept confidential to promote impartiality. Taxpayers facing audit selection, show-cause notices or appeals will need to be ready to respond entirely through electronic channels.",
        ],
      },
      {
        heading: "Compliance measures",
        paragraphs: [
          "The Act makes integration with the e-invoicing system mandatory in the sales tax regime, with deregistration risk for non-compliance. Banks must report transaction data for accounts whose aggregate deposits or withdrawals exceed PKR 100 million, and a new 5% withholding tax applies to revenues that digital content creators receive from platforms such as YouTube, Facebook and TikTok.",
        ],
      },
    ],
    takeaways: [
      "Audits and appeals move to a faceless, electronic process",
      "E-invoicing integration becomes mandatory for sales tax registrants",
      "Expanded bank reporting above PKR 100 million in aggregate transactions",
      "Keep records organised: faceless proceedings depend on what is submitted electronically",
    ],
    sources: [
      {
        label: "KPMG — Pakistan: Tax and customs measures in Finance Act 2026 (7 July 2026)",
        url: "https://kpmg.com/us/en/taxnewsflash/news/2026/07/pakistan-tax-customs-measures-finance-act-2026.html",
      },
    ],
    relatedPractice: { label: "Tax Advisory & Revenue Jurisprudence", href: "/practice-areas/tax-advisory" },
  },
  {
    slug: "labour-courts-peshawar-high-court-hrsg-east-west",
    title: "Labour Courts and the Peshawar High Court: HRSG and East and West Company",
    category: "Firm News",
    dateLabel: "Ongoing",
    excerpt:
      "Retained matters before the Labour Courts and strategic litigation before the Peshawar High Court, Abbottabad Bench.",
    cover: { icon: "gavel", kicker: "PHC", label: "Abbottabad Bench", motif: "scales" },
    body: [
      {
        paragraphs: [
          "Our chambers act for HRSG, a sourcing company based in Islamabad, in retained legal matters that include proceedings before the Labour Courts and the Peshawar High Court, Abbottabad Bench.",
          "The firm also provides strategic litigation and legal representation to East and West Company before the Peshawar High Court, Abbottabad Bench.",
        ],
      },
    ],
    takeaways: [
      "Retained employment and labour matters for HRSG",
      "Strategic litigation for East and West Company at the Abbottabad Bench",
    ],
    relatedPractice: { label: "Superior Court Representation", href: "/practice-areas/legal-representation" },
  },
  {
    slug: "secp-183-amendments-companies-act-2017",
    title: "SECP proposes 183 amendments to the Companies Act, 2017",
    category: "Legal Updates",
    dateLabel: "14 January 2026",
    excerpt:
      "Digital filings, remote meetings, lighter compliance and a shift from penal sanctions to regulatory penalties are on the table for company directors.",
    cover: { icon: "file", kicker: "183", label: "Proposed amendments" },
    body: [
      {
        paragraphs: [
          "On 14 January 2026 the Securities and Exchange Commission of Pakistan (SECP) put forward 183 amendments to the Companies Act, 2017, prepared with the Board of Investment. At the time of reporting these were proposals and not enacted law.",
        ],
      },
      {
        heading: "Direction of the proposals",
        paragraphs: [
          "The stated aims are to reduce the regulatory burden on businesses, enhance digitalisation through electronic filing and remote meeting participation, improve transparency, simplify reporting and adopt globally recognised corporate-governance principles. The package also proposes replacing certain penal sanctions with regulatory remedies and monetary penalties.",
        ],
      },
      {
        heading: "What boards should do now",
        paragraphs: [
          "Directors and company secretaries should follow the legislative progress of the package, review their governance and filing calendars against the direction of reform, and continue to comply with the Act as it stands until any amendment is enacted and notified.",
        ],
      },
    ],
    takeaways: [
      "The package is a proposal, not yet law",
      "Emphasis on e-filing, remote meetings and simplified compliance",
      "Penal sanctions would give way to regulatory penalties in some areas",
    ],
    sources: [
      {
        label: "Profit by Pakistan Today — SECP proposes 183 amendments to Companies Act, 2017",
        url: "https://profit.pakistantoday.com.pk/2026/01/14/secp-proposes-183-amendments-to-companies-act-2017-to-streamline-regulatory-process-and-boost-ease-of-business",
      },
    ],
    relatedPractice: { label: "Corporate & Commercial", href: "/practice-areas/corporate-commercial" },
  },
  {
    slug: "supreme-court-489f-cheque-not-debt-recovery-noman-khaliq",
    title: "Noman Khaliq v. The State: Section 489-F is not a debt-recovery tool",
    category: "Case Updates",
    dateLabel: "11 August 2023",
    excerpt:
      "The Supreme Court granted bail in a dishonoured-cheque case and stressed that business disputes belong in civil court under Order XXXVII CPC.",
    cover: { icon: "gavel", kicker: "489-F", label: "2023 SCMR 2122" },
    body: [
      {
        paragraphs: [
          "In Noman Khaliq v. The State (2023 SCMR 2122), decided on 11 August 2023 by a bench of Justice Sayyed Mazahar Ali Akbar Naqvi and Justice Syed Hasan Azhar Rizvi, the Supreme Court of Pakistan considered a prosecution under Section 489-F of the Pakistan Penal Code arising from three dishonoured cheques.",
          "The parties had a business relationship: the complainant had invested Rs 2.9 million on an agreed profit-sharing basis, and the cheques were issued for the amount in dispute.",
        ],
      },
      {
        heading: "The Court's reasoning",
        paragraphs: [
          "The Court held that Section 489-F was not intended as a tool for recovering money, and that civil remedies such as a summary suit under Order XXXVII of the Code of Civil Procedure exist for that purpose. Whether the cheques were issued in repayment of a loan or for a business purpose was a question of fact to be determined at trial.",
          "Bail was granted. The Court noted that, for offences outside the prohibitory clause of Section 497 Cr.P.C. (the maximum sentence here being three years), bail is the rule and refusal the exception, and that the petitioner had already spent five months in custody. Absconsion alone could not justify refusing bail.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "The decision is useful authority against the use of criminal process to pressure a party in a commercial dispute, and it is relevant to bail applications and to challenges where a civil controversy has been given a criminal colour.",
        ],
      },
    ],
    takeaways: [
      "Section 489-F PPC is not a mechanism for recovering money",
      "Commercial disputes have a civil remedy under Order XXXVII CPC",
      "Bail is the rule for offences outside the prohibitory clause",
    ],
    sources: [
      {
        label: "PakistanKanoon — Noman Khaliq v. The State, 2023 SCMR 2122",
        url: "https://pakistankanoon.com/supreme-court-law-review/sclr-november-2023/2023-sclr-71/",
      },
    ],
    relatedPractice: { label: "Litigation & Trial Advocacy", href: "/practice-areas/litigation" },
  },
  {
    slug: "kp-mines-and-minerals-bill-2025",
    title: "KP Mines and Minerals Bill 2025: what concession-holders should watch",
    category: "Legal Updates",
    dateLabel: "Bill 52 of 2025",
    excerpt:
      "A proposed overhaul of the 2017 Act, including an investment authority and a restructured appellate tribunal, remained under debate in the provincial assembly.",
    cover: { icon: "mountain", kicker: "Bill 52", label: "KP Mines & Minerals Bill, 2025" },
    body: [
      {
        paragraphs: [
          "The Khyber Pakhtunkhwa Mines and Minerals Bill, 2025 was introduced in the provincial assembly on 4 April 2025. It proposes to amend the existing Khyber Pakhtunkhwa Mines and Minerals Act, 2017. In the reports we reviewed, the latest of which date from December 2025, the bill had not been passed. Its current status should be confirmed before relying on it.",
        ],
      },
      {
        heading: "Proposals as reported",
        paragraphs: [
          "The bill aims to attract investment, enhance transparency and curb illegal mining. Reported features include a Mineral Investment Facilitation Authority, dedicated licensing arrangements and a joint-venture requirement for large-scale mining projects above a stated investment threshold. Reports also say the appellate tribunal, previously chaired by the Secretary of Minerals, would instead be led by a former High Court judge to strengthen impartiality.",
          "The bill drew criticism from allies and opposition, including on provincial autonomy.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Title-holders in Abbottabad, Haripur, Swat, Nowshera and the merged districts would be affected by any change to licensing, joint-venture rules and the appeal route. Until a new law is enacted, the 2017 Act and its rules continue to apply.",
        ],
      },
    ],
    takeaways: [
      "The 2017 Act continues to apply until amended",
      "Proposed investment authority and joint-venture requirement for large projects",
      "Proposed change to the leadership of the appellate tribunal",
      "Confirm the bill's status with the assembly before acting on it",
    ],
    sources: [
      {
        label: "Wikipedia — The Khyber Pakhtunkhwa Mines and Minerals Bill, 2025",
        url: "https://en.wikipedia.org/wiki/The_Khyber_Pakhtunkhwa_Mines_and_Minerals_Bill,_2025",
      },
      { label: "Provincial Assembly of KP — The Khyber Pakhtunkhwa Mines and Minerals Bill, 2025", url: "https://www.pakp.gov.pk/bill/the-khyber-pakhtunkhwa-mines-and-minerals-bill-2025/" },
      { label: "Geo News — What is KP’s mining bill?", url: "https://www.geo.tv/latest/600247-what-is-kps-mining-bill" },
    ],
    relatedPractice: { label: "Mines & Minerals practice — Ahmed Hussain Tanoli", href: "/attorneys/ahmed-hussain-tanoli#practice-domains" },
  },
  {
    slug: "arbitration-seat-decisive-supreme-court-reform-pending",
    title: "Arbitration in Pakistan: the seat decides, and the reform bill is still pending",
    category: "Case Updates",
    dateLabel: "August 2026",
    excerpt:
      "Two 2024 Supreme Court rulings make the seat of arbitration decisive, while the draft Arbitration Act 2024 remains before the National Assembly.",
    cover: { icon: "scale", kicker: "1940", label: "Arbitration Act still governs" },
    body: [
      {
        paragraphs: [
          "Two Supreme Court decisions from 2024 have made the drafting of the arbitration seat critical. In AMC v. Teisei the Court held that the seat of the arbitration, and not the law governing the contract or the parties, determines the nationality of an award. In SpaceCom v. Wateen Telecom the Court indicated that genuinely foreign awards will be enforced, but only where the parties have defined the seat clearly and unambiguously.",
        ],
      },
      {
        heading: "Reform is stalled",
        paragraphs: [
          "As of an analysis published on 5 August 2026, the draft Arbitration Act 2024 remains pending in the National Assembly and no bill was passed in 2025. The draft would replace the Arbitration Act, 1940 with an UNCITRAL Model Law-based regime, give tribunals the power to order interim measures, adopt competence-competence and disclosure rules based on the IBA Guidelines, and reduce judicial intervention.",
          "Until it passes, arbitrations seated in Pakistan remain governed by the 1940 Act, while foreign-seated arbitrations are dealt with under the Recognition and Enforcement (Arbitration Agreements and Foreign Arbitral Awards) Act, 2011.",
        ],
      },
      {
        heading: "Drafting points",
        paragraphs: [
          "Arbitration clauses should name the juridical seat expressly and keep it distinct from the venue of hearings. Commentators have suggested that cross-border parties consider established international seats while the domestic framework remains unreformed. Parties should decide this at the contract stage rather than after a dispute has arisen.",
        ],
      },
    ],
    takeaways: [
      "The seat determines the nationality of an award",
      "Foreign awards are enforced where the seat is clearly defined",
      "Domestic arbitration remains under the Arbitration Act, 1940",
      "Name the seat expressly and separate it from the venue",
    ],
    sources: [
      {
        label: "Daily Jus — Pakistan’s Arbitration Reform: What Cross-Border Users Should Watch in 2026 (5 August 2026)",
        url: "https://dailyjus.com/world/2026/08/pakistans-arbitration-reform-what-cross-border-users-should-watch-in-2026",
      },
    ],
    relatedPractice: { label: "Dispute Resolution & ADR", href: "/practice-areas/dispute-resolution" },
  },
  {
    slug: "land-acquisition-disputes-compensation-claims",
    title: "Land acquisition disputes and compensation claims",
    category: "Firm News",
    dateLabel: "Ongoing",
    excerpt:
      "Representing landholders in acquisition proceedings and compensation references before the Collector, the Reference Court and the High Court.",
    cover: { icon: "scale", kicker: "Sec. 18", label: "Reference to the Court" },
    body: [
      {
        paragraphs: [
          "Land acquisition matters and compensation claims form an enduring part of our litigation practice.",
          "We act for proprietary landholders and developers before the Land Acquisition Collector and, on a reference under Section 18 of the Land Acquisition Act, 1894, before the Reference Court, seeking fair statutory compensation.",
        ],
      },
      {
        heading: "Recent authority",
        paragraphs: [
          "The Supreme Court's July 2026 ruling in a Swabi canal-acquisition case, which stresses market value, development potential and the effect of delay, is directly relevant to this work. See our case update on the decision.",
        ],
      },
    ],
    takeaways: [
      "Representation before the Collector, the Reference Court and the High Court",
      "Compensation claims grounded in market value and evidence of comparable sales",
    ],
    relatedPractice: { label: "Litigation & Trial Advocacy", href: "/practice-areas/litigation" },
  },
  {
    slug: "mines-and-minerals-practice-kpk-punjab",
    title: "Ahmed Hussain Tanoli leads mines and minerals work in KPK and Punjab",
    category: "Firm News",
    dateLabel: "2026",
    excerpt:
      "Concession titles, royalty disputes and High Court writs under the Khyber Pakhtunkhwa and Punjab mining regimes.",
    cover: { icon: "pickaxe", kicker: "KP · PB", label: "Mines & minerals practice" },
    body: [
      {
        paragraphs: [
          "Ahmed Hussain Tanoli, Advocate High Court and Co-Founder and Managing Partner, maintains extensive domain authority in mines and minerals jurisprudence across Khyber Pakhtunkhwa and Punjab.",
          "His practice covers concession licensing and mining leases, royalty assessment controversies and appellate writ litigation before the Peshawar and Lahore High Courts under the Khyber Pakhtunkhwa Mines and Minerals Act, 2017 and the Punjab Mining Concession Rules, 2002.",
        ],
      },
      {
        heading: "Keeping clients ahead of legislation",
        paragraphs: [
          "Both provinces are reforming their mining laws. See our updates on the Punjab Mines and Minerals Act, 2025 and the pending Khyber Pakhtunkhwa Mines and Minerals Bill, 2025.",
        ],
      },
    ],
    takeaways: [
      "Concession licensing, mining leases and royalty disputes",
      "High Court writs at Peshawar and Lahore",
    ],
    relatedPractice: { label: "Full profile — Ahmed Hussain Tanoli", href: "/attorneys/ahmed-hussain-tanoli" },
  },
];

export const getNewsItem = (slug: string) => newsItems.find((n) => n.slug === slug);
