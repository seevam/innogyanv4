'use client';

export default function Safety() {
  const safetyFeatures = [
    {
      icon: "🛡️",
      title: "Child-Safe, Certified Materials",
      description: "All materials meet strict safety standards and are tested for child safety and durability."
    },
    {
      icon: "✅",
      title: "Quality-Tested Components",
      description: "Every component undergoes rigorous quality testing to ensure reliability and safety during use."
    },
    {
      icon: "🌱",
      title: "Eco-Friendly, Sustainable Packaging",
      description: "Our commitment to the environment includes sustainable, recyclable packaging materials."
    }
  ];

  return (
    <section className="section safety-section" id="safety">
      <div className="container">
        <h2 className="section-title fade-in">Safety Comes First</h2>
        <div className="safety-features">
          {safetyFeatures.map((feature, index) => (
            <div key={index} className="safety-feature fade-in">
              <span className="safety-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
