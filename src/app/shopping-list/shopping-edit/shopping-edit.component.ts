import { Component, OnInit} from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(form: NgForm) {
    console.log(form);
    if (form.value.inputName) {
      var newIngredient: Ingredient = new Ingredient(form.value.inputName, form.value.inputAmount);    
      this.shoppingListService.addIngredient(newIngredient);
    }
  }

}
