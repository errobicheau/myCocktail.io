import React, { useState } from 'react';
import _debounce from 'lodash/debounce';

const MyComponent = () => {
  const [searchParams, setSearchParams] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);

  const handleSearch = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchParams}`)
      .then(response => response.json())
      .then(data => {
        const fetchedDrinks = data.drinks;
        setDrinks(fetchedDrinks);
      })
      .catch(err => {
        console.error(`Error ${err}`);
        setError('Internal Server Error');
      });
  };

  // Wraps the handleSearch in the debounce function to delay execution
  const debouncedSearch = _debounce(handleSearch, 300);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchParams(value);
    debouncedSearch();
  };

  const openDrinkDetail = (drink) => {
    setSelectedDrink(drink);
  };

  const closeDrinkDetail = () => {
    setSelectedDrink(null);
  };

  const instructions = selectedDrink ? selectedDrink.strInstructions : '';

const formattedInstructions = instructions.split('. ').map(sentence => (
  <p className="ml-3 mt-1" key={sentence}>{sentence}</p>
));


const ingredients = [];
if (selectedDrink) {
  for (let i = 1; i <= 15; i++) {
    const ingredient = selectedDrink[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push({
        name: ingredient,
        measure: selectedDrink[`strMeasure${i}`] || '',
      });
    }
  }
}

  return (
    <div className="container mt-6">
      <input
        type="text"
        placeholder='Search for a Cocktail'
        value={searchParams}
        onChange={handleInputChange}
        className="w-full h-10 px-3 rounded-md border focus:outline-none focus:ring focus:ring-violet-400/50 focus:border-violet-400 font-light"
      />

      {error && <p>{error}</p>}

      <div className="p-5 border-gray-200/">
      {drinks && drinks.length > 0 && (
        <ul>
          {drinks.map(drink => (
            <li key={drink.idDrink} className="mt-4">
              <div
                className="max-w-full rounded-sm overflow-hidden shadow-lg mt-6 bg-purple-100/25 flex cursor-pointer"
                onClick={() => openDrinkDetail(drink)}
              >
                <img className="w-1/6" src={drink.strDrinkThumb} alt="Drink" />
                <div className="flex-grow px-6 py-4">
                  <h2 className="font-bold text-xl mb-2">{drink.strDrink}</h2>
                
                </div>
              </div>
              
              {selectedDrink && selectedDrink.idDrink === drink.idDrink && (
                <div className="bg-gray-200/50 p-4 rounded-b-sm m">
                
                {/* Ingredients */}
                  <ul className=''>
                    <p className='font-bold'>Ingredients:</p>
                    <ul className='ml-5'>
                        {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            <span>{ingredient.measure}</span> {ingredient.name}
                        </li>
                        ))}
                    </ul>

                {/* Instructions */}
                  <p className='mt-5'><span className="font-bold">Instructions: </span>{formattedInstructions}</p>

                </ul>

                  <button onClick={closeDrinkDetail} className="text-blue-800 hover:text-blue-500 mt-5">Close</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default MyComponent;
