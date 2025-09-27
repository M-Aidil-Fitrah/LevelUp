import React from 'react';

const About: React.FC = () => {
  const principles = [
    {
      title: "Performance First",
      description: "Every millisecond matters. We optimize for speed, efficiency, and seamless user experiences.",
      icon: "⚡"
    },
    {
      title: "Accessible Design",
      description: "Technology should be inclusive. We build with accessibility at the core, not as an afterthought.",
      icon: "♿"
    },
    {
      title: "Clean Code",
      description: "Maintainable, scalable, and readable code that stands the test of time and grows with your needs.",
      icon: "🧹"
    }
  ];

  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="about-container">
        <header className="section-header">
          <h2 id="about-heading" className="section-title">
            Our Approach
          </h2>
          <p className="section-subtitle">
            We believe great digital products are built on three fundamental principles
          </p>
        </header>

        <div className="principles-grid">
          {principles.map((principle, index) => (
            <article key={index} className="principle-card">
              <div className="principle-icon" aria-hidden="true">
                {principle.icon}
              </div>
              <h3 className="principle-title">
                {principle.title}
              </h3>
              <p className="principle-description">
                {principle.description}
              </p>
            </article>
          ))}
        </div>

        <div className="about-content">
          <div className="content-text">
            <h3>Why Choose LevelUp?</h3>
            <p>
              We're not just developers—we're digital craftspeople who understand that behind every great product is thoughtful planning, clean execution, and genuine care for the user experience.
            </p>
            <p>
              Our team combines technical expertise with design thinking to create solutions that don't just work, but work beautifully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;