'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Every 15 days, a surprise box arrives",
      description: "Anticipation builds as each carefully curated box arrives at your doorstep with new adventures inside."
    },
    {
      number: 2,
      title: "Each box contains a new hands-on building project",
      description: "Discover exciting STEM projects designed to challenge and inspire young minds through creative building."
    },
    {
      number: 3,
      title: "Simple instructions, zero screens, fully interactive",
      description: "Child-friendly guides ensure independent learning without digital distractions, fostering real-world skills."
    },
    {
      number: 4,
      title: "30–60 minutes of daily discovery over 15 days",
      description: "Perfect project pacing that fits into busy schedules while maintaining engagement and learning momentum."
    }
  ];

  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <h2 className="section-title fade-in">Surprise. Build. Learn. Repeat.</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card fade-in">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
