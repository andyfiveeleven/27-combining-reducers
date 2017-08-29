import {combineReducers} from 'redux';
import expensesReducer from './expenses.js';

export default combineReducers({
  expenses: cardsReducer,
  categories: categoriesReducer
});
