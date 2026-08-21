export default function Testimonials({
  testimonials,
}: {
  testimonials: { id: number ,quote: string; name: string }[];
}) {
  return (
    <section className="testimonial">
      <div>
        {/* Section heading */}
        <div>
          <h2>Client Testimonials</h2>
        </div>

        {/* Testimonials */}
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <div className="testimonial-card">
                <blockquote>
                  <p>
                    “{testimonial.quote}”
                  </p>
                </blockquote>
                - {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
