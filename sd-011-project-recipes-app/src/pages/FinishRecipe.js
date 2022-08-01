import React, { useState, useEffect } from 'react';
import HeaderFood from '../components/HeaderFood';
import MadeFoodRecipeCard from '../components/MadeFoodRecipeCard';
import MadeDrinksRecipeCard from '../components/MadeDrinksRecipeCard';

function FinishRecipe() {
  const [doneRecipe, setDoneRecipe] = useState([]);
  const [allDoneRecepies, setAllRecepies] = useState();

  function getStorage() {
    const key = localStorage.getItem('doneRecipes');
    const returnObject = JSON.parse(key);
    return returnObject;
  }
  function filterByButton(value) {
    let array = [];
    switch (value) {
    case null:
      global.alert('Você ainda não concluiu nenhuma receita!');
      break;
    case 'Food':
      array = doneRecipe.filter((recipe) => recipe.type === 'comida');
      setDoneRecipe(array);
      console.log(doneRecipe);
      break;
    case 'Drinks':
      array = doneRecipe.filter((recipe) => recipe.type === 'bebida');
      setDoneRecipe(array);
      break;
    case 'All':
      setDoneRecipe(allDoneRecepies);
      break;
    default:
      setDoneRecipe(allDoneRecepies);
      break;
    }
  }
  useEffect(() => {
    const storage = getStorage();
    if (storage === null) {
      global.alert('Você ainda não concluiu nenhuma receita!');
    } else {
      setDoneRecipe(storage);
      setAllRecepies(storage);
    }
  }, []);
  return (
    <div>
      <HeaderFood title="Receitas Feitas" search={ false } />
      <section>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ ({ target: { value } }) => filterByButton(value) }
          className="btnFinishRecipe"
          value="All"
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ ({ target: { value } }) => filterByButton(value) }
          className="btnFinishRecipe"
          value="Food"
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ ({ target: { value } }) => filterByButton(value) }
          className="btnFinishRecipe"
          value="Drinks"
        >
          Drinks
        </button>
      </section>
      <div>
        { doneRecipe.map((recipe, index) => (
          (recipe.type === 'comida')
            ? <MadeFoodRecipeCard recipe={ recipe } index={ index } />
            : <MadeDrinksRecipeCard recipe={ recipe } index={ index } />
        )) }
      </div>
    </div>
  );
}

export default FinishRecipe;
