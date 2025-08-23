import { CareerCardProps } from "@/app/_types";
import * as s from "./CareerCard.css";

export default function CareerCard({ career }: { career: CareerCardProps }) {
  return (
    <section className={s.card}>
      <h2 className={s.h2}>Career</h2>
      <div className={s.stack}>
        {career.map((c, i) => (
          <article key={i} className={s.item}>
            <header className={s.itemHeader}>
              <h3 className={s.itemTitle}>{c.role}</h3>
              {c.period && <span className={s.period}>{c.period}</span>}
            </header>
            {c.org && <p className={s.org}>{c.org}</p>}
            {c.bullets && (
              <ul className={s.list}>
                {c.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
