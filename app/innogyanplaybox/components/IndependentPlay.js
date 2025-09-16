'use client';

export default function IndependentPlay() {
  const benefits = [
    {
      title: "Designed for Self-Paced Discovery",
      description: "Each project is carefully designed to allow children to learn and explore at their own pace, building confidence through independent achievement."
    },
    {
      title: "Child-Friendly Instructions", 
      description: "Clear, visual instructions with simple language ensure that children can follow along without frustration or confusion."
    },
    {
      title: "Minimal Parental Supervision",
      description: "While parents can join the fun, these projects are designed for independent exploration, giving parents peace of mind."
    },
    {
      title: "Builds Confidence with Every Build",
      description: "Each completed project reinforces problem-solving skills and builds the confidence to tackle increasingly complex challenges."
    }
  ];

  return (
    <section className="section benefits-section">
      <div className="container">
        <h2 className="section-title fade-in">Your Child Can Build Independently</h2>
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
