import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes_model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // onSelected() {
  //   console.log(this.recipe);
  //   this.recipeService.selectedRecipe.emit(this.recipe);
  // }

}
