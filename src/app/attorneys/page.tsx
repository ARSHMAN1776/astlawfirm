import type { Metadata } from "next";
import TeamsPage from "../teams/page";

export const metadata: Metadata = {
  title: "Attorneys & Leadership | AST Law Firm",
  description:
    "Meet the partners, advocates, and legal counsel of AST Law Firm. Led by Advocate Supreme Court Haji Sabir Hussain Tanoli, Advocate High Court Ahmed Hussain Tanoli, Partner Muhammad Javed Khan Tanoli (Karachi), and Partner Muhammad Amjad Hussain Tanoli (Abbottabad & Hazara Division).",
};

export default function AttorneysPage() {
  return <TeamsPage />;
}
