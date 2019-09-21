import { Recipe } from './recipes_model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.$recipes;
  }

  // itemClicked(itemSelected) {
  //   this.selectedRecipe.emit(itemSelected);
  //   this.recipeService.selectedRecipe.emit(itemSelected);
  // }

}
