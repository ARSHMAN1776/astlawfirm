import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teams | AST Law Firm",
  description:
    "Meet the team of AST Law Firm — experienced Supreme Court & High Court Advocates, Senior Associates, and Chamber Staff led by Haji Sabir Hussain Tanoli and Ahmed Hussain Tanoli.",
};

export default function TeamsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

