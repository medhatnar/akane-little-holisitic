import Testimonials from "app/components/testimonials";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    quote:
      "Akane is a gifted healer imbued with warmth and radiance. Their healing energy filled the space with serenity and joy and their treatment left a heavenly imprint on my body, soul, and psyche. Highly effective and highly recommended. What a treat!",
    name: "Theresa O.",
  },
];

export default function Reiki() {
  return (
    <main>
      <section className="service-hero">
        <span className="eyebrow">Energy Healing</span>
        <h1>Reiki Services</h1>
        <p>
          Gentle, hands-on energy healing to help release tension, restore
          balance, and support whole-body wellbeing.
        </p>
      </section>

      <section>
        <span className="section-label">My Approach</span>
        <h2>How a session feels</h2>
        <div className="approach-grid">
          <div className="approach-card">
            <h3>
              <span className="dot"></span>Presence First
            </h3>
            <p>
              I was first introduced to Reiki by my father. He was certified
              when I was in middle school, and he would offer it to me to help
              with bruises, ankle sprains, and other light injuries. I remember
              the sensation of the injury site becoming tingly, hot, and
              energized, and his reminders that this was a good sign - that the
              pain and inflammation must first get worse before it gets better.
              And with each follow-up session, my injuries would heal.
            </p>
          </div>
          <div className="approach-card">
            <h3>
              <span className="dot"></span>Intuitive Flow
            </h3>
            <p>
              As a lifelong mover, dancer, healer, and earth-oriented person
              drawn to the intelligence of the body, Reiki has allowed me to
              facilitate healing for myself and others in a way that is
              holistic, sustainable, and aligns with my Japanese lineage.
            </p>
          </div>
        </div>
      </section>

      <section>
        <span className="section-label">Background</span>
        <h2>Training &amp; Experience</h2>
        <div className="bg-block">
          <ul className="training">
            <li>
              <a href="https://healthiestmatters.com/what-is-usui-tibetan-reiki.html">
                Usui/Tibetan Reiki Ryoho I & II
              </a>{" "}
              taught by{" "}
              <a href="https://healingreikibrooklyn.com/about-kristin-reed/">
                Kristin Reed
              </a> -
              August 2021
            </li>
            <li>
              <a href="https://www.minkamysteryschool.com/earth-evolution-reiki">
                Earth Evolution Reiki
              </a>{" "}
              taught by{" "}
              <a href="https://www.eomega.org/workshops/teachers/aki-hirata-baker">
                Aki Hirata Baker
              </a>{" "}
              & <a href="https://www.manuriv3r.com/manuriver">Manu Del Prete</a> -
              June 2023
            </li>
            <li>
              <a href="https://reikiscoop.com/usui-reiki/">Usui Reiki I & II</a>{" "}
              taught by{" "}
              <a href="https://www.eomega.org/workshops/teachers/aki-hirata-baker">
                Aki Hirata Baker
              </a>{" "}
              & <a href="https://www.manuriv3r.com/manuriver">Manu Del Prete</a> -
              August 2023
            </li>
            <li>Professional practice since August 2022</li>
          </ul>
        </div>
      </section>

      <section>
        <span className="section-label">Investment</span>
        <h2>Reiki Pricing</h2>
        <div className="pricing-table">
          <div className="price-row">
            <div>
              <div className="name">Single Session</div>
              <div className="desc">
                60 minutes - a full energy healing session including a 10-minute
                intake and 5-minute after-care
              </div>
            </div>
            <div className="amount">
              <span>$90-$140</span>
              <p>sliding scale</p>
            </div>
          </div>
          <div className="price-row">
            <div>
              <div className="name">Online Session</div>
              <div className="desc">
                30 minutes - an energy session facilitated virtually including a
                5-minute intake
              </div>
            </div>
            <div className="amount">
              <span>$40-$100</span>
              <p>sliding scale</p>
            </div>
          </div>
          <div className="price-row">
            <div>
              <div className="name">3-Session Package</div>
              <div className="desc">
                Save when you book a series of sessions.
              </div>
            </div>
            <div className="amount">
              <span>$225-$350</span>
              <p>sliding scale</p>
            </div>
          </div>
        </div>
        <Link
          href="/booking"
          className="cta-btn"
          style={{ marginTop: "2.4rem" }}
        >
          Book a Reiki Session
        </Link>
      </section>
      <Testimonials testimonials={testimonials} />
    </main>
  );
}
