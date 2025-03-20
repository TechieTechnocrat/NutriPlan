// src/data/dietData.js
const dietData = {
    days: [
      {
        name: "Monday",
        meals: [
          { 
            type: "Breakfast", 
            items: ["Oatmeal with milk & honey", "2 boiled eggs (or paneer bhurji)", "1 banana", "Green tea"],
            protein: "Eggs/Paneer, Milk"
          },
          { 
            type: "Lunch", 
            items: ["Chicken breast curry with brown rice (OR Palak paneer)", "Side of cucumber-tomato salad", "Small bowl of curd"],
            protein: "Chicken/Paneer, Curd"
          },
          { 
            type: "Evening Snack", 
            items: ["Greek yogurt with mixed nuts", "1 apple"],
            protein: "Greek yogurt, Nuts"
          },
          { 
            type: "Dinner", 
            items: ["Dal tadka", "2 multigrain rotis", "Sautéed vegetables", "Small bowl of curd"],
            protein: "Dal, Curd"
          }
        ]
      },
      {
        name: "Tuesday",
        meals: [
          { 
            type: "Breakfast", 
            items: ["Spinach & mushroom omelette (OR Besan chilla)", "1 slice multigrain toast", "Chai"],
            protein: "Eggs/Besan"
          },
          { 
            type: "Lunch", 
            items: ["Rajma curry with brown rice", "Mixed vegetable sabzi", "Small bowl of curd"],
            protein: "Rajma, Curd"
          },
          { 
            type: "Evening Snack", 
            items: ["Protein smoothie (banana, nut butter, milk)", "5-6 almonds"],
            protein: "Milk, Nuts"
          },
          { 
            type: "Dinner", 
            items: ["Grilled fish with herbs (OR Tofu stir-fry)", "Sautéed broccoli and carrots", "1 multigrain roti"],
            protein: "Fish/Tofu"
          }
        ]
      },
      {
        name: "Wednesday",
        meals: [
          { 
            type: "Breakfast", 
            items: ["Paneer paratha (OR Egg bhurji)", "1 orange", "Green tea"],
            protein: "Paneer/Eggs"
          },
          { 
            type: "Lunch", 
            items: ["Chicken tikka with mint chutney (OR Chana masala)", "Vegetable pulao", "Cucumber raita"],
            protein: "Chicken/Chana, Curd"
          },
          { 
            type: "Evening Snack", 
            items: ["Roasted chickpeas", "1 cup fruit salad"],
            protein: "Chickpeas"
          },
          { 
            type: "Dinner", 
            items: ["Moong dal khichdi", "Sautéed spinach with garlic", "Small bowl of curd"],
            protein: "Moong dal, Curd"
          }
        ]
      },
      {
        name: "Thursday",
        meals: [
          { 
            type: "Breakfast", 
            items: ["Masala dosa with sambar (OR Egg white omelette)", "1 cup watermelon", "Chai"],
            protein: "Lentils/Eggs"
          },
          { 
            type: "Lunch", 
            items: ["Kadai paneer (OR Chicken curry)", "2 multigrain rotis", "Cucumber-tomato salad"],
            protein: "Paneer/Chicken"
          },
          { 
            type: "Evening Snack", 
            items: ["Yogurt parfait (Greek yogurt, berries, honey)", "Mixed seeds"],
            protein: "Greek yogurt, Seeds"
          },
          { 
            type: "Dinner", 
            items: ["Baked fish with lemon (OR Paneer tikka)", "Stir-fried vegetables", "1/2 cup brown rice"],
            protein: "Fish/Paneer"
          }
        ]
      },
      {
        name: "Friday",
        meals: [
          { 
            type: "Breakfast", 
            items: ["Vegetable upma with peanuts", "2 boiled eggs", "1 apple", "Green tea"],
            protein: "Eggs, Peanuts"
          },
          { 
            type: "Lunch", 
            items: ["Lentil soup", "Grilled chicken sandwich (OR Paneer sandwich)", "Carrot & cucumber sticks"],
            protein: "Lentils, Chicken/Paneer"
          },
          { 
            type: "Evening Snack", 
            items: ["Homemade trail mix (nuts, seeds, dried fruits)", "1 cup buttermilk"],
            protein: "Nuts, Seeds, Buttermilk"
          },
          { 
            type: "Dinner", 
            items: ["Egg curry (OR Malai kofta)", "2 multigrain rotis", "Cucumber raita"],
            protein: "Eggs/Paneer, Curd"
          }
        ]
      },
      {
        name: "Saturday",
        meals: [
          { 
            type: "Breakfast", 
            items: ["Scrambled eggs with spinach (OR Masala tofu scramble)", "1 slice multigrain toast", "Chai"],
            protein: "Eggs/Tofu"
          },
          { 
            type: "Lunch", 
            items: ["Chicken biryani (OR Veg biryani with extra paneer)", "Mixed vegetable raita", "Cucumber-onion salad"],
            protein: "Chicken/Paneer, Curd"
          },
          { 
            type: "Evening Snack", 
            items: ["Sprouts chat", "1 banana"],
            protein: "Sprouts"
          },
          { 
            type: "Dinner", 
            items: ["Grilled chicken with herbs (OR Paneer tikka masala)", "1 multigrain roti", "Sautéed mixed vegetables"],
            protein: "Chicken/Paneer"
          }
        ]
      },
      {
        name: "Sunday",
        meals: [
          { 
            type: "Breakfast", 
            items: ["Poha with peanuts and vegetables", "2 boiled eggs (OR Paneer bhurji)", "1 orange", "Green tea"],
            protein: "Eggs/Paneer, Peanuts"
          },
          { 
            type: "Lunch", 
            items: ["Butter chicken (OR Paneer butter masala)", "1/2 cup jeera rice", "Garden salad"],
            protein: "Chicken/Paneer"
          },
          { 
            type: "Evening Snack", 
            items: ["Protein shake (whey/plant protein, banana, milk)", "5-6 walnuts"],
            protein: "Protein powder, Nuts"
          },
          { 
            type: "Dinner", 
            items: ["Vegetable soup", "Multigrain khichdi", "Roasted vegetables"],
            protein: "Lentils"
          }
        ]
      }
    ],
    budget: {
      categories: [
        {
          name: "Proteins",
          items: [
            { name: "Eggs", quantity: "2 dozen/week", cost: "₹180-240", shop: "Blinkit/Instamart" },
            { name: "Paneer", quantity: "500g/week", cost: "₹175-200", shop: "Big Basket" },
            { name: "Chicken breast", quantity: "1kg/week", cost: "₹250-300", shop: "Swiggy/Big Basket" },
            { name: "Tofu", quantity: "400g/week", cost: "₹160-200", shop: "Big Basket" },
            { name: "Greek yogurt", quantity: "500g/week", cost: "₹75-100", shop: "Blinkit/Instamart" },
            { name: "Lentils/Dal mix", quantity: "1kg/month", cost: "₹120-150", shop: "Big Basket/Amazon" }
          ]
        },
        {
          name: "Fruits & Vegetables",
          items: [
            { name: "Spinach/Palak", quantity: "2 bunches/week", cost: "₹60-80", shop: "Blinkit/Instamart" },
            { name: "Broccoli", quantity: "1 head/week", cost: "₹80-100", shop: "Big Basket" },
            { name: "Mixed vegetables", quantity: "1kg/week", cost: "₹100-150", shop: "Blinkit/Instamart" },
            { name: "Bananas", quantity: "6-7/week", cost: "₹35-40", shop: "Blinkit/Instamart" },
            { name: "Apples", quantity: "3-4/week", cost: "₹80-100", shop: "Big Basket" },
            { name: "Seasonal fruits", quantity: "500g/week", cost: "₹100-150", shop: "Local market" }
          ]
        },
        {
          name: "Grains & Others",
          items: [
            { name: "Multigrain atta", quantity: "2kg/month", cost: "₹140-160", shop: "Amazon Fresh" },
            { name: "Brown rice", quantity: "1kg/month", cost: "₹80-100", shop: "Big Basket" },
            { name: "Oats", quantity: "1kg/month", cost: "₹150-200", shop: "Amazon" },
            { name: "Mixed nuts", quantity: "200g/week", cost: "₹200-250", shop: "Amazon" },
            { name: "Olive oil", quantity: "1 bottle/month", cost: "₹250-300", shop: "Big Basket" },
            { name: "Honey", quantity: "1 jar/month", cost: "₹200-250", shop: "Amazon" }
          ]
        }
      ],
      totalMonthly: "₹3,000-3,500",
      savingTips: [
        "Buy lentils and grains in bulk once a month",
        "Purchase seasonal fruits and vegetables",
        "Subscribe to recurring deliveries for 5-10% discount",
        "Shop for non-perishables during sale events",
        "Use Blinkit/Instamart for urgent needs only",
        "Meal prep on weekends to avoid wastage",
        "Buy larger quantities of paneer/chicken and freeze portions",
        "Compare prices across platforms before ordering"
      ]
    },
    hairHealthTips: [
      "Biotin-rich foods: Eggs, nuts, seeds",
      "Iron sources: Spinach, lentils, chickpeas",
      "Omega-3: Flaxseeds, chia seeds",
      "Stay hydrated with 2-3 liters of water daily",
      "Protein intake of 60-80g daily",
      "Include zinc-rich foods: Pumpkin seeds, lentils",
      "Regular consumption of vitamin C for collagen production",
      "Consider a biotin supplement after consulting a doctor"
    ]
  };
  
  export default dietData;