// src/components/BudgetSection.jsx
import React from 'react';
import BudgetCategory from './BudgetCategory';
import SavingTips from './SavingTips';

const BudgetSection = ({ budget }) => {
  return (
    <div className="budget-section">
      <div className="budget-overview">
        <div>
          <div className="budget-total">{budget.totalMonthly}</div>
          <div className="budget-period">Estimated Monthly Expense</div>
        </div>
        <div style={{ fontSize: '32px', color: 'var(--primary)' }}>💰</div>
      </div>
      
      <div className="budget-categories">
        {budget.categories.map((category, index) => (
          <BudgetCategory key={index} category={category} />
        ))}
      </div>
      
      <SavingTips tips={budget.savingTips} />
    </div>
  );
};

export default BudgetSection;