// src/components/MealPlanSection.jsx
import React, { useState } from 'react';
import MealCard from './MealCard';

const MealPlanSection = ({ data }) => {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <div className="meal-plan-section">
      <div className="day-selector">
        {data.map((day, index) => (
          <div
            key={index}
            className={`day-card ${selectedDay === index ? 'active' : ''}`}
            onClick={() => setSelectedDay(index)}
          >
            {day.name}
          </div>
        ))}
      </div>
      
      <div className="meals-container">
        {data[selectedDay].meals.map((meal, index) => (
          <MealCard key={index} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default MealPlanSection;