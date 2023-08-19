import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/models/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Meat Cheese',
      'A tasty combination of meat and cheese',
      'https://get.pxhere.com/photo/restaurant-dish-meal-food-produce-macro-plate-meat-lunch-cuisine-steak-asian-food-food-photography-hors-d-oeuvre-food-plating-946936.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Cheese', 20)]
    ),
    new Recipe(
      'Burek',
      'Zna se sta je burek',
      'https://get.pxhere.com/photo/restaurant-dish-meal-food-produce-macro-plate-meat-lunch-cuisine-steak-asian-food-food-photography-hors-d-oeuvre-food-plating-946936.jpg',
      [new Ingredient('Meat', 3), new Ingredient('Testo', 5)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
