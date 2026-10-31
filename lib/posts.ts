import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Post = { slug: string; title: string; date: string; summary: string; draft: boolean; html: string };

const dir = path.join(process.cwd(), "content/posts");
// Drafts are hidden on the live site. Set SHOW_DRAFTS=1 to preview them locally.
const showDrafts = process.env.SHOW_DRAFTS === "1";

export function getPosts(): Post[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      return {
        slug: f.replace(/\.md$/, ""),
        title: String(data.title ?? ""),
        date: String(data.date ?? ""),
        summary: String(data.summary ?? ""),
        draft: Boolean(data.draft),
        html: marked.parse(content) as string,
      };
    })
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(d: string) {
  const date = new Date(d);
  return isNaN(+date) ? d : date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
