"use client";

import { useState } from "react";
import Link from "next/link";
import type { Bilingual } from "@/lib/content";

type Lang = "en" | "zh";

export default function LegalView({ doc }: { doc: Bilingual }) {
  const [lang, setLang] = useState<Lang>("en");
  const d = doc[lang];

  return (
    <main className="page">
      <header className="bar">
        <Link href="/" className="brand">StepCamera</Link>
        <div className="langToggle" role="group" aria-label="Language">
          <button
            className={lang === "en" ? "on" : ""}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
          <button
            className={lang === "zh" ? "on" : ""}
            onClick={() => setLang("zh")}
            aria-pressed={lang === "zh"}
          >
            中文
          </button>
        </div>
      </header>

      <article>
        <h1>{d.title}</h1>
        {d.updated ? <p className="updated">{d.updated}</p> : null}
        <p className="intro">{d.intro}</p>
        {d.sections.map((s, i) => (
          <section key={i}>
            <h2>{s.heading}</h2>
            {s.body.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </section>
        ))}
      </article>

      <footer className="foot">
        <Link href="/privacy">{lang === "zh" ? "隐私政策" : "Privacy"}</Link>
        <span aria-hidden="true">·</span>
        <Link href="/support">{lang === "zh" ? "支持" : "Support"}</Link>
      </footer>
    </main>
  );
}
