import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern frameworks, optimized for performance and accessibility.",
      details: ["React & TypeScript", "Performance Optimization", "SEO & Accessibility"]
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that balances aesthetics with functionality and usability.",
      details: ["User Research", "Wireframing & Prototyping", "Design Systems"]
    },
    {
      title: "Technical Consulting",
      description: "Strategic guidance on technology choices, architecture, and best practices for your project.",
      details: ["Code Audits", "Architecture Planning", "Team Training"]
    }
  ];

  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="services-container">
        <header className="section-header">
          <h2 id="services-heading" className="section-title">
            What We Do
          </h2>
          <p className="section-subtitle">
            Focused expertise in the areas that matter most for modern digital products
          </p>
        </header>

        <div className="services-grid">
          {services.map((service, index) => (
            <article key={index} className="service-card">
              <div className="service-content">
                <h3 className="service-title">
                  {service.title}
                </h3>
                <p className="service-description">
                  {service.description}
                </p>
                <ul className="service-details" aria-label={`${service.title} includes`}>
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to get started?</h3>
            <p>Let's discuss how we can help bring your project to life.</p>
            <a 
              href="#contact" 
              className="cta-link"
              aria-describedby="contact-info"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Get in touch
            </a>
            <p id="contact-info" className="cta-info">
              Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;