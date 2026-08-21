import Image from "next/image";

export default function About() {
  return (
    <main>
      <section className="service-hero">
        <h1>About</h1>
        <p className="sr-only">
          A little about who I am, techniques I trust, and why I do this work.
        </p>
      </section>

      <section className="two-col">
        <div className="portrait-frame">
          <Image
            src="/alh-headshot-2023.jpeg"
            alt="Akane Little"
            width={400}
            height={400}
            className="portrait"
          />
        </div>
        <div>
          <h2>Hi, I&apos;m Akane</h2>
          <p style={{ color: "var(--plum-soft)" }}>
            Welcome! My name is Akane (they/them) and I am a Certified Personal
            Trainer and Reiki II Practitioner based in unceded Lenape land
            (Brooklyn, NY).
          </p>
          <p style={{ color: "var(--plum-soft)", marginTop: "1rem" }}>
            I practice Personal Training and Reiki as methods tuning into our
            bodies’ innate capacities for healing, wisdom, and strength. My
            purpose is to help facilitate for clients a deepened, conscious,
            trustful connection with the infinitely wise body, whether it is
            through lifting weights or on the Reiki table.
          </p>
        </div>
      </section>

      <div className="divider"></div>

      <section style={{ padding: "2vh 8vw" }}>
        <h2>Guided by intention</h2>
        <div className="value-list">
          <div className="value-item">
            <div className="ring-icon"></div>
            <h3>Holistic Approach</h3>
            <p>
              Strength and wellness are shaped every day by an ecosystem of
              factors including (but not limited to!) nutrition, sleep, stress,
              and trauma. Each session responds actively to this dynamic
              ecosystem while working progressively towards achieving goals.
            </p>
          </div>
          <div className="value-item">
            <div className="ring-icon"></div>
            <h3>Longevity & Cyclical Change</h3>
            <p>
              Our bodies move in cycles. Our relationship to movement is a
              lifetime. Working consciously with these cycles allows for an
              authentic, joyful, and sustainable relationship to movement to
              emerge.
            </p>
          </div>
          <div className="value-item">
            <div className="ring-icon"></div>
            <h3>Trans-centered & Pro-fat</h3>
            <p>
              I celebrate the bodies that are stigmatized within normative gym culture. Every body is rich in experience and worthy of attention and care.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
