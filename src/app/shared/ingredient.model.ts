export class Ingredient {
    private _name: string;
    private _amount: number;

	constructor(name: string, amount: number) {
		this._name = name;
		this._amount = amount;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter amount
     * @return {number}
     */
	public get amount(): number {
		return this._amount;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter amount
     * @param {number} value
     */
	public set amount(value: number) {
		this._amount = value;
	}
    

}