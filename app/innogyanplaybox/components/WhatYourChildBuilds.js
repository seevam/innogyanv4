'use client';

export default function WhatYourChildBuilds() {
  const buildCategories = [
    {
      icon: "🔬",
      title: "Science Experiments",
      description: "Explore the wonders of physics, chemistry, and biology through safe, hands-on experiments."
    },
    {
      icon: "⚙️",
      title: "Engineering Models",
      description: "Build mechanical wonders and learn how things work through practical engineering challenges."
    },
    {
      icon: "🎨",
      title: "Design Projects",
      description: "Create beautiful and functional designs while developing aesthetic sense and problem-solving skills."
    },
    {
      icon: "🧩",
      title: "Fun Challenges & Brain-teasers",
      description: "Engage in puzzles and challenges that develop critical thinking and logical reasoning abilities."
    }
  ];

  return (
    <section className="section builds-section">
      <div className="container">
        <h2 className="section-title fade-in">Tinker Today. Think Like A Creator Tomorrow.</h2>
        <div className="builds-grid">
          {buildCategories.map((category, index) => (
            <div key={index} className="build-category fade-in">
              <h3>{category.icon} {category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
