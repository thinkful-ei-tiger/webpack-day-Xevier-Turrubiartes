import $ from 'jquery'
import './styles/index.css'
import shoppingList from './scripts/shopping-list.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
