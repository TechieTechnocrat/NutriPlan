// src/components/HairHealthSection.jsx
import React from 'react';

const HairHealthSection = ({ tips }) => {
  return (
    <div className="hair-health">
      <div className="health-card">
        <h3>
          <span style={{ fontSize: '24px' }}>💇‍♀️</span>
          Hair Health Nutrition Tips
        </h3>
        <div className="health-tips">
          {tips.map((tip, index) => (
            <div key={index} className="health-tip">
              <div className="health-icon">✨</div>
              <div>{tip}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HairHealthSection;