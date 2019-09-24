import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('Ingredient', {static: false}) slForm: NgForm;
  nameIngredient: String = '';
  editMode: boolean = false;
  subscription: Subscription;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe( (index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(this.editedItemIndex);
      this.slForm.setValue({
        inputName: this.editedItem.name,
        inputAmount: this.editedItem.amount
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddIngredient(form: NgForm) {
    console.log(form);
    if (form.value.inputName && form.value.inputAmount) {
      const newIngredient: Ingredient = new Ingredient(form.value.inputName, form.value.inputAmount);
      if (this.editMode) {
        this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
      } else {
        this.shoppingListService.addIngredient(newIngredient);
      }
    }

    this.clearForm(form);
  }

  clearForm(form: NgForm) {
    form.reset();
    this.editMode = false;
  }

  deleteRecipe() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.editMode = false;
    this.slForm.reset();
  }

}
