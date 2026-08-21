import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Booking | [Business Name]",
};

export default function Booking() {
  return (
    <main>
      <section className="service-hero">
        <span className="eyebrow">Get In Touch</span>
        <h1>Let&apos;s find your time</h1>
        <p>
          Reach out directly to schedule your Reiki session or Personal training
          <br />
          I&apos;ll respond as soon as I can.
        </p>
      </section>

      <section>
        <div className="booking-card">
          <div className="ring-icon-lg"></div>
          <div className="contact-line">
            <span>Email</span>akane.m.little@protonmail.com
          </div>
          <div className="contact-line">
            <span>Instagram</span>{" "}
            <Link href="https://www.instagram.com/akane.little/">
              @akane.little
            </Link>
          </div>
          <div className="hours">
            <p><span>Personal Training sessions </span>available <span>Monday-Friday, 7am-5pm</span></p>
            <p><span>Reiki sessions </span>available <span>Monday-Sunday, 3pm-8pm</span></p>
          </div>
        </div>
      </section>
    </main>
  );
}
