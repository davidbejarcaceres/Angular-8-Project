import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(multiIngredients: Ingredient[]) {
    // multiIngredients.map( (ingrediente: Ingredient) => {
    //   this.ingredients.push(ingrediente);
    // });
    this.ingredients.push(...multiIngredients);
    this.ingredientsChanged.next(this.ingredients.slice());
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
