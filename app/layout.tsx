import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

export const metadata: Metadata = {
  title: "Ali Feteha — AI Engineer",
  description:
    "AI Engineer specialized in multi-agent architectures, RAG pipelines, LLM fine-tuning, and Azure AI platform engineering. Microsoft Certified Azure AI Engineer Associate and IEEE-published researcher.",
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":true;document.documentElement.classList.toggle("dark",d);}catch(e){document.documentElement.classList.add("dark");}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={`${inter.variable} ${grotesk.variable} font-sans`}>{children}</body>
    </html>
  );
}
