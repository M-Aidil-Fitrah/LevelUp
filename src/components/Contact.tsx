import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="contact-container">
        <header className="section-header">
          <h2 id="contact-heading" className="section-title">
            Let's Work Together
          </h2>
          <p className="section-subtitle">
            Have a project in mind? We'd love to hear about it.
          </p>
        </header>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a 
                href="mailto:hello@levelup.dev" 
                className="contact-link"
                aria-label="Send email to hello@levelup.dev"
              >
                hello@levelup.dev
              </a>
            </div>

            <div className="contact-item">
              <h3>Response Time</h3>
              <p>We typically respond within 24 hours</p>
            </div>

            <div className="contact-item">
              <h3>Location</h3>
              <p>Remote-first team, worldwide</p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" aria-label="Contact form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  required
                  aria-required="true"
                  aria-describedby="name-error"
                />
                <span id="name-error" className="error-message" role="alert"></span>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  required
                  aria-required="true"
                  aria-describedby="email-error"
                />
                <span id="email-error" className="error-message" role="alert"></span>
              </div>

              <div className="form-group">
                <label htmlFor="project" className="form-label">
                  Tell us about your project *
                </label>
                <textarea
                  id="project"
                  name="project"
                  className="form-textarea"
                  rows={5}
                  required
                  aria-required="true"
                  aria-describedby="project-error project-help"
                ></textarea>
                <span id="project-help" className="form-help">
                  Share your goals, timeline, and any specific requirements
                </span>
                <span id="project-error" className="error-message" role="alert"></span>
              </div>

              <button type="submit" className="form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;