import React from 'react';

const DrinkDetail = ({ drink, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg max-w-md">
        <h2 className="text-2xl font-bold mb-4">{drink.strDrink}</h2>
        <button onClick={onClose} className="text-blue-500">Close</button>
      </div>
    </div>
  );
};

export default DrinkDetail;
