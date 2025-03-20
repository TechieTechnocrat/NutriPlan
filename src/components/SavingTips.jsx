// src/components/SavingTips.jsx
import React from 'react';

const SavingTips = ({ tips }) => {
  return (
    <div className="saving-tips">
      <h3>Saving Tips 💡</h3>
      <div className="tips-list">
        {tips.map((tip, index) => (
          <div key={index} className="tip-item">
            <div className="tip-icon">💡</div>
            <div>{tip}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavingTips;