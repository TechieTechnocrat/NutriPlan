// src/components/Header.jsx
import React from 'react';

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <header>
      <div className="logo">
        <div className="logo-icon">🥗</div>
        <span>NutriPlan</span>
      </div>
      <div className="nav-tabs">
        <div 
          className={`nav-tab ${activeTab === 'meal-plan' ? 'active' : ''}`} 
          onClick={() => setActiveTab('meal-plan')}
        >
          Meal Plan
        </div>
        <div 
          className={`nav-tab ${activeTab === 'budget' ? 'active' : ''}`} 
          onClick={() => setActiveTab('budget')}
        >
          Budget
        </div>
        <div 
          className={`nav-tab ${activeTab === 'hair-health' ? 'active' : ''}`} 
          onClick={() => setActiveTab('hair-health')}
        >
          Hair Health
        </div>
      </div>
    </header>
  );
};

export default Header;