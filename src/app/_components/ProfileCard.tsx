import Image from "next/image";
import Link from "next/link";
import * as s from "./ProfileCard.css";
import { ProfileCardProps } from "@/app/_types";

export default function ProfileCard({ profile, contact }: ProfileCardProps) {
  return (
    <section className={s.card}>
      <div className={s.hero}>
        <Image
          src={profile.photoUrl}
          alt={`${profile.name} 프로필`}
          width={96}
          height={96}
          className={s.avatar}
          priority
        />
        <div>
          <h1 className={s.title}>
            {profile.name} <span>| {profile.page}</span>
          </h1>
          <p className={s.role}>{profile.title}</p>
          {profile.subtitle && <p className={s.subtitle}>{profile.subtitle}</p>}
        </div>
      </div>

      <ul className={s.kv}>
        <li>
          <span className={s.k}>Email</span>
          <Link href={`mailto:${contact.email}`} className={s.a}>
            {contact.email}
          </Link>
        </li>
        <li>
          <span className={s.k}>Phone</span>
          <a
            href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
            className={s.a}
          >
            {contact.phone}
          </a>
        </li>
        {contact.github && (
          <li>
            <span className={s.k}>Github</span>
            <Link
              href={contact.github.href}
              target="_blank"
              rel="noreferrer noopener"
              className={s.a}
            >
              {contact.github.label ?? contact.github.href}
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
}
