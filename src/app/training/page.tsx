import Testimonials from "app/components/testimonials";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    quote:
      "I have been training with Akane for 2 years and it is honestly one of the best decisions you will ever make. Akane is incredibly knowledgeable about the sciences revolving around the human body and is a master at making and teaching effective workout programs. With them I have achieved all my body and transition related goals. Akane's expertise is unmatched but so is their kindness, PATIENCE, and communication skills. I always have so much fun and confidence training with them! Plus their music taste is fire. I cannot recommend them enough.",
    name: "Nar S. (he/they)",
  },
  {
    id: 2,
    quote:
      "It was a pleasure to have Akane as my personal trainer. They are extremely focused and after asking many questions I felt they had a great understanding of my personal needs and challenges. I was looking for a holistic approach with some emphasis on core and hamstrings. They put together a very exciting and challenging workout regimen with this focus in mind, that was highly effective and fun at the same time. They also gave me a lot of homework that I kept coming back to",
    name: "Jurgen B.",
  },
  {
    id: 3,
    quote:
      "I loved working out with Akane. They are very knowledgeable and understand health holistically. They also always learned new techniques and incorporated them in my workouts. They kept me very motivated to keep working out.",
    name: "Rosie K.",
  },
  {
    id: 4,
    quote:
      "Had the best personal training experience with Akane, they are very knowledgeable, patient, warm, and attentive. They tailored my training plan based on my goals of posture correction, improving my performance in sports climbing and running. I can feel that I am getting stronger and performing better while doing my usual sports activities since I started training with Akane. Would highly recommend Akane to my friends and family.",
    name: "Anonymous",
  },
];

export default function Training() {
  return (
    <main>
      <section className="service-hero">
        <span className="eyebrow">Professional Strength Development</span>
        <h1>Personal Training</h1>
        <p>
          Hone your foundations of strength training while gaining insight into
          how to work out effectively with your own particular body and somatic
          systems.
        </p>
      </section>

      <section>
        <span className="section-label">My Approach</span>
        <h2>How I work with clients</h2>
        <div className="approach-grid">
          <div className="approach-card">
            <h3>
              <span className="dot"></span>Somatic Attunement
            </h3>
            <p>
              Sessions prioritize attunement to the body's cues to understand
              each client's unique body systems. Movement is facilitated with
              attention to these cues, responsively adjusting the level of
              challenge to what is maximally effective for each moment.
            </p>
          </div>
          <div className="approach-card">
            <h3>
              <span className="dot"></span>Functional Strength
            </h3>
            <p>
              Every session is tailored to a client's specific goals, whether it
              is working towards barbell lifts, running with more ease, or
              achieving pushups for the first time.
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
              <a href="https://www.equinox.com/">
                NASM Certified Personal Trainer
              </a>{" "}
              - Fall 2021
            </li>
            <li>
              <a href="https://www.equinox.com/">
                Equinox - Tier 3 Personal Trainer
              </a>{" "}
              - (Fall 2021 - Spring 2022)
            </li>
            <li>
              <a href="https://functionalanatomyseminars.com/frs-system/functional-range-conditioning/">
                Functional Range Conditioning
              </a>{" "}
              - Spring 2022
            </li>
            <li>
              <a href="https://www.trxtraining.com/">TRX Training</a> - Spring
              2022
            </li>
            <li>Equinox - Post-Injury Exercise Specialization - Spring 2022</li>
            <li>
              <a href="https://credentials.nasm.org/01b5a302-5155-47aa-bdc7-23108f108a64#acc.gGlOv24e">
                NASM Certified Nutrition Coach
              </a>{" "}
              - Spring 2025
            </li>
            <li>Professional practice since - Fall 2021</li>
          </ul>
        </div>
      </section>

      <section>
        <span className="section-label">Investment</span>
        <h2>Training Pricing</h2>
        <div className="pricing-table">
          <div className="price-row">
            <div>
              <div className="name">Single Session</div>
              <div className="desc">
                60 minutes - a full workout including 10-minute warm-up and
                10-minute cool-down
              </div>
            </div>
            <div className="amount">
              <span>$80-$120</span>
              <p>sliding scale</p>
            </div>
          </div>
          <div className="price-row">
            <div>
              <div className="name">Online Session:</div>
              <div className="desc">
                60 minutes - a full workout facilitated virtually
              </div>
            </div>
            <div className="amount">
              <span>$70-$100</span>
              <p>sliding scale</p>
            </div>
          </div>
        </div>
        <Link
          href="/booking"
          className="cta-btn"
          style={{ marginTop: "2.4rem" }}
        >
          Book a Training Session
        </Link>
      </section>

      <Testimonials testimonials={testimonials} />
    </main>
  );
}
