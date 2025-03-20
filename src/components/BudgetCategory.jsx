// src/components/BudgetCategory.jsx
import React from 'react';

const BudgetCategory = ({ category }) => {
  return (
    <div className="budget-category">
      <div className="category-name">{category.name}</div>
      <div className="item-list">
        {category.items.map((item, index) => (
          <div key={index} className="budget-item">
            <div className="item-details">
              <span className="item-name">{item.name}</span>
              <span className="item-quantity">{item.quantity}</span>
              <span className="item-shop">{item.shop}</span>
            </div>
            <div className="item-cost">{item.cost}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetCategory;