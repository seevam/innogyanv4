'use client';

export default function Benefits() {
  const benefits = [
    {
      title: "Creative Problem-Solving",
      description: "Develop the ability to think outside the box and find innovative solutions to complex challenges through hands-on experimentation."
    },
    {
      title: "Logical Thinking",
      description: "Build systematic thinking patterns and analytical skills that form the foundation for mathematical and scientific reasoning."
    },
    {
      title: "Early Science & Engineering Foundations",
      description: "Establish a strong base in STEM concepts through practical application and experiential learning rather than theoretical study."
    },
    {
      title: "Motor Skills & Cognitive Development",
      description: "Enhance fine motor skills and hand-eye coordination while strengthening neural pathways crucial for overall development."
    }
  ];

  return (
    <section className="section benefits-section" id="benefits">
      <div className="container">
        <h2 className="section-title fade-in">Build Skills That Will Last A Lifetime</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card fade-in">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
