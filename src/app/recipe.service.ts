import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes/recipe-list/recipes_model';
import { Ingredient } from './shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Zucchini Pancake', 'This is simply a test', 'https://static01.nyt.com/images/2019/08/07/dining/el-zucchini-pancakes/merlin_158856510_3c13b817-982c-41a4-999d-21036ee49f57-articleLarge.jpg',
      [
        new Ingredient('Zucchini', 5),
        new Ingredient('Fluor', 1)
      ]),
    new Recipe('Vegetariano', 'This is simply a test', 'https://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/2019/01/18142210/600x400-Stuffed-Portobello-Mushrooms/x.jpg',
      [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoe', 1)
      ]),
    new Recipe('Ceviche', 'This is simply a test', 'https://www.rickbayless.com/wp-content/uploads/2019/04/Shrimp-Coconut-Ceviche-600x400.jpg',
      [
        new Ingredient('Tomatoe', 5),
        new Ingredient('Chochos', 1)
      ]),
    new Recipe('Tiramisu', 'This is simply a test', 'https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/classic-tiramisu_55201.jpg',
      [
        new Ingredient('Eggs', 3),
        new Ingredient('Cheese', 3)
      ])
  ];

  constructor() { }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }


  /**
   * Getter $recipes
   * @return {Recipe[] }
   */
  public get $recipes(): Recipe[] {
    return this.recipes.slice();
  }

  /**
   * Setter $recipes
   * @param {Recipe[] } value
   */
  public set $recipes(value: Recipe[]) {
    this.recipes = value;
  }

}
