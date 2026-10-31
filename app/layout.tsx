import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Contact from "@/components/Contact";

const description =
  "AI & Software Engineer in Doha building multi-agent systems, RAG and real-time conversational AI for the Qatar Olympic Committee, Civil Aviation Authority, Qatar Foundation and Ministry of Justice.";

export const metadata: Metadata = {
  metadataBase: new URL("https://alifeteha.github.io"),
  title: { default: "Ali Feteha, AI & Software Engineer", template: "%s | Ali Feteha" },
  description,
  openGraph: {
    title: { default: "Ali Feteha, AI & Software Engineer", template: "%s | Ali Feteha" },
    description,
    url: "https://alifeteha.github.io",
    siteName: "Ali Feteha",
    type: "website",
  },
  twitter: { card: "summary", title: { default: "Ali Feteha, AI & Software Engineer", template: "%s | Ali Feteha" }, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Applies a saved theme choice before paint; otherwise the system setting wins.
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t;}catch(e){}})();`;

// Theme toggle without shipping a React client bundle.
const themeToggle = `(function(){var b=document.getElementById("theme-toggle");if(!b)return;function cur(){var d=document.documentElement.dataset.theme;if(d)return d;return matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}function label(){b.setAttribute("aria-label",cur()==="dark"?"Switch to light theme":"Switch to dark theme");}label();b.addEventListener("click",function(){var n=cur()==="dark"?"light":"dark";document.documentElement.dataset.theme=n;try{localStorage.setItem("theme",n);}catch(e){}label();});})();`;

// Marks the current section in the header.
const navCurrent = `(function(){var p=location.pathname;document.querySelectorAll("[data-nav]").forEach(function(a){var h=a.getAttribute("href");if(h!=="/"&&p.indexOf(h)===0)a.setAttribute("aria-current","page");});})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans+Arabic:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Contact />
        <script dangerouslySetInnerHTML={{ __html: themeToggle + navCurrent }} />
      </body>
    </html>
  );
}
