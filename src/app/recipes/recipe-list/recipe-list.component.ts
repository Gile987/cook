import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Test Test', 'https://get.pxhere.com/photo/restaurant-dish-meal-food-produce-macro-plate-meat-lunch-cuisine-steak-asian-food-food-photography-hors-d-oeuvre-food-plating-946936.jpg'),
    new Recipe('Test Recipe 2', 'Test Test Test 2', 'https://get.pxhere.com/photo/restaurant-dish-meal-food-produce-macro-plate-meat-lunch-cuisine-steak-asian-food-food-photography-hors-d-oeuvre-food-plating-946936.jpg'),

  ];
  

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
