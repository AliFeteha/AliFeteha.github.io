---
title: "Answering from the latest rule: amendment-aware retrieval for legal documents"
date: "2026-11-01"
summary: "Plain RAG happily quotes a regulation that was amended last year. Here is the pattern I use to make a chatbot answer from the version that applies today, and cite the page it came from."
draft: true
---

> **Draft for Ali to review.** Replace every [bracketed note] with your own details, then change `draft: true` to `draft: false` to publish.

When you put a chatbot in front of a regulator's documents, the hardest question is not "what does the rule say?" It is "which version of the rule applies now?"

Regulations are rarely rewritten from scratch. They are amended: a section is replaced, a paragraph is added, a definition changes. The original document and its amendments all sit in the same library, and a standard retrieval pipeline treats them as equals. Ask about a requirement and you may get the 2019 wording, confidently cited, even though it was replaced in 2024.

## Why plain RAG gets this wrong

Vector search ranks passages by similarity to the question. The original text and its amendment are usually near-identical in wording, so both score highly, and nothing in the score says which one is current. [Add an example of a question that returned an outdated answer during testing.]

## The pattern

**1. Capture versions at ingestion, not at query time.** Each chunk carries the regulation it belongs to, the section it covers, and the amendment it came from. [Describe how you extracted this: document structure, naming conventions, Document Intelligence output.]

**2. Link amendments to what they change.** An amendment chunk points at the section it replaces, so the index knows which passages are superseded.

**3. Filter before you generate.** After retrieval, drop any passage whose section has a newer version, so the model only ever sees text that applies today.

**4. Cite down to the page.** Every answer carries the document and PDF page, so a person can check it in seconds. For a public regulator this matters as much as the answer itself.

## Keeping it current

New amendments are published all the time, so ingestion runs as incremental sync: only new or changed documents are extracted, OCR'd where needed, translated for Arabic retrieval, and re-indexed. [Add how often it runs and how you detect changes.]

## What I'd tell someone starting out

[Add one or two lessons you learned the hard way.]
