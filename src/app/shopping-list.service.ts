import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  constructor() { }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(multiIngredients: Ingredient[]) {
    // multiIngredients.map( (ingrediente: Ingredient) => {
    //   this.ingredients.push(ingrediente);
    // });
    this.ingredients.push(...multiIngredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    console.log("Before Update ...");
    console.log(this.ingredients);
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.$ingredients.slice());

    console.log("after updating...");
    console.log(this.ingredients);
  
  }


    /**
     * Getter $ingredients
     * @return {Ingredient[] }
     */
    public get $ingredients(): Ingredient[]  {
      return this.ingredients.slice();
    }

    /**
     * Setter $ingredients
     * @param {Ingredient[] } value
     */
    public set $ingredients(value: Ingredient[] ) {
      this.ingredients = value;
    }

}
