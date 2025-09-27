import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Beautiful Typography",
      description: "Experience elegant design with Montserrat Alternates font family",
      weight: "font-light",
      icon: "✨"
    },
    {
      title: "Modern Interface",
      description: "Clean and intuitive user experience that delights users",
      weight: "font-medium",
      icon: "🎨"
    },
    {
      title: "Fast Performance",
      description: "Lightning-fast loading times and smooth interactions",
      weight: "font-semibold",
      icon: "⚡"
    },
    {
      title: "Responsive Design",
      description: "Perfect on desktop, tablet, and mobile devices",
      weight: "font-bold",
      icon: "📱"
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Why Choose Our Platform?
          </h2>
          <p className="features-subtitle">
            Discover what makes us different with these amazing features
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className={`feature-title ${feature.weight}`}>
                {feature.title}
              </h3>
              <p className="feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="font-showcase">
          <h3 className="showcase-title">Font Weight Showcase</h3>
          <div className="font-examples">
            <p className="font-thin">Thin (100) - Elegant and minimal</p>
            <p className="font-light">Light (300) - Subtle and refined</p>
            <p className="font-normal">Regular (400) - Perfect for body text</p>
            <p className="font-medium">Medium (500) - Balanced and clear</p>
            <p className="font-semibold">Semibold (600) - Strong emphasis</p>
            <p className="font-bold">Bold (700) - Bold statements</p>
            <p className="font-extrabold">Extra Bold (800) - Maximum impact</p>
            <p className="font-black">Black (900) - Ultimate boldness</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;