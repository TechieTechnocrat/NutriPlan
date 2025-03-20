// src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
import MealPlanSection from './components/MealPlanSection';
import BudgetSection from './components/BudgetSection';
import HairHealthSection from './components/HairHealthSection';
import dietData from './data/dietData';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('meal-plan');

  return (
    <div className="container">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="content-area">
        {activeTab === 'meal-plan' && <MealPlanSection data={dietData.days} />}
        {activeTab === 'budget' && <BudgetSection budget={dietData.budget} />}
        {activeTab === 'hair-health' && <HairHealthSection tips={dietData.hairHealthTips} />}
      </div>
    </div>
  );
}

export default App;