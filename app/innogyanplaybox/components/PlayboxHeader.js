'use client';

export default function PlayboxHeader() {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="nav-container">
        <a href="/" className="logo">
          <span className="rocket">🚀</span>
          Innogyan PLAYBOX
        </a>
        <div className="nav-links">
          <a onClick={() => scrollToSection('#how-it-works')}>How It Works</a>
          <a onClick={() => scrollToSection('#projects')}>Projects</a>
          <a onClick={() => scrollToSection('#benefits')}>Benefits</a>
          <a onClick={() => scrollToSection('#safety')}>Safety</a>
        </div>
      </div>
    </header>
  );
}
