import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test Test Test',
      'https://get.pxhere.com/photo/restaurant-dish-meal-food-produce-macro-plate-meat-lunch-cuisine-steak-asian-food-food-photography-hors-d-oeuvre-food-plating-946936.jpg'
    ),
    new Recipe(
      'Test Recipe 2',
      'Test Test Test 2',
      'https://get.pxhere.com/photo/restaurant-dish-meal-food-produce-macro-plate-meat-lunch-cuisine-steak-asian-food-food-photography-hors-d-oeuvre-food-plating-946936.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
