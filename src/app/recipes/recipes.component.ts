import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipes_model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export  class RecipesComponent implements OnInit {

  selectedItem: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.selectedItem = recipe;
    });
  }

  onSelectedRecipe(recipeFromList: Recipe) {
    console.log(recipeFromList);
    this.selectedItem = recipeFromList;
  }

}
