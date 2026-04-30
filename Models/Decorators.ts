import { DrinkModel } from "./Models";

export abstract class DrinkDecorator implements DrinkModel{
    protected _model! : DrinkModel;

    constructor(model : DrinkModel){
        this._model = model;
    }

    description(): string {
        return this._model.description();
    }

    price(): number {
        return this._model.price();
    }
}

export class Milk extends DrinkDecorator{
    description(): string {
    return super.description() +
        ", c молоком";
    }

    price(): number {
        return super.price() + 7;
    }
}

export class Sugar extends DrinkDecorator{
    description(): string {
        return super.description() +
            ", с сахаром";
    }

    price(): number {
        return super.price() + 3;
    }
}

export class Caramel extends DrinkDecorator{
    description(): string {
        return super.description() +
            ", с карамелью";
    }

    price(): number {
        return super.price() + 10;
    }
}

export class Matcha extends DrinkDecorator{
    description(): string {
        return super.description() +
            ", маттей";
    }

    price(): number {
        return super.price() + 20;
    }
}
