export interface TeamMember {
  name: string;
  designation: string;
  association: string;
  licenseNo?: string;
  court?: string;
  email?: string;
  image?: string;
}

export interface SupportStaff {
  name: string;
  position: string;
  role: string;
  description: string;
  image?: string;
}

export const seniorAssociates: TeamMember[] = [
  {
    name: "Seemab Nayyer",
    designation: "Advocate High Court",
    association: "Senior Associate / Lawyer",
    licenseNo: "BC-19-1180",
    court: "High Court & Subordinate Courts",
    image: "/team/seemab-nayyer.jpg",
  },
  {
    name: "Ayesha Sheraz Abbasi",
    designation: "Advocate High Court",
    association: "Senior Associate / Lawyer",
    licenseNo: "BC-14-5112",
    court: "High Court & Subordinate Courts",
    image: "/team/ayesha-sheraz-abbasi.jpg",
  },
  {
    name: "Hareem Shahnawaz",
    designation: "Advocate High Court",
    association: "Senior Associate / Lawyer",
    licenseNo: "BC-24-7849",
    court: "High Court & Subordinate Courts",
    image: "/team/hareem-shahnawaz.jpg",
  },
  {
    name: "Qaiser Hussain Shah",
    designation: "Advocate High Court",
    association: "Senior Associate / Lawyer",
    court: "High Court & Subordinate Courts",
    image: "/team/qaiser-hussain-shah.jpg",
  },
  {
    name: "Hafiz Gulfaraz Awan",
    designation: "Advocate High Court",
    association: "Senior Associate / Lawyer",
    licenseNo: "BC-23-6159",
    court: "High Court & Subordinate Courts",
    image: "/team/hafiz-gulfaraz-awan.jpg",
  },
  {
    name: "Shoaib Ahmed Awan",
    designation: "Advocate High Court",
    association: "Senior Associate / Lawyer",
    licenseNo: "BC-18-1425",
    court: "High Court & Subordinate Courts",
    image: "/team/shoaib-ahmed-awan.jpg",
  },
];

export const associates: TeamMember[] = [
  {
    name: "Umer Gul Khan",
    designation: "Advocate",
    association: "Associate / Lawyer",
    licenseNo: "BC-24-8042",
    court: "District & Subordinate Courts",
    image: "/team/umer-gul-khan.jpg",
  },
  {
    name: "Ibrar Hameed Tanoli",
    designation: "Advocate",
    association: "Associate / Lawyer",
    licenseNo: "BC-25-8952",
    court: "District & Subordinate Courts",
    image: "/team/ibrar-hameed-tanoli.jpg",
  },
];

export const supportStaff: SupportStaff[] = [
  {
    name: "Sartaj Ahmed",
    position: "Senior Clerk",
    role: "Head of Judicial Filings & Registry Liaison",
    description:
      "Senior chamber clerk managing court registry submissions, daily case board tracking, and procedural coordination across judicial benches.",
  },
  {
    name: "Abdul Qayyum",
    position: "Clerk",
    role: "Chamber Documentation & Records",
    description:
      "Chamber clerk responsible for legal case files maintenance, record curation, and procedural assistance.",
  },
  {
    name: "Zaheer Pervez",
    position: "Clerk",
    role: "Court Liaison & Administrative Support",
    description:
      "Chamber clerk managing courtroom scheduling, cause-list tracking, and registry communications.",
  },
];
