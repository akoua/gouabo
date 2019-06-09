import { Ingredient } from './ingredient.model';

export class Plat{

    constructor(        
        public nom: string,
        public pays: string,        
        public ingredients: Ingredient[],
        public id?: string,
        public note?: number,
    ){
        this.id = id;
        this.nom = nom;
        this.pays = pays;
        this.note = note;
        this.ingredients = ingredients;
    }
}