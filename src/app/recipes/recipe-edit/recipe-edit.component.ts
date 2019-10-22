import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe-list/recipes_model';
import { NgForm, Form, FormGroup, NgControl, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipe: Recipe;

  formRecipe: FormGroup;

  constructor(private router: ActivatedRoute, private recipeService: RecipeService, private navigateRouter: Router) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = +params['id'];
      (params['id']) ? this.editMode = true : this.editMode = false;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      this.recipe = recipe;
      recipeName = recipe.name.toString();
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.formRecipe = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onAddIngredient() {
    (<FormArray>this.formRecipe.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.formRecipe.get('ingredients')).removeAt(index);
  }

  onSubmit() {
    if (this.formRecipe.valid) {
      (this.editMode) ? this.recipeService.update(this.id, this.formRecipe.value) : this.recipeService.addRecipe(this.formRecipe.value);
    }
    this.clearForm();
  }

  clearForm() {
    this.formRecipe.reset();
    this.navigateRouter.navigate((this.editMode) ? [`recipes/${this.id}`, this.recipe] : [`recipes/`]);
  }

}
