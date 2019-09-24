import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipes_model';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService, private router: ActivatedRoute, private navigateRouter: Router) { }

  ngOnInit() {
    const id = this.router.params.subscribe( (params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  openMenu(event) {
    console.log(event);
  }

  addToShopping() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  toEditRecipe() {
    this.navigateRouter.navigate([`recipes/${this.id}/edit`, this.recipe]);
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.navigateRouter.navigate([`recipes/`]);
  }

}
