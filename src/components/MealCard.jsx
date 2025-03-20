// src/components/MealCard.jsx
import React from 'react';

const MealCard = ({ meal }) => {
  // Get meal icon based on meal type
  const getMealIcon = (mealType) => {
    switch(mealType) {
      case "Breakfast": return "☕";
      case "Lunch": return "🍲";
      case "Evening Snack": return "🥤";
      case "Dinner": return "🍽️";
      default: return "🍽️";
    }
  };

  console.log("meal")

  return (
    <div className="meal-card">
      <div className="meal-type">
        <span className="meal-icon">{getMealIcon(meal.type)}</span>
        {meal.type}
      </div>
      <ul className="meal-items">
        {meal.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="protein-tag">🥩 {meal.protein}</div>
    </div>
  );
};

export default MealCard;