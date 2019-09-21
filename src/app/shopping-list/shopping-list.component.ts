import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, NgModule } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService ) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.$ingredients;
    this.shoppingListService.ingredientsChanged.subscribe( (updatedIngredients: Ingredient[]) => {
      this.ingredients = updatedIngredients;
    });
  }

}
