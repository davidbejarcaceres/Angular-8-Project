import { Ingredient } from "src/app/shared/ingredient.model";

export class Recipe {
    private _name: String;
    private _description: string;
    private _imagePath: string;
    private _ingredients: Ingredient[];


	constructor(name: String, description: string, imagePath: string, ingredients?: Ingredient[]) {
		this._name = name;
		this._description = description;
        this._imagePath = imagePath;
        this._ingredients = ingredients;
	}
    

    /**
     * Getter name
     * @return {String}
     */
	public get name(): String {
		return this._name;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter imagePath
     * @return {string}
     */
	public get imagePath(): string {
		return this._imagePath;
	}

    /**
     * Setter name
     * @param {String} value
     */
	public set name(value: String) {
		this._name = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter imagePath
     * @param {string} value
     */
	public set imagePath(value: string) {
		this._imagePath = value;
    }
    

    /**
     * Getter ingredients
     * @return {Ingredient[]}
     */
	public get ingredients(): Ingredient[] {
		return this._ingredients;
	}

    /**
     * Setter ingredients
     * @param {Ingredient[]} value
     */
	public set ingredients(value: Ingredient[]) {
		this._ingredients = value;
	}


}
