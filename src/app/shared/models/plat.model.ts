import { Ingredient } from './ingredient.model';

export class Plat{

    constructor(
        public nom,
        public origine,        
        public ingredients: Ingredient[],
        public note?,
    ){
        this.nom = nom;
        this.origine = origine;
        this.note = note;
        this.ingredients = ingredients;
    }
}