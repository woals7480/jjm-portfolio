"use client";
import { SkillProps } from "../_types";
import * as s from "./SkillStackCard.css";

export default function SkillStackCard({ skills }: { skills: SkillProps[] }) {
  return (
    <section className={s.card} aria-label={"skill stack"}>
      <header className={s.header}>
        <span className={s.headerIcon} aria-hidden>
          🛠
        </span>
        <h2 className={s.headerTitle}>기술 스택</h2>
      </header>

      <div className={s.rows}>
        {skills.map((cat) => (
          <div key={cat.key} className={s.row}>
            <div className={s.left}>
              <span
                className={s.colorDot}
                style={{ background: cat.color }}
                aria-hidden
              />
              <span className={s.categoryLabel}>{cat.label}</span>
            </div>
            <div className={s.right}>
              {cat.skills.map((sk) => (
                <span key={sk} className={s.chip}>
                  {sk}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
