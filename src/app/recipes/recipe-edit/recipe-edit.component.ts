import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe-list/recipes_model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipe: Recipe;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe( (params: Params) => {
      this.id = +params['id'];
      (params['id']) ? this.editMode = true :  this.editMode = false;
      console.log(`Edit mode: ${this.editMode}`);
      if (this.editMode) {
        const routerRecipe = this.router.snapshot.params;
        this.recipe = new Recipe(routerRecipe._name, routerRecipe._description, routerRecipe._imagePath, routerRecipe._ingredients);
        console.log(this.recipe);
      }
    });
  }

}
