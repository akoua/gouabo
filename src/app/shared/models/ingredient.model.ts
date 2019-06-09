
export class Ingredient{
    constructor(
        public nom: string,
        public quantity: number,
        public unity: string
    ){
        this.nom = nom;
        this.quantity = quantity;
        this.unity = unity;
    }
}